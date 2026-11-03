// ============================================================
// アイテムデータ (全24種類)
// ============================================================
//
// ガチャで獲得できる24種類のアイテムを定義します。
// ビンゴカードの中央(FREEマス)を除く24マスに、この配列の順番どおりに
// 割り当てられます(並び順を変えるとビンゴのマス配置も変わります)。
//
// 【各アイテムの項目】
//   id          : アイテムを一意に識別するID(重複不可・変更しないこと推奨)
//   name        : アイテム名(画面に表示されます)
//   image       : 画像ファイルのパス。 assets/items/ にファイルを置いて
//                 パスを指定すると、そちらが優先して表示されます。
//                 空文字 "" のままにすると、下の emoji が代わりに表示されます。
//   emoji       : 画像が未設定のときに使う仮アイコン(絵文字)。
//                 image を設定したら emoji は使われなくなります(削除しなくてOK)。
//   silhouette  : ビンゴカードで「未獲得」のマスに表示するシルエット画像の
//                 パス。 assets/items/silhouettes/ にファイルを置いて
//                 パスを指定すると反映されます。空文字 "" のままだと、
//                 従来どおり🔒(ロック)アイコンが表示されます。
//   provider    : イラストの提供者クレジット(任意)。空文字 "" にすると
//                 何も表示されません。指定した場合のみ、ガチャ獲得演出と
//                 コレクション画面のアイテム拡大表示で小さく表示されます。
//   memo        : ガチャで獲得したときに表示される一言メモ。
//
// 【画像素材を差し替える手順】
//   1. assets/items/ フォルダに画像ファイル(例: item01.png)を追加する
//   2. 該当アイテムの image に "assets/items/item01.png" のように指定する
//   これだけで反映されます。コードの他の部分を変更する必要はありません。
//   シルエット画像も同様に、assets/items/silhouettes/ に置いて
//   silhouette に指定するだけで反映されます。
//
// ============================================================

const ITEM_DATA = [
  { id: "item01", name: "餃子", image: "assets/items/item01.png", emoji: "🥟", silhouette: "assets/items/silhouettes/item01-silhouette.png", provider: "@chistoat", memo: "千悟くんの元気が出る食べ物" },
  { id: "item02", name: "チョコドーナツ", image: "assets/items/item02.png", emoji: "🍩", silhouette: "assets/items/silhouettes/item02-silhouette.png", provider: "", memo: "糖分チャージにもってこいのスイーツ" },
  { id: "item03", name: "デニムジャケット", image: "assets/items/item03.png", emoji: "🧥", silhouette: "assets/items/silhouettes/item03-silhouette.png", provider: "@ten_teko_my_1", memo: "色んな日に着ていたとても似合うジャケット" },
  { id: "item04", name: "茶色いジャケット", image: "assets/items/item04.png", emoji: "🥼", silhouette: "assets/items/silhouettes/item04-silhouette.png", provider: "@ten_teko_my_1", memo: "とても似合う思い出深いジャケット" },
  { id: "item05", name: "ポテト", image: "assets/items/item05.png", emoji: "🍟", silhouette: "assets/items/silhouettes/item05-silhouette.png", provider: "", memo: "千悟くんが大好きなサイドメニュー" },
  { id: "item06", name: "ウミガメの着ぐるみ", image: "assets/items/item06.png", emoji: "🐢", silhouette: "assets/items/silhouettes/item06-silhouette.png", provider: "@ten_teko_my_1", memo: "あったかそうなかわいい着ぐるみ" },
  { id: "item07", name: "紙コップ", image: "assets/items/item07.png", emoji: "🥤", silhouette: "assets/items/silhouettes/item07-silhouette.png", provider: "", memo: "時に殴り飛ばしたり、時にコーヒーが入っていたりする" },
  { id: "item08", name: "習字道具", image: "assets/items/item08.png", emoji: "🖌️", silhouette: "assets/items/silhouettes/item08-silhouette.png", provider: "", memo: "「感謝」の文字をしたためる時に活躍" },
  { id: "item09", name: "小さい網", image: "assets/items/item09.png", emoji: "🥅", silhouette: "assets/items/silhouettes/item09-silhouette.png", provider: "", memo: "お菓子をすくう為に必要なアイテム" },
  { id: "item10", name: "水鉄砲", image: "assets/items/item10.png", emoji: "🔫", silhouette: "assets/items/silhouettes/item10-silhouette.png", provider: "@ten_teko_my_1", memo: "狙いを定めるのが得意なことが判明" },
  { id: "item11", name: "食器洗いセット", image: "assets/items/item11.png", emoji: "🧽", silhouette: "assets/items/silhouettes/item11-silhouette.png", provider: "", memo: "お皿洗い番長には欠かせないアイテム" },
  { id: "item12", name: "チョコペン", image: "assets/items/item12.png", emoji: "🍫", silhouette: "assets/items/silhouettes/item12-silhouette.png", provider: "", memo: "デザートづくりで大活躍" },
  { id: "item13", name: "テニス道具", image: "assets/items/item13.png", emoji: "🎾", silhouette: "assets/items/silhouettes/item13-silhouette.png", provider: "", memo: "まだ本人と一緒にいるところを見たことがない" },
  { id: "item14", name: "チャリ", image: "assets/items/item14.png", emoji: "🚲", silhouette: "assets/items/silhouettes/item14-silhouette.png", provider: "", memo: "いったいどんなチャリに乗っているのかファンは気になっている" },
  { id: "item15", name: "パジャマ", image: "assets/items/item15.png", emoji: "🌙", silhouette: "assets/items/silhouettes/item15-silhouette.png", provider: "", memo: "ストライプのパジャマもお土産に持ち帰った模様" },
  { id: "item16", name: "キャンドルライト", image: "assets/items/item16.png", emoji: "🕯️", silhouette: "assets/items/silhouettes/item16-silhouette.png", provider: "", memo: "お土産に持ち帰ってきたライト" },
  { id: "item17", name: "バミリ", image: "assets/items/item17.png", emoji: "📍", silhouette: "assets/items/silhouettes/item17-silhouette.png", provider: "@chistoat", memo: "大活躍した手作りアイテム" },
  { id: "item18", name: "レースのリボン", image: "assets/items/item18.png", emoji: "🎀", silhouette: "assets/items/silhouettes/item18-silhouette.png", provider: "", memo: "Naturalの衣装を華やかにしてくれたワンポイントアイテム" },
  { id: "item19", name: "シャツ", image: "assets/items/item19.png", emoji: "👕", silhouette: "assets/items/silhouettes/item19-silhouette.png", provider: "", memo: "衣装の定番白シャツ" },
  { id: "item20", name: "フェイスパック", image: "assets/items/item20.png", emoji: "🧖", silhouette: "assets/items/silhouettes/item20-silhouette.png", provider: "", memo: "刺激が少なくプルプルしているものがよい" },
  { id: "item21", name: "キラキラのアイシャドウ", image: "assets/items/item21.png", emoji: "💄", silhouette: "assets/items/silhouettes/item21-silhouette.png", provider: "", memo: "目に迫力が出るアイシャドウ" },
  { id: "item22", name: "カチューシャ", image: "assets/items/item22.png", emoji: "👑", silhouette: "assets/items/silhouettes/item22-silhouette.png", provider: "@chistoat", memo: "そう！の口癖が書かれたカチューシャ" },
  { id: "item23", name: "手書きカード", image: "assets/items/item23.png", emoji: "💌", silhouette: "assets/items/silhouettes/item23-silhouette.png", provider: "@chistoat", memo: "バミリより先に登場していた手作りアイテム" },
  { id: "item24", name: "チェーン", image: "assets/items/item24.png", emoji: "⛓️", silhouette: "assets/items/silhouettes/item24-silhouette.png", provider: "", memo: "腰につけていたり首にかかっていたりする" },
];
