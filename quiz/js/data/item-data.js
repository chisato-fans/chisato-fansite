// ============================================================
// アイテムデータ (全24種類)
// ============================================================
//
// ガチャで獲得できる24種類のアイテムを定義します。
// ビンゴカードの中央(FREEマス)を除く24マスに、この配列の順番どおりに
// 割り当てられます(並び順を変えるとビンゴのマス配置も変わります)。
//
// 【各アイテムの項目】
//   id     : アイテムを一意に識別するID(重複不可・変更しないこと推奨)
//   name   : アイテム名(画面に表示されます)
//   image  : 画像ファイルのパス。 assets/items/ にファイルを置いて
//            パスを指定すると、そちらが優先して表示されます。
//            空文字 "" のままにすると、下の emoji が代わりに表示されます。
//   emoji  : 画像が未設定のときに使う仮アイコン(絵文字)。
//            image を設定したら emoji は使われなくなります(削除しなくてOK)。
//   memo   : ガチャで獲得したときに表示される一言メモ。
//
// 【画像素材を差し替える手順】
//   1. assets/items/ フォルダに画像ファイル(例: item01.png)を追加する
//   2. 該当アイテムの image に "assets/items/item01.png" のように指定する
//   これだけで反映されます。コードの他の部分を変更する必要はありません。
//
// ============================================================

const ITEM_DATA = [
  { id: "item01", name: "餃子",                     image: "", emoji: "🥟", memo: "一言メモ準備中…" },
  { id: "item02", name: "タンクトップ",               image: "", emoji: "🎽", memo: "一言メモ準備中…" },
  { id: "item03", name: "デニムジャケット",            image: "", emoji: "🧥", memo: "一言メモ準備中…" },
  { id: "item04", name: "茶色いジャケット",            image: "", emoji: "🥼", memo: "一言メモ準備中…" },
  { id: "item05", name: "コーヒー",                   image: "", emoji: "☕", memo: "一言メモ準備中…" },
  { id: "item06", name: "グローブ",                   image: "", emoji: "🧤", memo: "一言メモ準備中…" },
  { id: "item07", name: "紙コップ",                   image: "", emoji: "🥤", memo: "一言メモ準備中…" },
  { id: "item08", name: "習字道具",                   image: "", emoji: "🖌️", memo: "一言メモ準備中…" },
  { id: "item09", name: "小さい網",                   image: "", emoji: "🥅", memo: "一言メモ準備中…" },
  { id: "item10", name: "水鉄砲",                     image: "", emoji: "🔫", memo: "一言メモ準備中…" },
  { id: "item11", name: "食器洗いセット",              image: "", emoji: "🧽", memo: "一言メモ準備中…" },
  { id: "item12", name: "チョコペン",                 image: "", emoji: "🍫", memo: "一言メモ準備中…" },
  { id: "item13", name: "テニスボール",                image: "", emoji: "🎾", memo: "一言メモ準備中…" },
  { id: "item14", name: "チャリ",                     image: "", emoji: "🚲", memo: "一言メモ準備中…" },
  { id: "item15", name: "パジャマ くまみみセット",       image: "", emoji: "🧸", memo: "一言メモ準備中…" },
  { id: "item16", name: "キャンドルライト",             image: "", emoji: "🕯️", memo: "一言メモ準備中…" },
  { id: "item17", name: "バミリ",                     image: "", emoji: "📍", memo: "一言メモ準備中…" },
  { id: "item18", name: "レースのリボン",               image: "", emoji: "🎀", memo: "一言メモ準備中…" },
  { id: "item19", name: "シャツ",                     image: "", emoji: "👕", memo: "一言メモ準備中…" },
  { id: "item20", name: "フェイスパック",               image: "", emoji: "🧖", memo: "一言メモ準備中…" },
  { id: "item21", name: "キラキラのアイシャドウ",        image: "", emoji: "💄", memo: "一言メモ準備中…" },
  { id: "item22", name: "カチューシャ",                image: "", emoji: "👑", memo: "一言メモ準備中…" },
  { id: "item23", name: "手書きカード",                image: "", emoji: "💌", memo: "一言メモ準備中…" },
  { id: "item24", name: "チェーン",                   image: "", emoji: "⛓️", memo: "一言メモ準備中…" },
];
