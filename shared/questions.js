/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 3: Understanding Your Own Style
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Who is the main character in the story who loves expressing himself through bold colors and custom DIY fashion?',
    choices: { a: 'Max', b: 'Dash', c: 'Maya', d: 'Toby' },
    correct: 'b'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Who are Dash\'s closest friends who comfort him and invite him to draw and play music?',
    choices: { a: 'Mia and Mara', b: 'Mika and Marco', c: 'Toby and Maya', d: 'Leo and Cloudy' },
    correct: 'c'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'A classmate is laughed at for using an "old" gadget they made themselves while everyone else chases the newest trend. Based on the story, what is the best thing to do?',
    choices: {
      a: 'Ignore them and follow the trend.',
      b: 'Tell them to throw the gadget away.',
      c: 'Support them and tell them their talent is worth being proud of.',
      d: 'Laugh along so the group does not turn on you.'
    },
    correct: 'c'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'Everyone in your class suddenly wears the same brand, but you prefer your own style. Learning from the story, what should you do?',
    choices: {
      a: 'Stay true to your own style and always be kind to others.',
      b: 'Copy everyone so you do not stand out.',
      c: 'Make fun of classmates who wear the brand.',
      d: 'Wait for the trend to end and then copy the next one.'
    },
    correct: 'a'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What happened to the neon trend by the following week?',
    choices: {
      a: 'Everyone kept wearing neon forever.',
      b: 'The students switched to a new trend and mocked anyone still in neon.',
      c: 'The school banned neon clothes.',
      d: 'Dash started a new neon trend.'
    },
    correct: 'b'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why did Dash buy the neon hoodie and smart visor?',
    choices: {
      a: 'They were needed for his artwork.',
      b: 'He wanted to fit in with the crowd.',
      c: 'He thought they looked better than his denim jacket.',
      d: 'Maya asked him to.'
    },
    correct: 'b'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'How did Dash feel after he ignored his friends to follow the online trend?',
    choices: {
      a: 'Proud and popular',
      b: 'Lonely, exhausted, and empty inside',
      c: 'Excited and confident',
      d: 'Angry at Maya'
    },
    correct: 'b'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why do you think the author made the trend change completely within just one week?',
    choices: {
      a: 'To show that trends are temporary, so changing yourself to follow them never gives lasting belonging.',
      b: 'To show that Dash was a slow shopper.',
      c: 'To make the story shorter.',
      d: 'To prove that grey jackets are better than neon.'
    },
    correct: 'a'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'What does Dash\'s hand-painted denim jacket most likely symbolize in the story?',
    choices: {
      a: 'His original talent and identity.',
      b: 'An outdated piece of clothing.',
      c: 'A way to compete with his friends.',
      d: 'His wish to be rich.'
    },
    correct: 'a'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Compare how the crowd and Dash\'s friends react to his unique style. What contrast does the author want readers to notice?',
    choices: {
      a: 'The crowd is jealous and his friends are bored.',
      b: 'The crowd values what is trendy, while his friends value real talent and friendship.',
      c: 'The crowd is honest and his friends are untruthful.',
      d: 'Both only care about technology.'
    },
    correct: 'b'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;
