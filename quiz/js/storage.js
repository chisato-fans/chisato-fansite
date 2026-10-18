// ============================================================
// storage.js
// localStorage への保存・読み込みを一箇所にまとめたモジュール。
// 進行データの構造を変えたいときは、このファイルだけを見ればよい状態にする。
// ============================================================

const STORAGE_KEY = "chisatoQuizGame_v1";

/**
 * 初期状態(まだ一度もプレイしていない状態)のデータを返す。
 * 「一度でも正解した問題」「獲得済みアイテム」は、キーが存在する = 達成済み、
 * という形式(オブジェクトのプロパティとして持つ)で管理する。
 */
function getDefaultState() {
  return {
    version: 1,
    hasPlayed: false,
    playCount: 0,
    // 一度でも正解した問題のID: { "q001": true, ... }
    clearedQuizIds: {},
    // 獲得済みアイテムのID: { "item01": true, ... }
    acquiredItemIds: {},
    // すでに演出済みのビンゴライン(例: "row0", "col3", "diag1")
    bingoAchievedLines: [],
    flags: {
      quizCompleted: false, // クイズ100/100を一度でも達成したか
      collectionCompleted: false, // アイテム24/24を一度でも達成したか
      allCompleted: false, // 上記両方を一度でも達成したか
    },
  };
}

/**
 * localStorageから進行データを読み込む。
 * データが無い・壊れている場合は初期状態を返す(例外を投げない)。
 */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    // 将来的にバージョンが変わった場合はここでマイグレーションする
    return normalizeState(parsed);
  } catch (e) {
    console.warn("[storage] 保存データの読み込みに失敗したため初期化します", e);
    return getDefaultState();
  }
}

/**
 * 読み込んだデータの形が崩れていても壊れないよう、
 * 足りないフィールドはデフォルト値で補う。
 */
function normalizeState(parsed) {
  const def = getDefaultState();
  return {
    version: def.version,
    hasPlayed: !!parsed.hasPlayed,
    playCount: Number.isFinite(parsed.playCount) ? parsed.playCount : 0,
    clearedQuizIds: parsed.clearedQuizIds && typeof parsed.clearedQuizIds === "object" ? parsed.clearedQuizIds : {},
    acquiredItemIds: parsed.acquiredItemIds && typeof parsed.acquiredItemIds === "object" ? parsed.acquiredItemIds : {},
    bingoAchievedLines: Array.isArray(parsed.bingoAchievedLines) ? parsed.bingoAchievedLines : [],
    flags: {
      quizCompleted: !!(parsed.flags && parsed.flags.quizCompleted),
      collectionCompleted: !!(parsed.flags && parsed.flags.collectionCompleted),
      allCompleted: !!(parsed.flags && parsed.flags.allCompleted),
    },
  };
}

/** 進行データをlocalStorageに保存する。 */
function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("[storage] 保存に失敗しました", e);
  }
}

/** 「最初から遊ぶ」が確定したときに呼ぶ。進行データを完全に初期化する。 */
function resetState() {
  const fresh = getDefaultState();
  saveState(fresh);
  return fresh;
}

/** すでに一度でもプレイしたことがあるか(トップ画面のボタン出し分けに使用)。 */
function hasExistingProgress(state) {
  return !!state.hasPlayed;
}
