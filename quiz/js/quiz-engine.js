// ============================================================
// quiz-engine.js
// クイズの出題・採点・コンプリート判定ロジック。
// ============================================================

// 1回のプレイで各難易度から何問出すか(合計25問)。
// 問題数を変更したい場合はここと quiz-data.js の問題数をあわせて調整する。
const QUIZ_COMPOSITION = {
  beginner: 7,
  intermediate: 13,
  advanced: 5,
};

/**
 * 配列をシャッフルした「新しい配列」を返す(元の配列は変更しない)。
 * Fisher-Yatesアルゴリズム。他のモジュール(ガチャ・ビンゴ等)からも利用する。
 */
function shuffleArray(source) {
  const arr = source.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * QUIZ_DATA から難易度別に指定数をランダム抽選し、
 * 25問を結合してさらに全体をシャッフルした配列を返す。
 * 各問題の4択(正解+誤答3つ)もこの時点でランダムな順番に並べ替える。
 */
function buildQuizQuestionSet() {
  const picked = [];

  Object.keys(QUIZ_COMPOSITION).forEach((difficulty) => {
    const pool = QUIZ_DATA.filter((q) => q.difficulty === difficulty);
    const count = QUIZ_COMPOSITION[difficulty];
    const chosen = shuffleArray(pool).slice(0, count);
    picked.push(...chosen);
  });

  const ordered = shuffleArray(picked);

  return ordered.map((q) => {
    const choiceTexts = shuffleArray([q.correctAnswer, ...q.wrongAnswers]);
    const labels = ["A", "B", "C", "D"];
    const choices = choiceTexts.map((text, i) => ({
      key: labels[i],
      text,
      correct: text === q.correctAnswer,
    }));
    return {
      id: q.id,
      difficulty: q.difficulty,
      question: q.question,
      explanation: q.explanation || "",
      choices,
    };
  });
}

/** 新しいクイズセッション(1プレイ分・25問)を作成する。 */
function createQuizSession() {
  return {
    questions: buildQuizQuestionSet(),
    currentIndex: 0,
    correctCount: 0,
    sessionClearedIds: new Set(), // このプレイ内で正解した問題ID
  };
}

function getCurrentQuestion(session) {
  return session.questions[session.currentIndex];
}

function isQuizFinished(session) {
  return session.currentIndex >= session.questions.length;
}

/**
 * 現在の問題に解答する。
 * 呼び出し側は結果(正解かどうか)を見て演出を出し、その後 advanceQuestion() を呼ぶ。
 */
function answerCurrentQuestion(session, choiceKey) {
  const question = getCurrentQuestion(session);
  const chosen = question.choices.find((c) => c.key === choiceKey);
  const correct = !!(chosen && chosen.correct);
  if (correct) {
    session.correctCount++;
    session.sessionClearedIds.add(question.id);
  }
  return { correct, question };
}

/** 次の問題へ進める。 */
function advanceQuestion(session) {
  session.currentIndex++;
}

/**
 * 25問完走したセッションの結果をlocalStorageへ確定反映する。
 * 【重要】途中で離脱したセッション(25問完走していない)はこの関数を呼ばないこと。
 * これにより「途中離脱までに正解した問題はコンプリートに含めない」という仕様を満たす。
 */
function commitQuizSessionResult(state, session) {
  const totalQuestions = session.questions.length;
  const beforeCount = Object.keys(state.clearedQuizIds).length;

  let newlyClearedCount = 0;
  session.sessionClearedIds.forEach((id) => {
    if (!state.clearedQuizIds[id]) {
      state.clearedQuizIds[id] = true;
      newlyClearedCount++;
    }
  });

  state.hasPlayed = true;
  state.playCount += 1;

  const totalCleared = Object.keys(state.clearedQuizIds).length;
  const totalQuizCount = QUIZ_DATA.length;
  const quizCompleteNewly = totalCleared === totalQuizCount && !state.flags.quizCompleted;
  if (quizCompleteNewly) {
    state.flags.quizCompleted = true;
  }

  saveState(state);

  return {
    correctCount: session.correctCount,
    totalQuestions,
    accuracyPercent: Math.round((session.correctCount / totalQuestions) * 100),
    newlyClearedCount,
    beforeClearedCount: beforeCount,
    totalCleared,
    totalQuizCount,
    completePercent: Math.round((totalCleared / totalQuizCount) * 100),
    quizCompleteNewly,
  };
}

/** トップ画面などで表示する現在のクイズ進捗を計算する。 */
function getQuizProgress(state) {
  const totalQuizCount = QUIZ_DATA.length;
  const totalCleared = Object.keys(state.clearedQuizIds).length;
  return {
    totalCleared,
    totalQuizCount,
    percent: Math.round((totalCleared / totalQuizCount) * 100),
  };
}
