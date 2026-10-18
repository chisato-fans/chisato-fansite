// ============================================================
// share.js
// Canvas APIによる画像生成、画像保存、SNS(X)シェアを担当するモジュール。
// 外部ライブラリを使わず、ブラウザ標準機能のみで実現する。
// ============================================================

// Canvasはブラウザのcss変数を参照できないため、css/base.cssのテーマカラーと
// 合わせた値をここで直接定義する。テーマカラーを変更する場合はここも更新する。
const SHARE_COLORS = {
  bgTop: "#f4fbe3",
  bgBottom: "#fff8df",
  primary: "#8bc53f",
  primaryDark: "#689f2c",
  primaryTint: "#e9f7cf",
  accent: "#ffc633",
  accentText: "#5a4300",
  textMain: "#333333",
  textSub: "#666666",
  white: "#ffffff",
  lockedBg: "#c9cdb8",
};

function loadImageAsync(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** 中央揃えで複数行に折り返してテキストを描画する。 */
function drawWrappedText(ctx, text, centerX, startY, maxWidth, lineHeight) {
  if (!text) return startY;
  const chars = Array.from(text);
  let line = "";
  let y = startY;
  chars.forEach((ch) => {
    const testLine = line + ch;
    if (ctx.measureText(testLine).width > maxWidth && line !== "") {
      ctx.fillText(line, centerX, y);
      line = ch;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });
  if (line) {
    ctx.fillText(line, centerX, y);
    y += lineHeight;
  }
  return y;
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
  ctx.fillStyle = SHARE_COLORS.textMain;
  ctx.fillText(item.emoji || "🎁", x + size / 2, y + size / 2 + size * 0.05);
}

/** ガチャ結果のSNSシェア用画像(1080x1080)を生成する。 */
async function generateItemShareCanvas(item) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, SHARE_COLORS.bgTop);
  grad.addColorStop(1, SHARE_COLORS.bgBottom);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = SHARE_COLORS.primary;
  ctx.lineWidth = 14;
  ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);

  ctx.textAlign = "center";
  ctx.fillStyle = SHARE_COLORS.primaryDark;
  ctx.font = "bold 46px sans-serif";
  ctx.fillText(SITE_CONFIG.siteName, canvas.width / 2, 130);

  ctx.fillStyle = SHARE_COLORS.accent;
  ctx.fillRect(canvas.width / 2 - 230, 175, 460, 84);
  ctx.fillStyle = SHARE_COLORS.accentText;
  ctx.font = "bold 40px sans-serif";
  ctx.fillText("★ NEW ITEM! ★", canvas.width / 2, 230);

  ctx.fillStyle = SHARE_COLORS.white;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, 480, 210, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = SHARE_COLORS.primaryTint;
  ctx.lineWidth = 8;
  ctx.stroke();

  await drawItemIconOnCanvas(ctx, item, canvas.width / 2 - 140, 480 - 140, 280);

  ctx.fillStyle = SHARE_COLORS.textMain;
  ctx.font = "bold 52px sans-serif";
  ctx.fillText(item.name, canvas.width / 2, 770);

  ctx.fillStyle = SHARE_COLORS.textSub;
  ctx.font = "28px sans-serif";
  drawWrappedText(ctx, item.memo || "", canvas.width / 2, 830, 820, 38);

  ctx.fillStyle = SHARE_COLORS.primaryDark;
  ctx.font = "bold 26px sans-serif";
  ctx.fillText(SITE_CONFIG.siteUrl || SITE_CONFIG.siteName, canvas.width / 2, 1010);

  return canvas;
}

/** ビンゴカード保存用の画像(1080x1400)を生成する。 */
async function generateBingoShareCanvas(state) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1400;
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, SHARE_COLORS.bgTop);
  grad.addColorStop(1, SHARE_COLORS.bgBottom);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = SHARE_COLORS.primary;
  ctx.lineWidth = 14;
  ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);

  ctx.textAlign = "center";
  ctx.fillStyle = SHARE_COLORS.primaryDark;
  ctx.font = "bold 46px sans-serif";
  ctx.fillText(SITE_CONFIG.siteName, canvas.width / 2, 110);

  ctx.fillStyle = SHARE_COLORS.textSub;
  ctx.font = "28px sans-serif";
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

      ctx.fillStyle = cell.isFree ? "#ffe08a" : cell.opened ? SHARE_COLORS.white : SHARE_COLORS.primaryTint;
      ctx.fillRect(x + 4, y + 4, cellSize - 8, cellSize - 8);
      ctx.strokeStyle = SHARE_COLORS.primary;
      ctx.lineWidth = 3;
      ctx.strokeRect(x + 4, y + 4, cellSize - 8, cellSize - 8);

      ctx.font = `${Math.floor(cellSize * 0.45)}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = SHARE_COLORS.textMain;

      if (cell.isFree) {
        ctx.font = `bold ${Math.floor(cellSize * 0.22)}px sans-serif`;
        ctx.fillText("FREE", x + cellSize / 2, y + cellSize / 2);
      } else if (cell.opened) {
        await drawItemIconOnCanvas(ctx, cell.item, x + cellSize * 0.15, y + cellSize * 0.1, cellSize * 0.7);
      } else {
        ctx.fillStyle = SHARE_COLORS.lockedBg;
        ctx.fillText("🔒", x + cellSize / 2, y + cellSize / 2);
      }
    }
  }

  const { totalAcquired, totalItemCount } = getItemProgress(state);
  const { totalCleared, totalQuizCount, percent } = getQuizProgress(state);

  ctx.textAlign = "center";
  ctx.fillStyle = SHARE_COLORS.textMain;
  ctx.font = "bold 40px sans-serif";
  ctx.fillText(`🎁 ITEMS  ${totalAcquired} / ${totalItemCount}`, canvas.width / 2, gridTop + gridPixel + 70);
  ctx.font = "30px sans-serif";
  ctx.fillStyle = SHARE_COLORS.textSub;
  ctx.fillText(`📝 QUIZ  ${totalCleared} / ${totalQuizCount}(${percent}% COMPLETE)`, canvas.width / 2, gridTop + gridPixel + 120);

  ctx.fillStyle = SHARE_COLORS.primaryDark;
  ctx.font = "bold 26px sans-serif";
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
function buildItemShareText(item) {
  const tags = SITE_CONFIG.shareHashtags.map((t) => `#${t}`).join(" ");
  return `「${SITE_CONFIG.siteName}」で「${item.name}」をゲット!🎉\n${tags}`;
}

/** Xの投稿画面(intent)をテキスト・URL付きで開く。画像は自動添付できない仕様のため含まれない。 */
function openXShareIntent(text, url) {
  const params = new URLSearchParams({ text });
  if (url) params.set("url", url);
  const intentUrl = `https://twitter.com/intent/tweet?${params.toString()}`;
  window.open(intentUrl, "_blank", "noopener,noreferrer");
}

/**
 * 「Xでシェア」ボタンから呼ばれる処理。
 * 1. ファイル共有に対応した環境(主にスマートフォン)では navigator.share() で
 *    画像・テキストをまとめて共有し、ユーザーがXアプリ等を選べるようにする。
 * 2. 非対応環境では、画像をダウンロードしつつXの投稿画面を開く
 *    (「画像を保存してSNSに投稿」の導線。画像はユーザーが手動で添付する)。
 */
async function shareItemToSns(item) {
  const canvas = await generateItemShareCanvas(item);
  const filename = `chisato-quiz-gacha_${item.id}.png`;
  const text = buildItemShareText(item);
  const url = SITE_CONFIG.siteUrl || undefined;

  const blob = await canvasToBlobAsync(canvas);
  if (!blob) return;

  if (navigator.canShare) {
    const file = new File([blob], filename, { type: "image/png" });
    if (navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], text, url });
        return;
      } catch (e) {
        if (e && e.name === "AbortError") return; // ユーザーがキャンセルした
        // それ以外のエラーはフォールバックへ
      }
    }
  }

  downloadCanvasAsPng(canvas, filename);
  openXShareIntent(text, url);
}

/** 「画像を保存」ボタン(ガチャ結果画面)から呼ばれる処理。 */
async function saveItemImage(item) {
  const canvas = await generateItemShareCanvas(item);
  downloadCanvasAsPng(canvas, `chisato-quiz-gacha_${item.id}.png`);
}

/** 「ビンゴカードを保存」ボタン(コレクション画面)から呼ばれる処理。 */
async function saveBingoCardImage(state) {
  const canvas = await generateBingoShareCanvas(state);
  downloadCanvasAsPng(canvas, "chisato-quiz-gacha_bingo-card.png");
}
