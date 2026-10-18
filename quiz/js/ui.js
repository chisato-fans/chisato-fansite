// ============================================================
// ui.js
// 画面遷移・DOM描画・演出制御をまとめたモジュール。
// ゲームの状態(gameState)はこのファイルの中だけで保持し、
// 更新するたびに storage.js 経由でlocalStorageへ保存する。
// ============================================================

let gameState = null;
let quizSession = null;

// ---------- 画面切り替え ----------

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((el) => {
    el.classList.toggle("active", el.id === screenId);
  });
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

// ---------- オーバーレイ(モーダル演出)----------

function showOverlay(innerHtml) {
  const layer = document.getElementById("overlay-layer");
  const content = document.getElementById("overlay-content");
  content.innerHTML = innerHtml;
  layer.hidden = false;
}

function closeOverlay() {
  const layer = document.getElementById("overlay-layer");
  layer.hidden = true;
  document.getElementById("overlay-content").innerHTML = "";
}

/**
 * オーバーレイ演出を1つずつ順番に表示する。
 * overlays: [{ className, html, buttonId }, ...]
 * 各オーバーレイのHTML内にある id=buttonId のボタンを押すと次へ進む。
 */
function playOverlaySequence(overlays, onAllDone) {
  if (!overlays || overlays.length === 0) {
    if (onAllDone) onAllDone();
    return;
  }
  const [current, ...rest] = overlays;
  showOverlay(`<div class="overlay-card ${current.className || ""}">${current.html}</div>`);
  const btn = document.getElementById(current.buttonId);
  if (btn) {
    btn.addEventListener(
      "click",
      () => {
        closeOverlay();
        playOverlaySequence(rest, onAllDone);
      },
      { once: true }
    );
  }
}

function buildQuizCompleteOverlay() {
  return {
    className: "overlay-quiz-complete",
    buttonId: "overlay-quiz-complete-close",
    html: `
      <p class="stamp-badge stamp-matcha">満点</p>
      <h3 class="overlay-title">QUIZ COMPLETE</h3>
      <p class="overlay-text">クイズ全100問、コンプリートおめでとう!</p>
      <button id="overlay-quiz-complete-close" class="btn btn-primary">閉じる</button>
    `,
  };
}

function buildBingoOverlay(lineCount) {
  return {
    className: "overlay-bingo",
    buttonId: "overlay-bingo-close",
    html: `
      <p class="stamp-badge stamp-gold">BINGO</p>
      <h3 class="overlay-title">BINGO</h3>
      <p class="overlay-text">${lineCount > 1 ? `${lineCount}ライン同時に` : ""}ビンゴが揃いました!</p>
      <button id="overlay-bingo-close" class="btn btn-primary">閉じる</button>
    `,
  };
}

function buildCollectionCompleteOverlay() {
  return {
    className: "overlay-collection-complete",
    buttonId: "overlay-collection-complete-close",
    html: `
      <p class="stamp-badge stamp-gold">全種</p>
      <h3 class="overlay-title">COLLECTION COMPLETE</h3>
      <p class="overlay-text">アイテム24種類、すべて集め終わりました!</p>
      <button id="overlay-collection-complete-close" class="btn btn-primary">閉じる</button>
    `,
  };
}

function buildAllCompleteOverlay() {
  return {
    className: "overlay-all-complete",
    buttonId: "overlay-all-complete-close",
    html: `
      <p class="stamp-badge stamp-stamp">全制覇</p>
      <h3 class="overlay-title">ALL COMPLETE</h3>
      <p class="overlay-text">
        QUIZ 100 / 100<br>
        ITEMS 24 / 24
      </p>
      <p class="overlay-text overlay-text-sub">「最初から遊ぶ」を選ぶと、新しい周回に挑戦できます。</p>
      <button id="overlay-all-complete-close" class="btn btn-primary">閉じる</button>
    `,
  };
}

function showConfirmDialog({ title, message, confirmLabel, cancelLabel, onConfirm }) {
  showOverlay(`
    <div class="overlay-card overlay-confirm">
      <h3 class="overlay-title">${title}</h3>
      <p class="overlay-text">${message}</p>
      <div class="overlay-confirm-actions">
        <button id="overlay-confirm-cancel" class="btn btn-outline">${cancelLabel}</button>
        <button id="overlay-confirm-ok" class="btn btn-danger">${confirmLabel}</button>
      </div>
    </div>
  `);
  document.getElementById("overlay-confirm-cancel").addEventListener("click", closeOverlay, { once: true });
  document.getElementById("overlay-confirm-ok").addEventListener(
    "click",
    () => {
      closeOverlay();
      onConfirm();
    },
    { once: true }
  );
}

// ---------- TOP画面 ----------

function renderTopScreen() {
  const hasPlayed = hasExistingProgress(gameState);
  document.getElementById("btn-continue").hidden = !hasPlayed;
  document.getElementById("top-progress").hidden = !hasPlayed;
  document.getElementById("top-subtitle").textContent = "小林千悟くんに関するクイズに挑戦して、アイテムを集めよう!";

  if (hasPlayed) {
    const quizProgress = getQuizProgress(gameState);
    const itemProgress = getItemProgress(gameState);

    document.getElementById("top-quiz-value").textContent = `${quizProgress.totalCleared} / ${quizProgress.totalQuizCount}`;
    document.getElementById("top-quiz-bar").style.width = `${quizProgress.percent}%`;
    document.getElementById("top-quiz-percent").textContent = `${quizProgress.percent}% COMPLETE`;
    document.getElementById("top-item-value").textContent = `${itemProgress.totalAcquired} / ${itemProgress.totalItemCount}`;
  }

  showScreen("screen-top");
}

function handleStartNewClicked() {
  const hasPlayed = hasExistingProgress(gameState);
  if (!hasPlayed) {
    beginQuizFlow();
    return;
  }
  showConfirmDialog({
    title: "最初から遊びますか?",
    message: "現在のコレクションとクイズ進行状況をすべてリセットして、最初から遊びますか?",
    confirmLabel: "リセットして遊ぶ",
    cancelLabel: "キャンセル",
    onConfirm: () => {
      gameState = resetState();
      beginQuizFlow();
    },
  });
}

function handleContinueClicked() {
  beginQuizFlow();
}

// ---------- QUIZ画面 ----------

function beginQuizFlow() {
  quizSession = createQuizSession();
  showScreen("screen-quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const question = getCurrentQuestion(quizSession);
  const total = quizSession.questions.length;

  document.getElementById("quiz-index").textContent = String(quizSession.currentIndex + 1);
  document.getElementById("quiz-total").textContent = String(total);
  document.getElementById("quiz-progress-bar-fill").style.width = `${(quizSession.currentIndex / total) * 100}%`;
  document.getElementById("quiz-question-text").textContent = question.question;

  document.getElementById("quiz-feedback").hidden = true;
  document.getElementById("quiz-question-card").classList.remove("shake-wrong");

  const choicesEl = document.getElementById("quiz-choices");
  choicesEl.innerHTML = "";
  question.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-choice-btn";
    btn.dataset.key = choice.key;
    btn.innerHTML = `<span class="quiz-choice-key">${choice.key}</span><span class="quiz-choice-text">${choice.text}</span>`;
    btn.addEventListener("click", () => handleChoiceSelected(choice.key));
    choicesEl.appendChild(btn);
  });
}

function handleChoiceSelected(choiceKey) {
  const choicesEl = document.getElementById("quiz-choices");
  const buttons = Array.from(choicesEl.querySelectorAll(".quiz-choice-btn"));
  buttons.forEach((b) => (b.disabled = true));

  const { correct, question } = answerCurrentQuestion(quizSession, choiceKey);
  playSound(correct ? "correct" : "incorrect");

  buttons.forEach((b) => {
    const c = question.choices.find((c) => c.key === b.dataset.key);
    if (c.correct) b.classList.add("choice-correct");
    else if (b.dataset.key === choiceKey) b.classList.add("choice-incorrect");
  });

  if (!correct) {
    document.getElementById("quiz-question-card").classList.add("shake-wrong");
  }

  const feedback = document.getElementById("quiz-feedback");
  document.getElementById("quiz-feedback-text").textContent = correct ? "◯ 正解!" : "✕ 不正解…";
  document.getElementById("quiz-feedback-text").className = `quiz-feedback-text ${correct ? "is-correct" : "is-incorrect"}`;
  document.getElementById("quiz-feedback-explanation").textContent = question.explanation || "";
  feedback.hidden = false;

  document.getElementById("btn-quiz-next").onclick = () => {
    advanceQuestion(quizSession);
    if (isQuizFinished(quizSession)) {
      finishQuiz();
    } else {
      renderQuizQuestion();
    }
  };
}

function handleQuizQuitClicked() {
  showConfirmDialog({
    title: "クイズをやめますか?",
    message: "ここまでの解答は今回のプレイとしては記録されません。トップ画面に戻りますか?",
    confirmLabel: "やめる",
    cancelLabel: "続ける",
    onConfirm: () => {
      quizSession = null;
      renderTopScreen();
    },
  });
}

// ---------- RESULT画面 ----------

let pendingPostResultOverlays = [];

function finishQuiz() {
  const result = commitQuizSessionResult(gameState, quizSession);
  renderResultScreen(result);

  pendingPostResultOverlays = [];
  if (result.quizCompleteNewly) {
    pendingPostResultOverlays.push(buildQuizCompleteOverlay());
  }

  showScreen("screen-result");
  if (pendingPostResultOverlays.length > 0) {
    playOverlaySequence(pendingPostResultOverlays, () => {});
  }
}

function renderResultScreen(result) {
  document.getElementById("result-correct").textContent = String(result.correctCount);
  document.getElementById("result-total").textContent = String(result.totalQuestions);
  document.getElementById("result-accuracy").textContent = String(result.accuracyPercent);

  document.getElementById("result-newly-cleared-num").textContent = String(result.newlyClearedCount);
  document.getElementById("result-before-total").textContent = String(result.beforeClearedCount);
  document.getElementById("result-after-total").textContent = String(result.totalCleared);
  document.getElementById("result-quiz-count").textContent = String(result.totalQuizCount);
  document.getElementById("result-progress-bar").style.width = `${result.completePercent}%`;
  document.getElementById("result-percent").textContent = `${result.completePercent}% COMPLETE`;

  document.getElementById("result-message").textContent = result.quizCompleteNewly
    ? "QUIZ COMPLETE! 全100問正解達成おめでとう!"
    : "全100問コンプリートを目指そう!";
}

// ---------- GACHA画面 ----------

function resetGachaScreen() {
  document.getElementById("gacha-stage").hidden = false;
  document.getElementById("gacha-result").hidden = true;
  document.getElementById("gacha-machine").className = "gacha-machine";
  document.getElementById("gacha-capsule").hidden = true;
  document.getElementById("gacha-capsule").className = "gacha-capsule";
  document.getElementById("gacha-sparkles").className = "gacha-sparkles";
  document.getElementById("gacha-sparkles").innerHTML = "";
  document.getElementById("gacha-caption").textContent = "25問おつかれさま!ガチャに挑戦しよう";
  document.getElementById("btn-gacha-start").hidden = false;
  document.getElementById("btn-gacha-start").disabled = false;
}

function handleGotoGachaClicked() {
  resetGachaScreen();
  showScreen("screen-gacha");
}

function handleGachaStartClicked() {
  const startBtn = document.getElementById("btn-gacha-start");
  startBtn.disabled = true;
  playGachaAnimation(() => {
    revealGachaResult();
  });
}

function playGachaAnimation(onComplete) {
  const caption = document.getElementById("gacha-caption");
  const machine = document.getElementById("gacha-machine");
  const capsule = document.getElementById("gacha-capsule");
  const sparkles = document.getElementById("gacha-sparkles");

  caption.textContent = "GACHA START!";
  machine.classList.add("is-shaking");

  setTimeout(() => {
    machine.classList.remove("is-shaking");
    capsule.hidden = false;
    capsule.classList.add("is-emerging");
    caption.textContent = "カプセルが出てきた…!";

    setTimeout(() => {
      capsule.classList.add("is-centered");

      setTimeout(() => {
        capsule.classList.add("is-opening");
        caption.textContent = "カプセルが開く…!";

        setTimeout(() => {
          sparkles.classList.add("is-sparkling");
          for (let i = 0; i < 10; i++) {
            const s = document.createElement("span");
            s.className = "gacha-sparkle";
            s.style.setProperty("--angle", `${(360 / 10) * i}deg`);
            sparkles.appendChild(s);
          }
          caption.textContent = "✨✨✨";

          setTimeout(onComplete, 800);
        }, 700);
      }, 850);
    }, 850);
  }, 1100);
}

function revealGachaResult() {
  const draw = drawGacha(gameState);
  document.getElementById("gacha-stage").hidden = true;
  const resultEl = document.getElementById("gacha-result");
  resultEl.hidden = false;

  const iconEl = document.getElementById("gacha-result-icon");

  if (draw.result === "allComplete") {
    document.getElementById("gacha-result-banner").textContent = "ALL ITEMS COMPLETE";
    iconEl.textContent = "全制覇";
    iconEl.classList.add("is-text");
    iconEl.style.backgroundImage = "";
    document.getElementById("gacha-result-name").textContent = "アイテムは24種類すべて集め終わっています!";
    document.getElementById("gacha-result-memo").textContent = "「最初から遊ぶ」で新しい周回にも挑戦できます。";
    document.getElementById("gacha-result-actions").hidden = true;
    return;
  }

  document.getElementById("gacha-result-actions").hidden = false;
  const item = draw.item;
  const gachaOutcome = commitGachaResult(gameState, item);

  document.getElementById("gacha-result-banner").textContent = "NEW ITEM";
  iconEl.classList.remove("is-text");
  iconEl.textContent = item.image ? "" : item.emoji;
  if (item.image) {
    iconEl.style.backgroundImage = `url(${item.image})`;
  } else {
    iconEl.style.backgroundImage = "";
  }
  document.getElementById("gacha-result-name").textContent = item.name;
  document.getElementById("gacha-result-memo").textContent = item.memo || "";

  document.getElementById("btn-share-save").onclick = () => saveItemImage(item);
  document.getElementById("btn-share-x").onclick = () => shareItemToSns(item);

  // 仕様確認事項4: アイテム獲得直後にビンゴ判定 → 演出はガチャ画面上でこの場に表示する
  const newBingoLines = getNewlyAchievedBingoLines(gameState);
  const allCompleteNewly = checkAllComplete(gameState);

  const overlays = [];
  if (newBingoLines.length > 0) {
    overlays.push(buildBingoOverlay(newBingoLines.length));
  }
  if (gachaOutcome.collectionCompleteNewly) {
    overlays.push(buildCollectionCompleteOverlay());
  }
  if (allCompleteNewly) {
    overlays.push(buildAllCompleteOverlay());
  }
  if (overlays.length > 0) {
    playOverlaySequence(overlays, () => {});
  }
}

// ---------- COLLECTION画面 ----------

function renderCollectionScreen() {
  const quizProgress = getQuizProgress(gameState);
  const itemProgress = getItemProgress(gameState);

  document.getElementById("col-quiz-cleared").textContent = String(quizProgress.totalCleared);
  document.getElementById("col-quiz-total").textContent = String(quizProgress.totalQuizCount);
  document.getElementById("col-quiz-bar").style.width = `${quizProgress.percent}%`;
  document.getElementById("col-quiz-percent").textContent = `${quizProgress.percent}% COMPLETE`;
  document.getElementById("col-quiz-hint").textContent =
    quizProgress.totalCleared >= quizProgress.totalQuizCount ? "QUIZ COMPLETE! 全問正解達成おめでとう!" : "全100問コンプリートを目指そう!";

  document.getElementById("col-item-count").textContent = String(itemProgress.totalAcquired);
  document.getElementById("col-item-total").textContent = String(itemProgress.totalItemCount);

  renderBingoGrid();
  showScreen("screen-collection");
}

function renderBingoGrid() {
  const grid = document.getElementById("bingo-grid");
  grid.innerHTML = "";
  const cardView = buildBingoCardView(gameState);

  cardView.forEach((cell) => {
    const cellEl = document.createElement("div");
    cellEl.className = "bingo-cell";

    if (cell.isFree) {
      cellEl.classList.add("is-free");
      cellEl.innerHTML = `<span class="bingo-cell-label">FREE</span>`;
    } else if (cell.opened) {
      cellEl.classList.add("is-opened");
      const iconHtml = cell.item.image
        ? `<span class="bingo-cell-icon" style="background-image:url(${cell.item.image})"></span>`
        : `<span class="bingo-cell-icon bingo-cell-emoji">${cell.item.emoji}</span>`;
      cellEl.innerHTML = `${iconHtml}<span class="bingo-cell-label">${cell.item.name}</span>`;
    } else {
      cellEl.classList.add("is-locked");
      cellEl.innerHTML = `<span class="bingo-cell-icon bingo-cell-emoji">🔒</span>`;
    }
    grid.appendChild(cellEl);
  });
}

// ---------- 初期化・イベント登録 ----------

function initApp() {
  gameState = loadState();
  document.getElementById("app-footer-text").textContent = SITE_CONFIG.footerCopyright;
  document.getElementById("col-quiz-total").textContent = String(QUIZ_DATA.length);
  document.getElementById("col-item-total").textContent = String(ITEM_DATA.length);

  renderTopScreen();

  document.getElementById("btn-start-new").addEventListener("click", handleStartNewClicked);
  document.getElementById("btn-continue").addEventListener("click", handleContinueClicked);
  document.getElementById("btn-goto-collection").addEventListener("click", renderCollectionScreen);

  document.getElementById("btn-quiz-quit").addEventListener("click", handleQuizQuitClicked);

  document.getElementById("btn-goto-gacha").addEventListener("click", handleGotoGachaClicked);
  document.getElementById("btn-gacha-start").addEventListener("click", handleGachaStartClicked);
  document.getElementById("btn-goto-collection-from-gacha").addEventListener("click", renderCollectionScreen);
  document.getElementById("btn-play-again").addEventListener("click", beginQuizFlow);

  document.getElementById("btn-save-bingo").addEventListener("click", () => saveBingoCardImage(gameState));
  document.getElementById("btn-back-to-top").addEventListener("click", renderTopScreen);
}
