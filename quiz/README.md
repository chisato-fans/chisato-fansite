# CHISATO QUIZ GACHA

小林千悟(CHISATO)ファン向けの、クイズ&ガチャ&ビンゴコレクションゲームサイトです。
会員登録・ログイン・サーバーは不要で、ブラウザの`localStorage`だけで遊べます。

## 遊び方の流れ

トップページ → クイズ(25問) → 結果発表 → ガチャ演出 → アイテム獲得 →
コレクション/ビンゴ更新 → SNSシェア → 再びクイズ

## ファイル構成

```
index.html              画面のHTML(全画面共通の1ファイル)
css/
  base.css              リセット・カラー変数
  components.css        ボタン・カード・オーバーレイなどの部品
  layout.css             画面ごとのレイアウト
  animations.css          ガチャ・ビンゴ・コンプリート等の演出アニメーション
js/
  data/
    site-config.js       サイト名・URL等の設定
    quiz-data.js          クイズ100問のデータ ★編集頻度が高いファイル
    item-data.js          アイテム24種類のデータ ★編集頻度が高いファイル
  storage.js              localStorageの読み書き
  quiz-engine.js           クイズの出題・採点・コンプリート判定
  gacha-engine.js           ガチャの抽選ロジック
  bingo-engine.js            ビンゴ判定ロジック
  share.js                    画像生成・SNSシェア
  ui.js                        画面表示・演出の制御
  main.js                       起動処理
assets/
  items/                 アイテム画像を置く場所(差し替え用)
  ui/                     その他装飾画像を置く場所
```

ビルド不要です。`index.html`をブラウザで開くだけで動作します
(GitHub PagesなどにフォルダごとアップロードすればWebサイトとして公開できます)。

## クイズ問題を追加・編集する

`js/data/quiz-data.js` を開いて、配列の中に以下の形式で1問ずつ記述します。

```js
{
  id: "q101",                       // 他の問題と重複しないID
  difficulty: "beginner",           // "beginner" / "intermediate" / "advanced"
  question: "問題文をここに書く",
  correctAnswer: "正解の選択肢",
  wrongAnswers: ["誤答1", "誤答2", "誤答3"],
  explanation: "解説文(任意。不要なら空文字のままでOK)",
}
```

- 選択肢(A〜D)の表示順は毎回ランダムでシャッフルされるため、
  `correctAnswer` / `wrongAnswers` の書く順番は気にしなくて大丈夫です。
- 現在の内容はすべて仮のダミーデータです。スプレッドシートで作成した
  「問題文・正解・誤答×3・難易度」の表ができたら、この形式に変換して
  差し替えてください。
- 1回のプレイで出題する数(初級7問/中級13問/上級5問)を変更したい場合は
  `js/quiz-engine.js` 内の `QUIZ_COMPOSITION` を編集してください。

## アイテムを追加・編集する

`js/data/item-data.js` を開いて、24件それぞれの `name`(名前)・`memo`(一言メモ)
を編集します。画像を用意できたら、以下の手順で差し替えられます。

1. `assets/items/` フォルダに画像ファイル(例: `item01.png`)を追加する
2. 該当アイテムの `image` に `"assets/items/item01.png"` のように指定する

`image` が空文字のままの場合は、代わりに `emoji` の絵文字が仮アイコンとして
表示されます。

※ アイテムの並び順は、ビンゴカードのマス配置(左上から順番)に対応しています。
　 並び順を変えるとビンゴのマス配置も変わるのでご注意ください。

## サイト名・URLを変更する

`js/data/site-config.js` の `siteName` / `siteUrl` を編集してください。
SNSシェア時の文言や、保存画像内の表記に反映されます。

## 進行データの保存について

- 進行状況(クイズの正解済み問題・獲得アイテム・ビンゴ達成状況など)は、
  ブラウザの`localStorage`に `chisatoQuizGame_v1` というキーで保存されます。
- 「最初から遊ぶ」を選んで確認ダイアログで承認すると、このデータは初期化されます。
- 25問の途中でブラウザを閉じた場合、その回の解答内容は保存されません
  (次回は新しく25問抽選されます)。
