// ============================================================
// sound.js
// 効果音の再生を管理するモジュール。
// ============================================================

// 効果音を追加・差し替えたい場合はここだけ編集すればOK。
const SOUND_FILES = {
  decide: "assets/sounds/decide.mp3", // あらゆるボタンを押したときの効果音
  correct: "assets/sounds/correct.mp3", // クイズで正解を選んだときの効果音
  incorrect: "assets/sounds/incorrect.mp3", // クイズで不正解を選んだときの効果音
};

const soundElementCache = {};

function getBaseSoundElement(name) {
  if (!soundElementCache[name]) {
    const audio = new Audio(SOUND_FILES[name]);
    audio.preload = "auto";
    soundElementCache[name] = audio;
  }
  return soundElementCache[name];
}

/**
 * 効果音を再生する。
 * 短時間に連続で鳴らしても途切れないよう、再生のたびに複製した
 * Audio要素を使う(同じ要素を使い回すと前の再生が途中で切れる)。
 */
function playSound(name) {
  const base = SOUND_FILES[name] ? getBaseSoundElement(name) : null;
  if (!base) return;
  try {
    const instance = base.cloneNode(true);
    instance.volume = 0.7;
    instance.play().catch(() => {
      // 自動再生ブロック等で再生できなくてもゲーム進行には影響させない
    });
  } catch (e) {
    // Audio未対応環境でも無視する
  }
}

/**
 * サイト内の .btn / .btn-quit ボタンがクリックされたら
 * 共通の決定音を鳴らす(クイズの選択肢ボタンは対象外。
 * そちらは正解/不正解の専用効果音を別途鳴らす)。
 */
function initButtonSounds() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn, .btn-quit");
    if (btn) {
      playSound("decide");
    }
  });
}
