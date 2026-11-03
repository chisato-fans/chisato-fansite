// ============================================================
// share.js
// Canvas APIによる画像生成、画像保存、SNS(X)シェアを担当するモジュール。
// 外部ライブラリを使わず、ブラウザ標準機能のみで実現する。
// ============================================================

// Canvasはブラウザのcss変数を参照できないため、css/base.cssのテーマカラーと
// 合わせた値をここで直接定義する。テーマカラーを変更する場合はここも更新する。
const SHARE_COLORS = {
  paper: "#f6f2e4",
  paperRaised: "#fffdf6",
  ink: "#2c2a1e",
  inkSoft: "#6f6a54",
  matcha: "#8bc224",
  matchaDeep: "#4f7a12",
  matchaPale: "#e9f6cf",
  stamp: "#b9472f",
  gold: "#b8923f",
  goldPale: "#f1e3c2",
  line: "#d8d0b8",
};

const SHARE_FONT_DISPLAY = '"RocknRoll One", "Hiragino Sans", sans-serif';
const SHARE_FONT_BODY = '"Zen Kaku Gothic New", "Hiragino Sans", "Yu Gothic", sans-serif';
const SHARE_FONT_SCORE = '"DotGothic16", "Zen Kaku Gothic New", monospace';

/** 角丸四角形のパスを作る(ビンゴマスの描画で使用)。 */
function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** アイテム名ラベルを中央揃え・最大2行で描画する(ビンゴマスの描画で使用)。 */
function drawCellLabel(ctx, text, centerX, startY, maxWidth, lineHeight) {
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  const chars = Array.from(text);
  const lines = [];
  let line = "";
  chars.forEach((ch) => {
    const testLine = line + ch;
    if (ctx.measureText(testLine).width > maxWidth && line !== "") {
      lines.push(line);
      line = ch;
    } else {
      line = testLine;
    }
  });
  if (line) lines.push(line);

  const shown = lines.slice(0, 2);
  if (lines.length > 2) {
    let last = shown[1];
    while (last.length > 1 && ctx.measureText(`${last}…`).width > maxWidth) {
      last = last.slice(0, -1);
    }
    shown[1] = `${last}…`;
  }
  shown.forEach((l, i) => ctx.fillText(l, centerX, startY + i * lineHeight));
}

function loadImageAsync(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** アイテムのアイコン(画像 or 絵文字)をCanvasに描画する。 */
async function drawItemIconOnCanvas(ctx, item, x, y, size) {
  if (item.image) {
    try {
      const img = await loadImageAsync(item.image);
      ctx.drawImage(img, x, y, size, size);
      return;
    } catch (e) {
      // 画像読み込みに失敗した場合は絵文字表示にフォールバック
    }
  }
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${Math.floor(size * 0.75)}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
  ctx.fillStyle = SHARE_COLORS.ink;
  ctx.fillText(item.emoji || "🎁", x + size / 2, y + size / 2 + size * 0.05);
}

/** 未獲得マス用に、アイテムのシルエット画像(無ければ🔒)をCanvasに描画する。 */
async function drawLockedIconOnCanvas(ctx, item, x, y, size) {
  if (item.silhouette) {
    try {
      const img = await loadImageAsync(item.silhouette);
      ctx.save();
      ctx.filter = "brightness(0) opacity(0.4)";
      ctx.drawImage(img, x, y, size, size);
      ctx.restore();
      return;
    } catch (e) {
      // 画像読み込みに失敗した場合は🔒表示にフォールバック
    }
  }
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${Math.floor(size * 0.75)}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
  ctx.fillStyle = SHARE_COLORS.inkSoft;
  ctx.globalAlpha = 0.5;
  ctx.fillText("🔒", x + size / 2, y + size / 2 + size * 0.05);
  ctx.globalAlpha = 1;
}

/** ビンゴカード保存用の画像(1080x1400)を生成する。 */
async function generateBingoShareCanvas(state) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1400;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = SHARE_COLORS.paper;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = SHARE_COLORS.ink;
  ctx.lineWidth = 6;
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

  ctx.textAlign = "center";
  ctx.fillStyle = SHARE_COLORS.matchaDeep;
  ctx.font = `46px ${SHARE_FONT_DISPLAY}`;
  ctx.fillText(SITE_CONFIG.siteName, canvas.width / 2, 110);

  ctx.fillStyle = SHARE_COLORS.inkSoft;
  ctx.font = `26px ${SHARE_FONT_BODY}`;
  ctx.fillText("MY COLLECTION BINGO CARD", canvas.width / 2, 155);

  const gridSize = 5;
  const gridPixel = 860;
  const cellSize = gridPixel / gridSize;
  const gridLeft = (canvas.width - gridPixel) / 2;
  const gridTop = 200;

  const cardView = buildBingoCardView(state);

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = cardView[row * gridSize + col];
      const x = gridLeft + col * cellSize;
      const y = gridTop + row * cellSize;
      const cellX = x + 4;
      const cellY = y + 4;
      const cellW = cellSize - 8;
      const cellH = cellSize - 8;
      const cellRadius = cellSize * 0.07;

      let fill;
      let stroke;
      let dashed = false;
      if (cell.isFree) {
        fill = SHARE_COLORS.goldPale;
        stroke = SHARE_COLORS.gold;
      } else if (cell.opened) {
        fill = SHARE_COLORS.paperRaised;
        stroke = SHARE_COLORS.matcha;
      } else {
        fill = SHARE_COLORS.paper;
        stroke = SHARE_COLORS.line;
        dashed = true;
      }

      roundRectPath(ctx, cellX, cellY, cellW, cellH, cellRadius);
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = stroke;
      if (dashed) ctx.setLineDash([6, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      if (cell.isFree) {
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `${Math.floor(cellSize * 0.17)}px ${SHARE_FONT_DISPLAY}`;
        ctx.fillStyle = "#6b5220";
        ctx.fillText("FREE", x + cellSize / 2, y + cellSize / 2);
      } else if (cell.opened) {
        const iconSize = cellSize * 0.56;
        const iconX = x + (cellSize - iconSize) / 2;
        const iconY = y + cellSize * 0.08;
        await drawItemIconOnCanvas(ctx, cell.item, iconX, iconY, iconSize);
        ctx.font = `${Math.floor(cellSize * 0.09)}px ${SHARE_FONT_BODY}`;
        ctx.fillStyle = SHARE_COLORS.inkSoft;
        drawCellLabel(ctx, cell.item.name, x + cellSize / 2, iconY + iconSize + cellSize * 0.06, cellSize * 0.92, cellSize * 0.11);
      } else {
        const iconSize = cellSize * 0.56;
        const iconX = x + (cellSize - iconSize) / 2;
        const iconY = y + (cellSize - iconSize) / 2;
        await drawLockedIconOnCanvas(ctx, cell.item, iconX, iconY, iconSize);
      }
    }
  }

  const { totalAcquired, totalItemCount } = getItemProgress(state);
  const { totalCleared, totalQuizCount, percent } = getQuizProgress(state);

  ctx.textAlign = "center";
  ctx.fillStyle = SHARE_COLORS.matchaDeep;
  ctx.font = `36px ${SHARE_FONT_SCORE}`;
  ctx.fillText(`ITEMS  ${totalAcquired} / ${totalItemCount}`, canvas.width / 2, gridTop + gridPixel + 70);
  ctx.font = `28px ${SHARE_FONT_SCORE}`;
  ctx.fillStyle = SHARE_COLORS.inkSoft;
  ctx.fillText(`QUIZ  ${totalCleared} / ${totalQuizCount} (${percent}% COMPLETE)`, canvas.width / 2, gridTop + gridPixel + 120);

  ctx.fillStyle = SHARE_COLORS.matchaDeep;
  ctx.font = `bold 24px ${SHARE_FONT_BODY}`;
  ctx.fillText(SITE_CONFIG.siteUrl || SITE_CONFIG.siteName, canvas.width / 2, canvas.height - 50);

  return canvas;
}

/** Canvasの内容をPNGファイルとしてダウンロードさせる。 */
function downloadCanvasAsPng(canvas, filename) {
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }, "image/png");
}

function canvasToBlobAsync(canvas) {
  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

/** 獲得アイテムのシェア用テキストを組み立てる。 */
function buildItemShareText(item, correctCount, totalQuestions) {
  const tags = SITE_CONFIG.shareHashtags.map((t) => `#${t}`).join(" ");
  const lines = [
    `${correctCount}/${totalQuestions}問正解!「${SITE_CONFIG.siteName}」で「${item.name}」をゲット!🎉`,
    tags,
  ];
  if (SITE_CONFIG.siteUrl) {
    lines.push(SITE_CONFIG.siteUrl);
  }
  return lines.join("\n");
}

/**
 * Xの投稿画面(intent)をテキスト付きで開く。
 * クリックのその場で(await等を挟まず)同期的に呼ぶこと。非同期処理を挟むと、
 * iOSのSafari等ではユーザー操作とみなされずアプリ起動・新規タブ表示が
 * ブロックされてしまうため。
 */
function openXShareIntent(text) {
  const intentUrl = `https://twitter.com/intent/tweet?${new URLSearchParams({ text })}`;
  const a = document.createElement("a");
  a.href = intentUrl;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** 「Xでシェア」ボタンから呼ばれる処理。Xの投稿画面を文面付きで開く。 */
function shareItemToSns(item, correctCount, totalQuestions) {
  const text = buildItemShareText(item, correctCount, totalQuestions);
  openXShareIntent(text);
}

/**
 * 「ビンゴカードを保存」ボタン(コレクション画面)から呼ばれる処理。
 * ファイル共有に対応した環境(主にスマートフォン)ではnavigator.share()を使い、
 * OS標準の共有シートから「画像を保存」でカメラロールに直接保存できるようにする。
 * 非対応環境では、従来通りブラウザのダウンロード機能にフォールバックする。
 */
async function saveBingoCardImage(state) {
  const canvas = await generateBingoShareCanvas(state);
  const filename = "chisato-quiz-gacha_bingo-card.png";

  if (navigator.canShare) {
    try {
      const blob = await canvasToBlobAsync(canvas);
      if (blob) {
        const file = new File([blob], filename, { type: "image/png" });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file] });
          return;
        }
      }
    } catch (e) {
      if (e && e.name === "AbortError") return; // ユーザーがキャンセルした
      // それ以外のエラーはフォールバックへ
    }
  }

  downloadCanvasAsPng(canvas, filename);
}
