// ============================================================
// クイズデータ (全100問)
// ============================================================
//
// このファイルを編集するだけで、クイズ問題の追加・変更ができます。
// HTMLやJavaScriptの他の部分を変更する必要はありません。
//
// 【各問題の項目】
//   id            : 問題を一意に識別するID(重複不可・変更しないこと推奨)
//   difficulty    : 難易度。 "beginner"(初級) / "intermediate"(中級) / "advanced"(上級) のいずれか
//   question      : 問題文
//   correctAnswer : 正解の選択肢テキスト
//   wrongAnswers  : 誤答の選択肢テキスト(必ず3つ、配列で指定)
//   explanation   : 解説文(任意。不要な場合は空文字 "" のままでOK)
//
// 【注意】
//   ・選択肢(A/B/C/D)の並び順は、出題のたびにランダムでシャッフルされます。
//     そのため、このデータ内では correctAnswer / wrongAnswers の順番を
//     気にする必要はありません。
//   ・難易度ごとの問題数は現在、初級35問・中級45問・上級20問を想定しています。
//     問題数を増減する場合は js/quiz-engine.js 内の出題数設定(QUIZ_COMPOSITION)も
//     あわせて確認してください。
//   ・2026.11.03提出分の実データです(q068の誤答重複は修正済み)。
//
// ============================================================

const QUIZ_DATA = [
  {
    id: "q001",
    difficulty: "beginner",
    question: "コンセプト評価「KICK」Costume ver.で、千悟くんが着た海の生き物コスチュームは？",
    correctAnswer: "カメ🐢",
    wrongAnswers: [
      "サメ🦈",
      "ペンギン🐧",
      "タコ🐙"
    ],
    explanation: ""
  },
  {
    id: "q002",
    difficulty: "beginner",
    question: "私を表すキーワードにしていたのは？",
    correctAnswer: "素直",
    wrongAnswers: [
      "妖精",
      "宇宙人",
      "ギャップ"
    ],
    explanation: ""
  },
  {
    id: "q003",
    difficulty: "beginner",
    question: "1分PRの際に言っていた今年の恵方はどこ？",
    correctAnswer: "南南東",
    wrongAnswers: [
      "西南西",
      "東北東",
      "北北西"
    ],
    explanation: ""
  },
  {
    id: "q004",
    difficulty: "beginner",
    question: "グループバトルLOUD1組のショートコンテンツMy Charmより、千悟くんのMy Charmは何？",
    correctAnswer: "情熱",
    wrongAnswers: [
      "可愛い",
      "ニコニコ笑顔",
      "俺...こっちかなぁ(？)"
    ],
    explanation: ""
  },
  {
    id: "q005",
    difficulty: "beginner",
    question: "練習生手書きプロフィールノートにて趣味に書いていたことは？",
    correctAnswer: "サイクリング",
    wrongAnswers: [
      "アイドル",
      "登山、音楽をきくこと",
      "お料理、お絵描き、お筋トレ"
    ],
    explanation: ""
  },
  {
    id: "q006",
    difficulty: "beginner",
    question: "ポジションバトルビハインドにて石田亮太くんの好物を聞かれて答えたものは？",
    correctAnswer: "寿司",
    wrongAnswers: [
      "オムライス",
      "蟹味噌",
      "ポン･デ･リング"
    ],
    explanation: ""
  },
  {
    id: "q007",
    difficulty: "beginner",
    question: "番組放送時点(2026年3月)での小林千悟くんのダンス歴は？",
    correctAnswer: "6年",
    wrongAnswers: [
      "9年",
      "12年",
      "15年"
    ],
    explanation: ""
  },
  {
    id: "q008",
    difficulty: "beginner",
    question: "小林千悟くんがポテトを好きな理由は？",
    correctAnswer: "ポテトが大好きだから",
    wrongAnswers: [
      "しょっぱいものが大好きだから",
      "じゃがいもが大好きだから",
      "ファストフードが大好きだから"
    ],
    explanation: ""
  },
  {
    id: "q009",
    difficulty: "beginner",
    question: "小林千悟くんは「1番甘え上手な練習生は？」という質問に対してどの練習生の名前を答えた？",
    correctAnswer: "シンヘン",
    wrongAnswers: [
      "リッキー",
      "ヒョンスン",
      "アダム"
    ],
    explanation: ""
  },
  {
    id: "q010",
    difficulty: "beginner",
    question: "Scawaii!2026年5月号で千悟くんが回答していた「自分のかっこいいところ」は？",
    correctAnswer: "カラスのモノマネ",
    wrongAnswers: [
      "ダンス",
      "ファッション",
      "努力できるところ"
    ],
    explanation: ""
  },
  {
    id: "q011",
    difficulty: "beginner",
    question: "千悟くんが日プ新世界 公式に例えられていた動物は？",
    correctAnswer: "オコジョ",
    wrongAnswers: [
      "ハムスター",
      "イタチ",
      "イヌ"
    ],
    explanation: ""
  },
  {
    id: "q012",
    difficulty: "beginner",
    question: "練習生お披露目イベント101DAYで、千悟くんがじゃんけんをした後言った言葉は？",
    correctAnswer: "勝った人も負けた人もあいこだった人も、僕に投票したらいいことあるかもよ",
    wrongAnswers: [
      "勝った人も負けた人もあいこだった人も、ぜひ僕に投票してください",
      "負けてしまった人も、僕に投票したらいいことあるかもよ",
      "勝った人も負けた人も、僕に投票するといいことあるかもね"
    ],
    explanation: ""
  },
  {
    id: "q013",
    difficulty: "beginner",
    question: "ホワイトデー画像で千悟くんが持っていたのは？",
    correctAnswer: "花",
    wrongAnswers: [
      "ぬいぐるみ",
      "キャンディ",
      "ハートのバルーン"
    ],
    explanation: ""
  },
  {
    id: "q014",
    difficulty: "beginner",
    question: "PROFILE PHOTO SHOOTINGで千悟くんが持っていたのは？",
    correctAnswer: "大きな楕円形の枠",
    wrongAnswers: [
      "大きな三角の枠",
      "大きな長方形の枠",
      "額縁サイズの長方形の枠"
    ],
    explanation: ""
  },
  {
    id: "q015",
    difficulty: "beginner",
    question: "NGワード&アクションゲームで課されたNG内容はなに？",
    correctAnswer: "「そう！」",
    wrongAnswers: [
      "「素晴らしい」",
      "下唇を噛む",
      "アイソレーション"
    ],
    explanation: ""
  },
  {
    id: "q016",
    difficulty: "beginner",
    question: "グループバトル、ポジション評価、コンセプト評価全てで同じグループだったメンバーは誰？",
    correctAnswer: "石田亮太",
    wrongAnswers: [
      "大林悠成",
      "浅香孝太郎",
      "篠ヶ谷歩夢"
    ],
    explanation: ""
  },
  {
    id: "q017",
    difficulty: "beginner",
    question: "LOUDハイライトにて「CHISATOよろしく！」と言っていたのは？",
    correctAnswer: "Kevin Woo",
    wrongAnswers: [
      "KAITA",
      "仲宗根梨乃",
      "安達祐人"
    ],
    explanation: ""
  },
  {
    id: "q018",
    difficulty: "beginner",
    question: "応援素材での練習着の色は？",
    correctAnswer: "黄緑",
    wrongAnswers: [
      "ピンク",
      "オレンジ",
      "黒"
    ],
    explanation: ""
  },
  {
    id: "q019",
    difficulty: "beginner",
    question: "手書きプロフィールノートのTMIに書いていたことは？",
    correctAnswer: "鎖骨に物が入る",
    wrongAnswers: [
      "これを書くために友達にたくさん聞きました",
      "三頭筋が大きくならない",
      "最近胃もたれがすごい"
    ],
    explanation: ""
  },
  {
    id: "q020",
    difficulty: "beginner",
    question: "応援素材の練習着姿ver.では何に座っていた？",
    correctAnswer: "タイヤ",
    wrongAnswers: [
      "ブランコ",
      "買い物カート",
      "ハシゴ"
    ],
    explanation: ""
  },
  {
    id: "q021",
    difficulty: "beginner",
    question: "私に投票すべき3つの理由の中で2番目に出てきた単語は？",
    correctAnswer: "笑顔",
    wrongAnswers: [
      "ダンス",
      "覚悟",
      "情熱"
    ],
    explanation: ""
  },
  {
    id: "q022",
    difficulty: "beginner",
    question: "千悟くんのコンセプト評価でのチーム名は？",
    correctAnswer: "KICK&BASS",
    wrongAnswers: [
      "KICK&SHOUT",
      "DASH&KICK",
      "BEAT&KICK"
    ],
    explanation: ""
  },
  {
    id: "q023",
    difficulty: "beginner",
    question: "新世界放送終了後、初めてInstagramに投稿された書道で書かれた言葉は何？",
    correctAnswer: "感謝",
    wrongAnswers: [
      "ありがとう",
      "努力",
      "初心"
    ],
    explanation: ""
  },
  {
    id: "q024",
    difficulty: "beginner",
    question: "千悟くんが自分で似ていると答えた動物は何？",
    correctAnswer: "ハムスター",
    wrongAnswers: [
      "犬",
      "オコジョ",
      "猫"
    ],
    explanation: ""
  },
  {
    id: "q025",
    difficulty: "beginner",
    question: "NGワードゲームの罰ゲームとして千悟くんがやった愛嬌は何のポーズ？",
    correctAnswer: "うさぎの耳",
    wrongAnswers: [
      "ほっぺハート",
      "ほっぺつん",
      "猫耳"
    ],
    explanation: ""
  },
  {
    id: "q026",
    difficulty: "beginner",
    question: "Naturalのフリを作る際、3組に分かれて作りましたが、千悟くんが一緒に作ったのは誰？",
    correctAnswer: "石田亮太くん",
    wrongAnswers: [
      "浅香孝太郎くん",
      "チェン・リッキーくん",
      "安部結蘭くん"
    ],
    explanation: ""
  },
  {
    id: "q027",
    difficulty: "beginner",
    question: "おやすみ新世界の登場シーンで、千悟くんと一緒に階段を降りてきたのは誰？",
    correctAnswer: "チェン・リッキーくん",
    wrongAnswers: [
      "石田亮太くん",
      "アダム・ナガイくん",
      "岡田侑磨くん"
    ],
    explanation: ""
  },
  {
    id: "q028",
    difficulty: "beginner",
    question: "千悟くんがポジション評価で目指していたのは何？",
    correctAnswer: "総合優勝",
    wrongAnswers: [
      "チーム優勝",
      "総合1位",
      "チーム総合1位"
    ],
    explanation: ""
  },
  {
    id: "q029",
    difficulty: "beginner",
    question: "千悟くんの好きな色は？",
    correctAnswer: "黄緑",
    wrongAnswers: [
      "白",
      "黄色",
      "青"
    ],
    explanation: ""
  },
  {
    id: "q030",
    difficulty: "beginner",
    question: "ダンス部の他に千悟くんが経験した部活動は？",
    correctAnswer: "ソフトテニス部",
    wrongAnswers: [
      "サッカー部",
      "バスケ部",
      "自転車部"
    ],
    explanation: ""
  },
  {
    id: "q031",
    difficulty: "beginner",
    question: "「小林千悟」画数は何画？",
    correctAnswer: "24画",
    wrongAnswers: [
      "22画",
      "23画",
      "21画"
    ],
    explanation: ""
  },
  {
    id: "q032",
    difficulty: "beginner",
    question: "グループバトルのリノさんのレッスン内で、紙コップの壁をぶち壊す際千悟くんが発した掛け声は？",
    correctAnswer: "おりゃ！",
    wrongAnswers: [
      "はっ！",
      "えいや！",
      "あー！！"
    ],
    explanation: ""
  },
  {
    id: "q033",
    difficulty: "beginner",
    question: "千悟くんの推しカメラ4本のサムネイルのうち手が映っているのはいくつある？",
    correctAnswer: "3つ",
    wrongAnswers: [
      "1つ",
      "2つ",
      "4つ"
    ],
    explanation: ""
  },
  {
    id: "q034",
    difficulty: "beginner",
    question: "千悟くんのグループバトルでのチーム名は？",
    correctAnswer: "BE PLoud",
    wrongAnswers: [
      "BE PROUD",
      "BE REAL",
      "BE Plastic"
    ],
    explanation: ""
  },
  {
    id: "q035",
    difficulty: "beginner",
    question: "千悟くんの誕生日は何月何日？",
    correctAnswer: "2月3日",
    wrongAnswers: [
      "2月1日",
      "2月2日",
      "2月4日"
    ],
    explanation: ""
  },
  {
    id: "q036",
    difficulty: "intermediate",
    question: "獅子舞の4人で撮影していたHaruFilmで千悟くんがしていたポーズはどれ？",
    correctAnswer: "両手でファイティングポーズ",
    wrongAnswers: [
      "両手でハートを作るポーズ",
      "両手でピース",
      "両手を振るポーズ"
    ],
    explanation: ""
  },
  {
    id: "q037",
    difficulty: "intermediate",
    question: "千悟くんがコンセプト評価で実は一番やってみたかった曲は？",
    correctAnswer: "Neko（ねこ）",
    wrongAnswers: [
      "DREAMER",
      "BLACK ANGEL",
      "Fuego"
    ],
    explanation: ""
  },
  {
    id: "q038",
    difficulty: "intermediate",
    question: "MpickardのHidden World＃9. Snack Timeのカードで千悟くんが持っていたスイーツは？",
    correctAnswer: "ドーナツ",
    wrongAnswers: [
      "バームクーヘン",
      "クッキー",
      "マカロン"
    ],
    explanation: ""
  },
  {
    id: "q039",
    difficulty: "intermediate",
    question: "千悟くんのセルカチャレンジで、実際にトレカになったのは何枚目？",
    correctAnswer: "3枚目",
    wrongAnswers: [
      "1枚目",
      "2枚目",
      "4枚目"
    ],
    explanation: ""
  },
  {
    id: "q040",
    difficulty: "intermediate",
    question: "新世界のショートコンテンツTIME ATTACK KEYWORD GAMEにて千悟が引いたキーワード「覚悟」「テンション」あと１つは何？",
    correctAnswer: "ラーメン",
    wrongAnswers: [
      "餃子",
      "ポテト",
      "そば"
    ],
    explanation: ""
  },
  {
    id: "q041",
    difficulty: "intermediate",
    question: "私に投票すべき3つの理由の中で3番目に出てきた単語は？",
    correctAnswer: "覚悟",
    wrongAnswers: [
      "素直",
      "情熱",
      "成長"
    ],
    explanation: ""
  },
  {
    id: "q042",
    difficulty: "intermediate",
    question: "POOL THE SHINSEKAI 障害物リレーにて、第2エリア担当の千悟くんが前の走者からバトンを受け取った時は何位だったでしょう？",
    correctAnswer: "4位",
    wrongAnswers: [
      "2位",
      "3位",
      "5位"
    ],
    explanation: ""
  },
  {
    id: "q043",
    difficulty: "intermediate",
    question: "コンセプト評価チーム分けの際にディーンフジオカから渡されたカードに書かれていたアルファベットは？",
    correctAnswer: "C",
    wrongAnswers: [
      "A",
      "B",
      "D"
    ],
    explanation: ""
  },
  {
    id: "q044",
    difficulty: "intermediate",
    question: "新世界THE FINALISTS:10QUESTIONSより、今の自分を一番よく表す言葉を一つあげるなら？の質問での千悟くんの回答は？",
    correctAnswer: "強い覚悟",
    wrongAnswers: [
      "特大の感謝",
      "ダイナミックなダンス",
      "とびきりの笑顔"
    ],
    explanation: ""
  },
  {
    id: "q045",
    difficulty: "intermediate",
    question: "コンセプト評価KICK Costume ver.衣装決めじゃんけんで千悟が出したのは何？",
    correctAnswer: "ちょき✌🏻",
    wrongAnswers: [
      "ぐー✊🏻",
      "ぱー✋🏻",
      "こっちのぐー👍🏻"
    ],
    explanation: ""
  },
  {
    id: "q046",
    difficulty: "intermediate",
    question: "新世界放送終了後、初めてInstagramに投稿された際に使用していた絵文字は何？",
    correctAnswer: "餃子🥟",
    wrongAnswers: [
      "クローバー🍀",
      "ハムスター🐹",
      "ハート💖"
    ],
    explanation: ""
  },
  {
    id: "q047",
    difficulty: "intermediate",
    question: "ファイナル放送中のファイナリストの紹介での千悟くんのキャッチコピーは？",
    correctAnswer: "ふわふわ系ダンスマスター",
    wrongAnswers: [
      "にこにこ系ダンスマスター",
      "キレキレ系ダンスマスター",
      "ふわふわ系パフォーマンスマスター"
    ],
    explanation: ""
  },
  {
    id: "q048",
    difficulty: "intermediate",
    question: "千悟くんのMBTIは何？",
    correctAnswer: "ISFP",
    wrongAnswers: [
      "INFJ",
      "ISFJ",
      "ESFP"
    ],
    explanation: ""
  },
  {
    id: "q049",
    difficulty: "intermediate",
    question: "グループバトルの曲決めで、千悟くんはLOUDともう一つは何の曲で迷っていましたか？",
    correctAnswer: "IRIS OUT",
    wrongAnswers: [
      "Love seeker",
      "Bite Me",
      "CASE 143"
    ],
    explanation: ""
  },
  {
    id: "q050",
    difficulty: "intermediate",
    question: "千悟くんはKCON JAPANの10秒PRで何をした？",
    correctAnswer: "無音ダンス",
    wrongAnswers: [
      "豆まき",
      "じゃんけん",
      "アカペラ"
    ],
    explanation: ""
  },
  {
    id: "q051",
    difficulty: "intermediate",
    question: "朝ごはんといえば何？千悟くんの回答は？",
    correctAnswer: "納豆",
    wrongAnswers: [
      "パン",
      "シリアル",
      "ヨーグルト"
    ],
    explanation: ""
  },
  {
    id: "q052",
    difficulty: "intermediate",
    question: "メンプリNo.1決定戦で千悟くんは何の番長でしたか？",
    correctAnswer: "お皿洗い",
    wrongAnswers: [
      "掃除",
      "料理",
      "ダンス"
    ],
    explanation: ""
  },
  {
    id: "q053",
    difficulty: "intermediate",
    question: "メンプリNo.1決定戦で千悟くんがデコレーションしたのは何？",
    correctAnswer: "ノグリクランチチョコ",
    wrongAnswers: [
      "マシュマロチョコ",
      "オレオクランチチョコ",
      "アルフォートチョコ"
    ],
    explanation: ""
  },
  {
    id: "q054",
    difficulty: "intermediate",
    question: "千悟くんのサインに書かれているものは何？",
    correctAnswer: "星",
    wrongAnswers: [
      "ハート",
      "クローバー",
      "ニコちゃんマーク"
    ],
    explanation: ""
  },
  {
    id: "q055",
    difficulty: "intermediate",
    question: "私に投票すべき3つの理由の中で1番目に出てきた単語は？",
    correctAnswer: "ダンス",
    wrongAnswers: [
      "笑顔",
      "覚悟",
      "経験"
    ],
    explanation: ""
  },
  {
    id: "q056",
    difficulty: "intermediate",
    question: "千悟くんのポジション評価でのチーム名は？",
    correctAnswer: "NatureSelf",
    wrongAnswers: [
      "Natural",
      "NatureSeed",
      "NaturalFace"
    ],
    explanation: ""
  },
  {
    id: "q057",
    difficulty: "intermediate",
    question: "千悟くんの身長は何㎝？",
    correctAnswer: "173㎝",
    wrongAnswers: [
      "170㎝",
      "175㎝",
      "172㎝"
    ],
    explanation: ""
  },
  {
    id: "q058",
    difficulty: "intermediate",
    question: "新世界FAN BOOK第1弾の中で「よく千悟くんと部屋で筋トレをしたのが楽しかった」と言っていたのは誰？",
    correctAnswer: "河合 晃誠くん",
    wrongAnswers: [
      "甲斐 陸也くん",
      "今江 陸斗くん",
      "石田 亮太くん"
    ],
    explanation: ""
  },
  {
    id: "q059",
    difficulty: "intermediate",
    question: "千悟くんが「ファンから言われたら嬉しいこと」は？",
    correctAnswer: "ちさとー！！",
    wrongAnswers: [
      "かっこいいね",
      "いつも頑張ってるね",
      "ちさとが1番だよ！"
    ],
    explanation: ""
  },
  {
    id: "q060",
    difficulty: "intermediate",
    question: "千悟くんの子供の頃の夢は？",
    correctAnswer: "幼稚園の先生",
    wrongAnswers: [
      "ダンサー",
      "ヒカキン",
      "お花屋さん"
    ],
    explanation: ""
  },
  {
    id: "q061",
    difficulty: "intermediate",
    question: "新世界FAN BOOK第1弾の中で千悟くんが練習中に貰って「頑張った体に沁みた」と答えていたものは？",
    correctAnswer: "チョコレート",
    wrongAnswers: [
      "ノグリラーメン",
      "あったかいお弁当",
      "コーヒー"
    ],
    explanation: ""
  },
  {
    id: "q062",
    difficulty: "intermediate",
    question: "新世界FAN BOOK第1弾の中で、歩夢くんの合宿中のエピソードとして書かれていた、「千悟くんが歩夢くんに一発ギャグを振った」場所は？",
    correctAnswer: "食堂",
    wrongAnswers: [
      "練習部屋",
      "宿舎",
      "洗面所"
    ],
    explanation: ""
  },
  {
    id: "q063",
    difficulty: "intermediate",
    question: "新世界FAN BOOK第1弾の表紙で千悟くんがしているポーズは？",
    correctAnswer: "ピース✌",
    wrongAnswers: [
      "グー👍",
      "バイバイ✋",
      "手は何もしていない"
    ],
    explanation: ""
  },
  {
    id: "q064",
    difficulty: "intermediate",
    question: "Run Againの衣装で千悟くんが白のジャケットの下に着ているのは？",
    correctAnswer: "ストライプシャツにリボン",
    wrongAnswers: [
      "ストライプシャツにネクタイ",
      "フリルシャツにリボン",
      "フリルシャツにネクタイ"
    ],
    explanation: ""
  },
  {
    id: "q065",
    difficulty: "intermediate",
    question: "千悟くんがBORN TO BEの衣装で着けているベルトにあしらわれているモチーフは？",
    correctAnswer: "ハート",
    wrongAnswers: [
      "スカル",
      "星",
      "炎"
    ],
    explanation: ""
  },
  {
    id: "q066",
    difficulty: "intermediate",
    question: "KICKでの千悟くんのパートは？",
    correctAnswer: "ラッパー③",
    wrongAnswers: [
      "ラッパー②",
      "ボーカル③",
      "ラッパー①"
    ],
    explanation: ""
  },
  {
    id: "q067",
    difficulty: "intermediate",
    question: "BORN TO BEでの千悟くんのパートは？",
    correctAnswer: "ラッパー③",
    wrongAnswers: [
      "ボーカル⑤",
      "ボーカル③",
      "ラッパー②"
    ],
    explanation: ""
  },
  {
    id: "q068",
    difficulty: "intermediate",
    question: "LOUDでの千悟くんのパートは？",
    correctAnswer: "ボーカル③",
    wrongAnswers: [
      "ラッパー②",
      "ボーカル②",
      "ラッパー①"
    ],
    explanation: ""
  },
  {
    id: "q069",
    difficulty: "intermediate",
    question: "POOL THE SHINSEKAI開幕時、千悟くんがチームカラーのバンダナをつけていた部位は？",
    correctAnswer: "左腕",
    wrongAnswers: [
      "右腕",
      "首",
      "額"
    ],
    explanation: ""
  },
  {
    id: "q070",
    difficulty: "intermediate",
    question: "千悟くんがOCTPATHのライブ「Sparkle」のバックダンサーに応募する際のダンス動画を撮影した場所は？",
    correctAnswer: "路上",
    wrongAnswers: [
      "自宅",
      "スタジオ",
      "校舎内"
    ],
    explanation: ""
  },
  {
    id: "q071",
    difficulty: "intermediate",
    question: "千悟くんが黄緑が好きな理由は？",
    correctAnswer: "緑より蛍光っぽい明るい色だから",
    wrongAnswers: [
      "昔から植物が好きだから",
      "見ると元気になるから",
      "ユニフォームの色だったから"
    ],
    explanation: ""
  },
  {
    id: "q072",
    difficulty: "intermediate",
    question: "KCON JAPANのメッセージボードに書かれていた千悟くんのメッセージの締めくくりは？",
    correctAnswer: "大好き♡",
    wrongAnswers: [
      "ありがとうございます！",
      "最高！！",
      "thank you☆"
    ],
    explanation: ""
  },
  {
    id: "q073",
    difficulty: "intermediate",
    question: "ポジション評価のチームごとのON Stage⇔OFF Stageショート動画で千悟くんの「OFF」時になんの姿が使われていた？",
    correctAnswer: "グループバトル合宿時のインタビュー中の姿",
    wrongAnswers: [
      "ポジション評価合宿中に食事をしているときの姿",
      "シグナルソング合宿時の練習中の姿",
      "ポジション評価のチーム分け中の姿"
    ],
    explanation: ""
  },
  {
    id: "q074",
    difficulty: "intermediate",
    question: "ポジション評価のバックステージカメラで、パフォーマンスのステージに出る直前に千悟くんがしたのは？",
    correctAnswer: "胸に手を当てる",
    wrongAnswers: [
      "ガッツポーズをする",
      "両手を合わせる",
      "カメラに手を振る"
    ],
    explanation: ""
  },
  {
    id: "q075",
    difficulty: "intermediate",
    question: "コンセプト評価のバックステージカメラで、パフォーマンスのステージに出る直前に千悟くんがしたのは？",
    correctAnswer: "カメラに手を振る",
    wrongAnswers: [
      "KICKのサビの振りをする",
      "拳を突き出す",
      "顔にハートの手を当てる"
    ],
    explanation: ""
  },
  {
    id: "q076",
    difficulty: "intermediate",
    question: "SHINSEKAI KONBINIで千悟くんがお菓子をとるために使ったアイテムは？",
    correctAnswer: "小さい網",
    wrongAnswers: [
      "大きな網",
      "大きな箸",
      "マジックハンド"
    ],
    explanation: ""
  },
  {
    id: "q077",
    difficulty: "intermediate",
    question: "＆PAIR SHOOTINGで千悟くんが「宿舎で＆PAIRを使った感想」として答えた内容は？",
    correctAnswer: "キラッキラになっちゃいます",
    wrongAnswers: [
      "ツヤッツヤになっちゃいます",
      "サラッサラになっちゃいます",
      "ピッカピカになっちゃいます"
    ],
    explanation: ""
  },
  {
    id: "q078",
    difficulty: "intermediate",
    question: "新世界オーダーラボで販売されていたスマホケース＜書き下ろしサインver.＞に書かれていた千悟くんのサインは？",
    correctAnswer: "縦書きの「小林千悟」",
    wrongAnswers: [
      "横書きの「小林千悟」",
      "縦書きの「Chisato」",
      "横書きの「Chisato」"
    ],
    explanation: ""
  },
  {
    id: "q079",
    difficulty: "intermediate",
    question: "Team\"S\"pecialのインスタライブで披露されたエピソードで、千悟くんがTeam\"S\"pecialに所属していた時、「歩夢くんと楽屋でずっとしていた」こととは？",
    correctAnswer: "歯磨き",
    wrongAnswers: [
      "筋トレ",
      "一発ギャグ",
      "ダンスの練習"
    ],
    explanation: ""
  },
  {
    id: "q080",
    difficulty: "intermediate",
    question: "Kevin式呼吸コントロールのトレーニングを受けた後の千悟くんの感想はどれ？",
    correctAnswer: "めっちゃキツかった",
    wrongAnswers: [
      "めっちゃ勉強になった",
      "ちょっとしんどかった",
      "ちょっと楽しかった"
    ],
    explanation: ""
  },
  {
    id: "q081",
    difficulty: "advanced",
    question: "PRODUCE 101 JAPAN 新世界 #11 『サプライズ家族メッセージ』にて 小林千悟くんへの応援動画にご出演されたご家族・ご親族は総勢何名？",
    correctAnswer: "12名",
    wrongAnswers: [
      "10名",
      "11名",
      "13名"
    ],
    explanation: ""
  },
  {
    id: "q082",
    difficulty: "advanced",
    question: "Amazon Makeupにて千悟くんに使っていたリップモンスターの色はどれ？",
    correctAnswer: "05　ダークフィグ",
    wrongAnswers: [
      "03 陽炎",
      "12 誓いのルビー",
      "19 口染めライチの甘い罠"
    ],
    explanation: ""
  },
  {
    id: "q083",
    difficulty: "advanced",
    question: "デビュー公約のスケッチブックに描かれていたカプセルの数は何個？",
    correctAnswer: "8",
    wrongAnswers: [
      "6",
      "10",
      "12"
    ],
    explanation: ""
  },
  {
    id: "q084",
    difficulty: "advanced",
    question: "コンセプト評価KICKのBACK STAGE CAMERAで千悟くんとハグしている練習生は誰？",
    correctAnswer: "大林悠成くん",
    wrongAnswers: [
      "石田亮太くん",
      "横山奏夢くん",
      "浅香孝太郎くん"
    ],
    explanation: ""
  },
  {
    id: "q085",
    difficulty: "advanced",
    question: "Amazon Makeupで千悟くんに使われたのはKATEのポッピングシルエットシャドウのうちどれ？",
    correctAnswer: "アプリコットポップ（OR-1）",
    wrongAnswers: [
      "モーヴポップ（MV-1）",
      "コーラルロゼポップ（OR-2）",
      "シナモンポップ（BE-1）"
    ],
    explanation: ""
  },
  {
    id: "q086",
    difficulty: "advanced",
    question: "新世界FAN BOOK第1弾で公開された千悟くんの日誌は何月何日のもの？",
    correctAnswer: "2/12・2/23",
    wrongAnswers: [
      "2/3・2/12",
      "2/3・2/23",
      "2/12・2/20"
    ],
    explanation: ""
  },
  {
    id: "q087",
    difficulty: "advanced",
    question: "新世界FAN BOOK第1弾で公開された千悟くんの日誌（2日分）の中に出てきた「最高」の回数は？",
    correctAnswer: "5回",
    wrongAnswers: [
      "4回",
      "3回",
      "2回"
    ],
    explanation: ""
  },
  {
    id: "q088",
    difficulty: "advanced",
    question: "新世界FAN BOOK PLUSで公開された千悟くんの日誌は何月何日のもの？",
    correctAnswer: "5/5・6/4",
    wrongAnswers: [
      "5/3・6/5",
      "5/4・6/3",
      "5/2・6/6"
    ],
    explanation: ""
  },
  {
    id: "q089",
    difficulty: "advanced",
    question: "KCON JAPANのレッドカーペットで千悟くんの両隣にいた練習生は？",
    correctAnswer: "板倉悠太くん＆チェン・リッキーくん",
    wrongAnswers: [
      "今江陸斗くん＆チェン・リッキーくん",
      "板倉悠太くん＆横山奏夢くん",
      "今江陸斗くん＆横山奏夢くん"
    ],
    explanation: ""
  },
  {
    id: "q090",
    difficulty: "advanced",
    question: "ファイナルまであと3日のカウントダウン動画で、千悟くんが「じゃあ、撮ります～」の掛け声のあとにしたポーズは？",
    correctAnswer: "ガオー🖐️",
    wrongAnswers: [
      "ピース✌",
      "グッド👍",
      "拳✊"
    ],
    explanation: ""
  },
  {
    id: "q091",
    difficulty: "advanced",
    question: "グループバトルの10 seconds before the stageショート動画で、パフォーマンスのステージに出る直前に千悟くんがしたのは？",
    correctAnswer: "カメラに手を振る",
    wrongAnswers: [
      "両手を合わせる",
      "グッドの手をする",
      "ピースをする"
    ],
    explanation: ""
  },
  {
    id: "q092",
    difficulty: "advanced",
    question: "ポジション評価のグループ分けで、リーダー達が曲決めの為別室に入室した際、千悟くんは何番目に入室した？",
    correctAnswer: "8番目",
    wrongAnswers: [
      "9番目",
      "6番目",
      "7番目"
    ],
    explanation: ""
  },
  {
    id: "q093",
    difficulty: "advanced",
    question: "ポジション評価の内容発表時、千悟くんはどの高さに立っていた？",
    correctAnswer: "2段目",
    wrongAnswers: [
      "床（段なし）",
      "1段目",
      "3段目"
    ],
    explanation: ""
  },
  {
    id: "q094",
    difficulty: "advanced",
    question: "コンセプト評価の振り付け＆グループ発表時、千悟くんは練習生達の中で前から何番目に座っていた？",
    correctAnswer: "一番前",
    wrongAnswers: [
      "二列目",
      "三列目",
      "四列目"
    ],
    explanation: ""
  },
  {
    id: "q095",
    difficulty: "advanced",
    question: "HaruFilm制服ver.のフレームで、千悟くんが「していなかった」ポーズはどれ",
    correctAnswer: "ルダハート",
    wrongAnswers: [
      "隣を指さすポーズ",
      "ウインク",
      "頬に指を当てるポーズ"
    ],
    explanation: ""
  },
  {
    id: "q096",
    difficulty: "advanced",
    question: "Team\"S\"pecialのインスタライブで披露されたエピソードで、千悟くんは歩夢くんのことを何と表現した？",
    correctAnswer: "オールラウンダー",
    wrongAnswers: [
      "天才肌",
      "顔面国宝",
      "王子様みたい"
    ],
    explanation: ""
  },
  {
    id: "q097",
    difficulty: "advanced",
    question: "CanCam2026年5月号に掲載された練習生のプロフ名鑑で、千悟くんはどのタイプに分類されていた？",
    correctAnswer: "癒し系",
    wrongAnswers: [
      "キュート系",
      "王子さま系",
      "ワイルド系"
    ],
    explanation: ""
  },
  {
    id: "q098",
    difficulty: "advanced",
    question: "Canvaから公開された限定テンプレートに掲載されていたカットで千悟くんがしていたポーズは？",
    correctAnswer: "腕を組む",
    wrongAnswers: [
      "腕を後ろに回す",
      "顎に手を当てる",
      "襟をつかむ"
    ],
    explanation: ""
  },
  {
    id: "q099",
    difficulty: "advanced",
    question: "MpickardのHidden World＃6. Hidden Dateのカードに書かれていた一言は？",
    correctAnswer: "今日も僕のこと見てね",
    wrongAnswers: [
      "明日も一緒にいようね",
      "一緒に音楽聴こう",
      "大好きだよ"
    ],
    explanation: ""
  },
  {
    id: "q100",
    difficulty: "advanced",
    question: "MpickardのHidden Worldで公開された12種類のうち、ウインクをする千悟くんが見れるのは何種？（動画部分も含む）",
    correctAnswer: "4種",
    wrongAnswers: [
      "6種",
      "2種",
      "8種"
    ],
    explanation: ""
  }
];

