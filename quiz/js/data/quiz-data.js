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
//   ・難易度ごとの問題数は現在、初級30問・中級50問・上級20問を想定しています。
//     問題数を増減する場合は js/quiz-engine.js 内の出題数設定(QUIZ_COMPOSITION)も
//     あわせて確認してください。
//   ・現在の内容はすべて仮データ(ダミー)です。実際の問題に差し替えてご利用ください。
//
// ============================================================

const QUIZ_DATA = [
  {
    id: "q001",
    difficulty: "beginner",
    question: "【仮問題】初級1：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q001",
    wrongAnswers: [
      "誤答サンプルA q001",
      "誤答サンプルB q001",
      "誤答サンプルC q001"
    ],
    explanation: ""
  },
  {
    id: "q002",
    difficulty: "beginner",
    question: "【仮問題】初級2：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q002",
    wrongAnswers: [
      "誤答サンプルA q002",
      "誤答サンプルB q002",
      "誤答サンプルC q002"
    ],
    explanation: ""
  },
  {
    id: "q003",
    difficulty: "beginner",
    question: "【仮問題】初級3：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q003",
    wrongAnswers: [
      "誤答サンプルA q003",
      "誤答サンプルB q003",
      "誤答サンプルC q003"
    ],
    explanation: ""
  },
  {
    id: "q004",
    difficulty: "beginner",
    question: "【仮問題】初級4：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q004",
    wrongAnswers: [
      "誤答サンプルA q004",
      "誤答サンプルB q004",
      "誤答サンプルC q004"
    ],
    explanation: ""
  },
  {
    id: "q005",
    difficulty: "beginner",
    question: "【仮問題】初級5：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q005",
    wrongAnswers: [
      "誤答サンプルA q005",
      "誤答サンプルB q005",
      "誤答サンプルC q005"
    ],
    explanation: ""
  },
  {
    id: "q006",
    difficulty: "beginner",
    question: "【仮問題】初級6：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q006",
    wrongAnswers: [
      "誤答サンプルA q006",
      "誤答サンプルB q006",
      "誤答サンプルC q006"
    ],
    explanation: ""
  },
  {
    id: "q007",
    difficulty: "beginner",
    question: "【仮問題】初級7：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q007",
    wrongAnswers: [
      "誤答サンプルA q007",
      "誤答サンプルB q007",
      "誤答サンプルC q007"
    ],
    explanation: ""
  },
  {
    id: "q008",
    difficulty: "beginner",
    question: "【仮問題】初級8：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q008",
    wrongAnswers: [
      "誤答サンプルA q008",
      "誤答サンプルB q008",
      "誤答サンプルC q008"
    ],
    explanation: ""
  },
  {
    id: "q009",
    difficulty: "beginner",
    question: "【仮問題】初級9：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q009",
    wrongAnswers: [
      "誤答サンプルA q009",
      "誤答サンプルB q009",
      "誤答サンプルC q009"
    ],
    explanation: ""
  },
  {
    id: "q010",
    difficulty: "beginner",
    question: "【仮問題】初級10：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q010",
    wrongAnswers: [
      "誤答サンプルA q010",
      "誤答サンプルB q010",
      "誤答サンプルC q010"
    ],
    explanation: ""
  },
  {
    id: "q011",
    difficulty: "beginner",
    question: "【仮問題】初級11：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q011",
    wrongAnswers: [
      "誤答サンプルA q011",
      "誤答サンプルB q011",
      "誤答サンプルC q011"
    ],
    explanation: ""
  },
  {
    id: "q012",
    difficulty: "beginner",
    question: "【仮問題】初級12：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q012",
    wrongAnswers: [
      "誤答サンプルA q012",
      "誤答サンプルB q012",
      "誤答サンプルC q012"
    ],
    explanation: ""
  },
  {
    id: "q013",
    difficulty: "beginner",
    question: "【仮問題】初級13：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q013",
    wrongAnswers: [
      "誤答サンプルA q013",
      "誤答サンプルB q013",
      "誤答サンプルC q013"
    ],
    explanation: ""
  },
  {
    id: "q014",
    difficulty: "beginner",
    question: "【仮問題】初級14：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q014",
    wrongAnswers: [
      "誤答サンプルA q014",
      "誤答サンプルB q014",
      "誤答サンプルC q014"
    ],
    explanation: ""
  },
  {
    id: "q015",
    difficulty: "beginner",
    question: "【仮問題】初級15：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q015",
    wrongAnswers: [
      "誤答サンプルA q015",
      "誤答サンプルB q015",
      "誤答サンプルC q015"
    ],
    explanation: ""
  },
  {
    id: "q016",
    difficulty: "beginner",
    question: "【仮問題】初級16：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q016",
    wrongAnswers: [
      "誤答サンプルA q016",
      "誤答サンプルB q016",
      "誤答サンプルC q016"
    ],
    explanation: ""
  },
  {
    id: "q017",
    difficulty: "beginner",
    question: "【仮問題】初級17：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q017",
    wrongAnswers: [
      "誤答サンプルA q017",
      "誤答サンプルB q017",
      "誤答サンプルC q017"
    ],
    explanation: ""
  },
  {
    id: "q018",
    difficulty: "beginner",
    question: "【仮問題】初級18：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q018",
    wrongAnswers: [
      "誤答サンプルA q018",
      "誤答サンプルB q018",
      "誤答サンプルC q018"
    ],
    explanation: ""
  },
  {
    id: "q019",
    difficulty: "beginner",
    question: "【仮問題】初級19：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q019",
    wrongAnswers: [
      "誤答サンプルA q019",
      "誤答サンプルB q019",
      "誤答サンプルC q019"
    ],
    explanation: ""
  },
  {
    id: "q020",
    difficulty: "beginner",
    question: "【仮問題】初級20：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q020",
    wrongAnswers: [
      "誤答サンプルA q020",
      "誤答サンプルB q020",
      "誤答サンプルC q020"
    ],
    explanation: ""
  },
  {
    id: "q021",
    difficulty: "beginner",
    question: "【仮問題】初級21：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q021",
    wrongAnswers: [
      "誤答サンプルA q021",
      "誤答サンプルB q021",
      "誤答サンプルC q021"
    ],
    explanation: ""
  },
  {
    id: "q022",
    difficulty: "beginner",
    question: "【仮問題】初級22：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q022",
    wrongAnswers: [
      "誤答サンプルA q022",
      "誤答サンプルB q022",
      "誤答サンプルC q022"
    ],
    explanation: ""
  },
  {
    id: "q023",
    difficulty: "beginner",
    question: "【仮問題】初級23：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q023",
    wrongAnswers: [
      "誤答サンプルA q023",
      "誤答サンプルB q023",
      "誤答サンプルC q023"
    ],
    explanation: ""
  },
  {
    id: "q024",
    difficulty: "beginner",
    question: "【仮問題】初級24：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q024",
    wrongAnswers: [
      "誤答サンプルA q024",
      "誤答サンプルB q024",
      "誤答サンプルC q024"
    ],
    explanation: ""
  },
  {
    id: "q025",
    difficulty: "beginner",
    question: "【仮問題】初級25：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q025",
    wrongAnswers: [
      "誤答サンプルA q025",
      "誤答サンプルB q025",
      "誤答サンプルC q025"
    ],
    explanation: ""
  },
  {
    id: "q026",
    difficulty: "beginner",
    question: "【仮問題】初級26：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q026",
    wrongAnswers: [
      "誤答サンプルA q026",
      "誤答サンプルB q026",
      "誤答サンプルC q026"
    ],
    explanation: ""
  },
  {
    id: "q027",
    difficulty: "beginner",
    question: "【仮問題】初級27：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q027",
    wrongAnswers: [
      "誤答サンプルA q027",
      "誤答サンプルB q027",
      "誤答サンプルC q027"
    ],
    explanation: ""
  },
  {
    id: "q028",
    difficulty: "beginner",
    question: "【仮問題】初級28：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q028",
    wrongAnswers: [
      "誤答サンプルA q028",
      "誤答サンプルB q028",
      "誤答サンプルC q028"
    ],
    explanation: ""
  },
  {
    id: "q029",
    difficulty: "beginner",
    question: "【仮問題】初級29：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q029",
    wrongAnswers: [
      "誤答サンプルA q029",
      "誤答サンプルB q029",
      "誤答サンプルC q029"
    ],
    explanation: ""
  },
  {
    id: "q030",
    difficulty: "beginner",
    question: "【仮問題】初級30：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q030",
    wrongAnswers: [
      "誤答サンプルA q030",
      "誤答サンプルB q030",
      "誤答サンプルC q030"
    ],
    explanation: ""
  },
  {
    id: "q031",
    difficulty: "intermediate",
    question: "【仮問題】中級1：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q031",
    wrongAnswers: [
      "誤答サンプルA q031",
      "誤答サンプルB q031",
      "誤答サンプルC q031"
    ],
    explanation: ""
  },
  {
    id: "q032",
    difficulty: "intermediate",
    question: "【仮問題】中級2：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q032",
    wrongAnswers: [
      "誤答サンプルA q032",
      "誤答サンプルB q032",
      "誤答サンプルC q032"
    ],
    explanation: ""
  },
  {
    id: "q033",
    difficulty: "intermediate",
    question: "【仮問題】中級3：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q033",
    wrongAnswers: [
      "誤答サンプルA q033",
      "誤答サンプルB q033",
      "誤答サンプルC q033"
    ],
    explanation: ""
  },
  {
    id: "q034",
    difficulty: "intermediate",
    question: "【仮問題】中級4：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q034",
    wrongAnswers: [
      "誤答サンプルA q034",
      "誤答サンプルB q034",
      "誤答サンプルC q034"
    ],
    explanation: ""
  },
  {
    id: "q035",
    difficulty: "intermediate",
    question: "【仮問題】中級5：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q035",
    wrongAnswers: [
      "誤答サンプルA q035",
      "誤答サンプルB q035",
      "誤答サンプルC q035"
    ],
    explanation: ""
  },
  {
    id: "q036",
    difficulty: "intermediate",
    question: "【仮問題】中級6：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q036",
    wrongAnswers: [
      "誤答サンプルA q036",
      "誤答サンプルB q036",
      "誤答サンプルC q036"
    ],
    explanation: ""
  },
  {
    id: "q037",
    difficulty: "intermediate",
    question: "【仮問題】中級7：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q037",
    wrongAnswers: [
      "誤答サンプルA q037",
      "誤答サンプルB q037",
      "誤答サンプルC q037"
    ],
    explanation: ""
  },
  {
    id: "q038",
    difficulty: "intermediate",
    question: "【仮問題】中級8：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q038",
    wrongAnswers: [
      "誤答サンプルA q038",
      "誤答サンプルB q038",
      "誤答サンプルC q038"
    ],
    explanation: ""
  },
  {
    id: "q039",
    difficulty: "intermediate",
    question: "【仮問題】中級9：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q039",
    wrongAnswers: [
      "誤答サンプルA q039",
      "誤答サンプルB q039",
      "誤答サンプルC q039"
    ],
    explanation: ""
  },
  {
    id: "q040",
    difficulty: "intermediate",
    question: "【仮問題】中級10：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q040",
    wrongAnswers: [
      "誤答サンプルA q040",
      "誤答サンプルB q040",
      "誤答サンプルC q040"
    ],
    explanation: ""
  },
  {
    id: "q041",
    difficulty: "intermediate",
    question: "【仮問題】中級11：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q041",
    wrongAnswers: [
      "誤答サンプルA q041",
      "誤答サンプルB q041",
      "誤答サンプルC q041"
    ],
    explanation: ""
  },
  {
    id: "q042",
    difficulty: "intermediate",
    question: "【仮問題】中級12：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q042",
    wrongAnswers: [
      "誤答サンプルA q042",
      "誤答サンプルB q042",
      "誤答サンプルC q042"
    ],
    explanation: ""
  },
  {
    id: "q043",
    difficulty: "intermediate",
    question: "【仮問題】中級13：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q043",
    wrongAnswers: [
      "誤答サンプルA q043",
      "誤答サンプルB q043",
      "誤答サンプルC q043"
    ],
    explanation: ""
  },
  {
    id: "q044",
    difficulty: "intermediate",
    question: "【仮問題】中級14：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q044",
    wrongAnswers: [
      "誤答サンプルA q044",
      "誤答サンプルB q044",
      "誤答サンプルC q044"
    ],
    explanation: ""
  },
  {
    id: "q045",
    difficulty: "intermediate",
    question: "【仮問題】中級15：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q045",
    wrongAnswers: [
      "誤答サンプルA q045",
      "誤答サンプルB q045",
      "誤答サンプルC q045"
    ],
    explanation: ""
  },
  {
    id: "q046",
    difficulty: "intermediate",
    question: "【仮問題】中級16：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q046",
    wrongAnswers: [
      "誤答サンプルA q046",
      "誤答サンプルB q046",
      "誤答サンプルC q046"
    ],
    explanation: ""
  },
  {
    id: "q047",
    difficulty: "intermediate",
    question: "【仮問題】中級17：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q047",
    wrongAnswers: [
      "誤答サンプルA q047",
      "誤答サンプルB q047",
      "誤答サンプルC q047"
    ],
    explanation: ""
  },
  {
    id: "q048",
    difficulty: "intermediate",
    question: "【仮問題】中級18：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q048",
    wrongAnswers: [
      "誤答サンプルA q048",
      "誤答サンプルB q048",
      "誤答サンプルC q048"
    ],
    explanation: ""
  },
  {
    id: "q049",
    difficulty: "intermediate",
    question: "【仮問題】中級19：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q049",
    wrongAnswers: [
      "誤答サンプルA q049",
      "誤答サンプルB q049",
      "誤答サンプルC q049"
    ],
    explanation: ""
  },
  {
    id: "q050",
    difficulty: "intermediate",
    question: "【仮問題】中級20：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q050",
    wrongAnswers: [
      "誤答サンプルA q050",
      "誤答サンプルB q050",
      "誤答サンプルC q050"
    ],
    explanation: ""
  },
  {
    id: "q051",
    difficulty: "intermediate",
    question: "【仮問題】中級21：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q051",
    wrongAnswers: [
      "誤答サンプルA q051",
      "誤答サンプルB q051",
      "誤答サンプルC q051"
    ],
    explanation: ""
  },
  {
    id: "q052",
    difficulty: "intermediate",
    question: "【仮問題】中級22：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q052",
    wrongAnswers: [
      "誤答サンプルA q052",
      "誤答サンプルB q052",
      "誤答サンプルC q052"
    ],
    explanation: ""
  },
  {
    id: "q053",
    difficulty: "intermediate",
    question: "【仮問題】中級23：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q053",
    wrongAnswers: [
      "誤答サンプルA q053",
      "誤答サンプルB q053",
      "誤答サンプルC q053"
    ],
    explanation: ""
  },
  {
    id: "q054",
    difficulty: "intermediate",
    question: "【仮問題】中級24：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q054",
    wrongAnswers: [
      "誤答サンプルA q054",
      "誤答サンプルB q054",
      "誤答サンプルC q054"
    ],
    explanation: ""
  },
  {
    id: "q055",
    difficulty: "intermediate",
    question: "【仮問題】中級25：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q055",
    wrongAnswers: [
      "誤答サンプルA q055",
      "誤答サンプルB q055",
      "誤答サンプルC q055"
    ],
    explanation: ""
  },
  {
    id: "q056",
    difficulty: "intermediate",
    question: "【仮問題】中級26：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q056",
    wrongAnswers: [
      "誤答サンプルA q056",
      "誤答サンプルB q056",
      "誤答サンプルC q056"
    ],
    explanation: ""
  },
  {
    id: "q057",
    difficulty: "intermediate",
    question: "【仮問題】中級27：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q057",
    wrongAnswers: [
      "誤答サンプルA q057",
      "誤答サンプルB q057",
      "誤答サンプルC q057"
    ],
    explanation: ""
  },
  {
    id: "q058",
    difficulty: "intermediate",
    question: "【仮問題】中級28：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q058",
    wrongAnswers: [
      "誤答サンプルA q058",
      "誤答サンプルB q058",
      "誤答サンプルC q058"
    ],
    explanation: ""
  },
  {
    id: "q059",
    difficulty: "intermediate",
    question: "【仮問題】中級29：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q059",
    wrongAnswers: [
      "誤答サンプルA q059",
      "誤答サンプルB q059",
      "誤答サンプルC q059"
    ],
    explanation: ""
  },
  {
    id: "q060",
    difficulty: "intermediate",
    question: "【仮問題】中級30：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q060",
    wrongAnswers: [
      "誤答サンプルA q060",
      "誤答サンプルB q060",
      "誤答サンプルC q060"
    ],
    explanation: ""
  },
  {
    id: "q061",
    difficulty: "intermediate",
    question: "【仮問題】中級31：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q061",
    wrongAnswers: [
      "誤答サンプルA q061",
      "誤答サンプルB q061",
      "誤答サンプルC q061"
    ],
    explanation: ""
  },
  {
    id: "q062",
    difficulty: "intermediate",
    question: "【仮問題】中級32：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q062",
    wrongAnswers: [
      "誤答サンプルA q062",
      "誤答サンプルB q062",
      "誤答サンプルC q062"
    ],
    explanation: ""
  },
  {
    id: "q063",
    difficulty: "intermediate",
    question: "【仮問題】中級33：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q063",
    wrongAnswers: [
      "誤答サンプルA q063",
      "誤答サンプルB q063",
      "誤答サンプルC q063"
    ],
    explanation: ""
  },
  {
    id: "q064",
    difficulty: "intermediate",
    question: "【仮問題】中級34：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q064",
    wrongAnswers: [
      "誤答サンプルA q064",
      "誤答サンプルB q064",
      "誤答サンプルC q064"
    ],
    explanation: ""
  },
  {
    id: "q065",
    difficulty: "intermediate",
    question: "【仮問題】中級35：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q065",
    wrongAnswers: [
      "誤答サンプルA q065",
      "誤答サンプルB q065",
      "誤答サンプルC q065"
    ],
    explanation: ""
  },
  {
    id: "q066",
    difficulty: "intermediate",
    question: "【仮問題】中級36：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q066",
    wrongAnswers: [
      "誤答サンプルA q066",
      "誤答サンプルB q066",
      "誤答サンプルC q066"
    ],
    explanation: ""
  },
  {
    id: "q067",
    difficulty: "intermediate",
    question: "【仮問題】中級37：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q067",
    wrongAnswers: [
      "誤答サンプルA q067",
      "誤答サンプルB q067",
      "誤答サンプルC q067"
    ],
    explanation: ""
  },
  {
    id: "q068",
    difficulty: "intermediate",
    question: "【仮問題】中級38：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q068",
    wrongAnswers: [
      "誤答サンプルA q068",
      "誤答サンプルB q068",
      "誤答サンプルC q068"
    ],
    explanation: ""
  },
  {
    id: "q069",
    difficulty: "intermediate",
    question: "【仮問題】中級39：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q069",
    wrongAnswers: [
      "誤答サンプルA q069",
      "誤答サンプルB q069",
      "誤答サンプルC q069"
    ],
    explanation: ""
  },
  {
    id: "q070",
    difficulty: "intermediate",
    question: "【仮問題】中級40：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q070",
    wrongAnswers: [
      "誤答サンプルA q070",
      "誤答サンプルB q070",
      "誤答サンプルC q070"
    ],
    explanation: ""
  },
  {
    id: "q071",
    difficulty: "intermediate",
    question: "【仮問題】中級41：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q071",
    wrongAnswers: [
      "誤答サンプルA q071",
      "誤答サンプルB q071",
      "誤答サンプルC q071"
    ],
    explanation: ""
  },
  {
    id: "q072",
    difficulty: "intermediate",
    question: "【仮問題】中級42：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q072",
    wrongAnswers: [
      "誤答サンプルA q072",
      "誤答サンプルB q072",
      "誤答サンプルC q072"
    ],
    explanation: ""
  },
  {
    id: "q073",
    difficulty: "intermediate",
    question: "【仮問題】中級43：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q073",
    wrongAnswers: [
      "誤答サンプルA q073",
      "誤答サンプルB q073",
      "誤答サンプルC q073"
    ],
    explanation: ""
  },
  {
    id: "q074",
    difficulty: "intermediate",
    question: "【仮問題】中級44：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q074",
    wrongAnswers: [
      "誤答サンプルA q074",
      "誤答サンプルB q074",
      "誤答サンプルC q074"
    ],
    explanation: ""
  },
  {
    id: "q075",
    difficulty: "intermediate",
    question: "【仮問題】中級45：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q075",
    wrongAnswers: [
      "誤答サンプルA q075",
      "誤答サンプルB q075",
      "誤答サンプルC q075"
    ],
    explanation: ""
  },
  {
    id: "q076",
    difficulty: "intermediate",
    question: "【仮問題】中級46：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q076",
    wrongAnswers: [
      "誤答サンプルA q076",
      "誤答サンプルB q076",
      "誤答サンプルC q076"
    ],
    explanation: ""
  },
  {
    id: "q077",
    difficulty: "intermediate",
    question: "【仮問題】中級47：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q077",
    wrongAnswers: [
      "誤答サンプルA q077",
      "誤答サンプルB q077",
      "誤答サンプルC q077"
    ],
    explanation: ""
  },
  {
    id: "q078",
    difficulty: "intermediate",
    question: "【仮問題】中級48：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q078",
    wrongAnswers: [
      "誤答サンプルA q078",
      "誤答サンプルB q078",
      "誤答サンプルC q078"
    ],
    explanation: ""
  },
  {
    id: "q079",
    difficulty: "intermediate",
    question: "【仮問題】中級49：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q079",
    wrongAnswers: [
      "誤答サンプルA q079",
      "誤答サンプルB q079",
      "誤答サンプルC q079"
    ],
    explanation: ""
  },
  {
    id: "q080",
    difficulty: "intermediate",
    question: "【仮問題】中級50：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q080",
    wrongAnswers: [
      "誤答サンプルA q080",
      "誤答サンプルB q080",
      "誤答サンプルC q080"
    ],
    explanation: ""
  },
  {
    id: "q081",
    difficulty: "advanced",
    question: "【仮問題】上級1：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q081",
    wrongAnswers: [
      "誤答サンプルA q081",
      "誤答サンプルB q081",
      "誤答サンプルC q081"
    ],
    explanation: ""
  },
  {
    id: "q082",
    difficulty: "advanced",
    question: "【仮問題】上級2：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q082",
    wrongAnswers: [
      "誤答サンプルA q082",
      "誤答サンプルB q082",
      "誤答サンプルC q082"
    ],
    explanation: ""
  },
  {
    id: "q083",
    difficulty: "advanced",
    question: "【仮問題】上級3：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q083",
    wrongAnswers: [
      "誤答サンプルA q083",
      "誤答サンプルB q083",
      "誤答サンプルC q083"
    ],
    explanation: ""
  },
  {
    id: "q084",
    difficulty: "advanced",
    question: "【仮問題】上級4：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q084",
    wrongAnswers: [
      "誤答サンプルA q084",
      "誤答サンプルB q084",
      "誤答サンプルC q084"
    ],
    explanation: ""
  },
  {
    id: "q085",
    difficulty: "advanced",
    question: "【仮問題】上級5：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q085",
    wrongAnswers: [
      "誤答サンプルA q085",
      "誤答サンプルB q085",
      "誤答サンプルC q085"
    ],
    explanation: ""
  },
  {
    id: "q086",
    difficulty: "advanced",
    question: "【仮問題】上級6：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q086",
    wrongAnswers: [
      "誤答サンプルA q086",
      "誤答サンプルB q086",
      "誤答サンプルC q086"
    ],
    explanation: ""
  },
  {
    id: "q087",
    difficulty: "advanced",
    question: "【仮問題】上級7：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q087",
    wrongAnswers: [
      "誤答サンプルA q087",
      "誤答サンプルB q087",
      "誤答サンプルC q087"
    ],
    explanation: ""
  },
  {
    id: "q088",
    difficulty: "advanced",
    question: "【仮問題】上級8：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q088",
    wrongAnswers: [
      "誤答サンプルA q088",
      "誤答サンプルB q088",
      "誤答サンプルC q088"
    ],
    explanation: ""
  },
  {
    id: "q089",
    difficulty: "advanced",
    question: "【仮問題】上級9：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q089",
    wrongAnswers: [
      "誤答サンプルA q089",
      "誤答サンプルB q089",
      "誤答サンプルC q089"
    ],
    explanation: ""
  },
  {
    id: "q090",
    difficulty: "advanced",
    question: "【仮問題】上級10：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q090",
    wrongAnswers: [
      "誤答サンプルA q090",
      "誤答サンプルB q090",
      "誤答サンプルC q090"
    ],
    explanation: ""
  },
  {
    id: "q091",
    difficulty: "advanced",
    question: "【仮問題】上級11：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q091",
    wrongAnswers: [
      "誤答サンプルA q091",
      "誤答サンプルB q091",
      "誤答サンプルC q091"
    ],
    explanation: ""
  },
  {
    id: "q092",
    difficulty: "advanced",
    question: "【仮問題】上級12：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q092",
    wrongAnswers: [
      "誤答サンプルA q092",
      "誤答サンプルB q092",
      "誤答サンプルC q092"
    ],
    explanation: ""
  },
  {
    id: "q093",
    difficulty: "advanced",
    question: "【仮問題】上級13：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q093",
    wrongAnswers: [
      "誤答サンプルA q093",
      "誤答サンプルB q093",
      "誤答サンプルC q093"
    ],
    explanation: ""
  },
  {
    id: "q094",
    difficulty: "advanced",
    question: "【仮問題】上級14：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q094",
    wrongAnswers: [
      "誤答サンプルA q094",
      "誤答サンプルB q094",
      "誤答サンプルC q094"
    ],
    explanation: ""
  },
  {
    id: "q095",
    difficulty: "advanced",
    question: "【仮問題】上級15：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q095",
    wrongAnswers: [
      "誤答サンプルA q095",
      "誤答サンプルB q095",
      "誤答サンプルC q095"
    ],
    explanation: ""
  },
  {
    id: "q096",
    difficulty: "advanced",
    question: "【仮問題】上級16：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q096",
    wrongAnswers: [
      "誤答サンプルA q096",
      "誤答サンプルB q096",
      "誤答サンプルC q096"
    ],
    explanation: ""
  },
  {
    id: "q097",
    difficulty: "advanced",
    question: "【仮問題】上級17：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q097",
    wrongAnswers: [
      "誤答サンプルA q097",
      "誤答サンプルB q097",
      "誤答サンプルC q097"
    ],
    explanation: ""
  },
  {
    id: "q098",
    difficulty: "advanced",
    question: "【仮問題】上級18：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q098",
    wrongAnswers: [
      "誤答サンプルA q098",
      "誤答サンプルB q098",
      "誤答サンプルC q098"
    ],
    explanation: ""
  },
  {
    id: "q099",
    difficulty: "advanced",
    question: "【仮問題】上級19：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q099",
    wrongAnswers: [
      "誤答サンプルA q099",
      "誤答サンプルB q099",
      "誤答サンプルC q099"
    ],
    explanation: ""
  },
  {
    id: "q100",
    difficulty: "advanced",
    question: "【仮問題】上級20：ここに問題文を入力してください。(CHISATOに関する4択クイズ)",
    correctAnswer: "正解サンプル q100",
    wrongAnswers: [
      "誤答サンプルA q100",
      "誤答サンプルB q100",
      "誤答サンプルC q100"
    ],
    explanation: ""
  }
];

