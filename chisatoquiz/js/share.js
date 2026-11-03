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
};

const SHARE_FONT_DISPLAY = '"RocknRoll One", "Hiragino Sans", sans-serif';
const SHARE_FONT_BODY = '"Zen Kaku Gothic New", "Hiragino Sans", "Yu Gothic", sans-serif';
const SHARE_FONT_SCORE = '"DotGothic16", "Zen Kaku Gothic New", monospace';

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

      ctx.fillStyle = cell.isFree ? SHARE_COLORS.goldPale : cell.opened ? SHARE_COLORS.paperRaised : SHARE_COLORS.matchaPale;
      ctx.fillRect(x + 4, y + 4, cellSize - 8, cellSize - 8);
      ctx.strokeStyle = cell.isFree ? SHARE_COLORS.gold : SHARE_COLORS.ink;
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 4, y + 4, cellSize - 8, cellSize - 8);

      ctx.font = `${Math.floor(cellSize * 0.45)}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = SHARE_COLORS.ink;

      if (cell.isFree) {
        ctx.font = `${Math.floor(cellSize * 0.2)}px ${SHARE_FONT_DISPLAY}`;
        ctx.fillStyle = "#6b5220";
        ctx.fillText("FREE", x + cellSize / 2, y + cellSize / 2);
      } else if (cell.opened) {
        await drawItemIconOnCanvas(ctx, cell.item, x + cellSize * 0.15, y + cellSize * 0.1, cellSize * 0.7);
      } else {
        await drawLockedIconOnCanvas(ctx, cell.item, x + cellSize * 0.15, y + cellSize * 0.1, cellSize * 0.7);
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

/** 「ビンゴカードを保存」ボタン(コレクション画面)から呼ばれる処理。 */
async function saveBingoCardImage(state) {
  const canvas = await generateBingoShareCanvas(state);
  downloadCanvasAsPng(canvas, "chisato-quiz-gacha_bingo-card.png");
}
