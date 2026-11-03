// ============================================================
// bingo-engine.js
// 5x5ビンゴカードの判定ロジック。
//
// マス配置(固定・全ユーザー共通):
//   マス0〜11  … item-data.js の1〜12番目のアイテム
//   マス12(中央)… FREE(最初から開放)
//   マス13〜24 … item-data.js の13〜24番目のアイテム
// ============================================================

const BINGO_FREE_INDEX = 12;

/** ビンゴカードの25マス分の { index, itemId(FREEマスはnull) } を返す。 */
function getBingoCellDefinitions() {
  const cells = [];
  let itemCursor = 0;
  for (let i = 0; i < 25; i++) {
    if (i === BINGO_FREE_INDEX) {
      cells.push({ index: i, itemId: null });
    } else {
      cells.push({ index: i, itemId: ITEM_DATA[itemCursor].id });
      itemCursor++;
    }
  }
  return cells;
}

// 縦・横・斜め、計12ライン分のマスindex一覧。
const BINGO_LINES = [
  { id: "row0", cells: [0, 1, 2, 3, 4] },
  { id: "row1", cells: [5, 6, 7, 8, 9] },
  { id: "row2", cells: [10, 11, 12, 13, 14] },
  { id: "row3", cells: [15, 16, 17, 18, 19] },
  { id: "row4", cells: [20, 21, 22, 23, 24] },
  { id: "col0", cells: [0, 5, 10, 15, 20] },
  { id: "col1", cells: [1, 6, 11, 16, 21] },
  { id: "col2", cells: [2, 7, 12, 17, 22] },
  { id: "col3", cells: [3, 8, 13, 18, 23] },
  { id: "col4", cells: [4, 9, 14, 19, 24] },
  { id: "diag0", cells: [0, 6, 12, 18, 24] },
  { id: "diag1", cells: [4, 8, 12, 16, 20] },
];

/** 各マスが開放済みかどうかを含むビンゴカードのデータを返す(画面描画用)。 */
function buildBingoCardView(state) {
  return getBingoCellDefinitions().map((cell) => {
    if (cell.itemId === null) {
      return { index: cell.index, isFree: true, opened: true, item: null };
    }
    const item = ITEM_DATA.find((it) => it.id === cell.itemId);
    const opened = !!state.acquiredItemIds[cell.itemId];
    return { index: cell.index, isFree: false, opened, item };
  });
}

/** 現在の獲得状況で「揃っているライン」のID一覧を返す。 */
function getCompletedLines(state) {
  const cells = getBingoCellDefinitions();
  const isOpen = (index) => {
    const def = cells[index];
    if (def.itemId === null) return true; // FREE
    return !!state.acquiredItemIds[def.itemId];
  };
  return BINGO_LINES.filter((line) => line.cells.every(isOpen)).map((line) => line.id);
}

/**
 * アイテム獲得直後などに呼ぶ。
 * 「今回のガチャ結果で新たに揃ったライン」を返し、
 * 演出の二重発火を防ぐため state.bingoAchievedLines を更新・保存する。
 */
function getNewlyAchievedBingoLines(state) {
  const completedNow = getCompletedLines(state);
  const already = new Set(state.bingoAchievedLines);
  const newlyAchieved = completedNow.filter((id) => !already.has(id));

  if (newlyAchieved.length > 0) {
    state.bingoAchievedLines = completedNow;
    saveState(state);
  }

  return newlyAchieved;
}
