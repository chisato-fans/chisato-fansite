// ============================================================
// gacha-engine.js
// アイテム抽選ロジック(重複なし)。
// ============================================================

/**
 * ガチャを1回引く。
 * 戻り値:
 *   { result: "item", item }              … アイテムを1つ獲得
 *   { result: "allComplete" }              … すでに24種類すべて獲得済みで抽選対象が無い
 */
function drawGacha(state) {
  const unacquired = ITEM_DATA.filter((item) => !state.acquiredItemIds[item.id]);
  if (unacquired.length === 0) {
    return { result: "allComplete" };
  }
  const index = Math.floor(Math.random() * unacquired.length);
  return { result: "item", item: unacquired[index] };
}

/**
 * 獲得したアイテムをlocalStorageへ確定反映する。
 * コレクションコンプリート(24/24)を新たに達成したかどうかも返す。
 */
function commitGachaResult(state, item) {
  const totalItemCount = ITEM_DATA.length;
  const wasAcquired = !!state.acquiredItemIds[item.id];

  if (!wasAcquired) {
    state.acquiredItemIds[item.id] = true;
  }

  const totalAcquired = Object.keys(state.acquiredItemIds).length;
  const collectionCompleteNewly = totalAcquired === totalItemCount && !state.flags.collectionCompleted;
  if (collectionCompleteNewly) {
    state.flags.collectionCompleted = true;
  }

  saveState(state);

  return {
    totalAcquired,
    totalItemCount,
    collectionCompleteNewly,
  };
}

/** コレクション画面などで表示するアイテム進捗を計算する。 */
function getItemProgress(state) {
  const totalItemCount = ITEM_DATA.length;
  const totalAcquired = Object.keys(state.acquiredItemIds).length;
  return { totalAcquired, totalItemCount };
}

/**
 * ゲーム全体(クイズ100/100 + アイテム24/24)のフルコンプリートを判定し、
 * 新たに達成した場合は state.flags.allCompleted を更新する。
 * 戻り値: 今回新たにフルコンプリートを達成したかどうか。
 */
function checkAllComplete(state) {
  const alreadyAll = state.flags.allCompleted;
  const isAllNow = state.flags.quizCompleted && state.flags.collectionCompleted;
  if (isAllNow && !alreadyAll) {
    state.flags.allCompleted = true;
    saveState(state);
    return true;
  }
  return false;
}
