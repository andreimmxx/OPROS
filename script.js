const HEROES = {
  vincent_vega: {
    name: 'Винсент Вега',
    image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    description:
      'Ты про стиль, импровизацию и энергию момента. Твоя сила — быстрое включение и личная харизма.',
  },
  mia_wallace: {
    name: 'Мия Уоллес',
    image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    description:
      'Ты умеешь заполнять собой пространство и задавать тон. Твоя суперсила — магнетизм и эмоция.',
  },
  beatrix_kiddo: {
    name: 'Беатрикс Киддо',
    image: 'https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg',
    description:
      'Ты не сгораешь, а доводишь до конца. Твоя сила — дисциплина, воля и точный удар в нужный момент.',
  },
  django_freeman: {
    name: 'Джанго Фримен',
    image: 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg',
    description:
      'Ты выбираешь свободу и не предаёшь себя. Твоя сила — смелость, достоинство и преданность своим.',
  },
  jules_winnfield: {
    name: 'Джулс Уиннфилд',
    image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    description:
      'Ты человек принципов и смысла. Твоя сила — внутренний стержень и умение говорить так, что тебя слышат.',
  },
  marquis_warren: {
    name: 'Маркиз Уоррен',
    image: 'https://image.tmdb.org/t/p/w500/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg',
    description:
      'Ты стратег и наблюдатель: видишь больше, чем показываешь. Твоя сила — интеллект и холодный расчёт.',
  },
  cliff_booth: {
    name: 'Клифф Бут',
    image: 'https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg',
    description:
      'Ты надёжен, спокоен и не любишь лишнего шума. Твоя сила — практичность, верность и уверенность.',
  },
  shosanna_dreyfus: {
    name: 'Шошанна Дрейфус',
    image: 'https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg',
    description:
      'Ты терпелив(а), точен(на) и умеешь ждать правильный момент. Твоя сила — выдержка и личная миссия.',
  },
  oren_ishii: {
    name: 'О-Рен Ишии',
    image: 'https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg',
    description:
      'Ты держишь контроль и не боишься сложных решений. Твоя сила — статус, дисциплина и жёсткая ясность.',
  },
  aldo_raine: {
    name: 'Альдо Рейн',
    image: 'https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg',
    description:
      'Ты ведёшь за собой и действуешь без промедления. Твоя сила — лидерство, напор и готовность рисковать.',
  },
};

const QUESTIONS = [
  {
    title: '1) Что ты делаешь, когда всё идёт не по плану?',
    options: {
      A: 'Импровизирую и вывожу ситуацию на характере.',
      B: 'Замолкаю, наблюдаю и готовлю точный ход.',
      C: 'Давлю вперёд и беру инициативу в свои руки.',
      D: 'Держусь принципов, даже если сложно.',
    },
    scoreMap: {
      A: ['vincent_vega', 'mia_wallace'],
      B: ['marquis_warren', 'shosanna_dreyfus'],
      C: ['aldo_raine', 'oren_ishii'],
      D: ['jules_winnfield', 'django_freeman'],
    },
  },
  {
    title: '2) Что для тебя главный источник силы?',
    options: {
      A: 'Внутренняя дисциплина.',
      B: 'Свобода и право выбирать свой путь.',
      C: 'Влияние, репутация и контроль.',
      D: 'Спокойствие и уверенность в себе.',
    },
    scoreMap: {
      A: ['beatrix_kiddo', 'oren_ishii'],
      B: ['django_freeman', 'shosanna_dreyfus'],
      C: ['mia_wallace', 'aldo_raine'],
      D: ['cliff_booth', 'marquis_warren'],
    },
  },
  {
    title: '3) Твоя идеальная атмосфера вечером:',
    options: {
      A: 'Яркое место, где можно быть в центре внимания.',
      B: 'Ночной город и разговоры «ни о чём и обо всём».',
      C: 'Тишина, план и подготовка к следующему шагу.',
      D: 'Компания своих и простая, честная обстановка.',
    },
    scoreMap: {
      A: ['mia_wallace', 'oren_ishii'],
      B: ['vincent_vega', 'jules_winnfield'],
      C: ['beatrix_kiddo', 'shosanna_dreyfus'],
      D: ['cliff_booth', 'django_freeman'],
    },
  },
  {
    title: '4) Что ты делаешь после серьёзного предательства?',
    options: {
      A: 'Действую быстро и жёстко.',
      B: 'Терпеливо жду правильного момента.',
      C: 'Ставлю границы и возвращаю контроль.',
      D: 'Оставляю прошлое и иду к новой цели.',
    },
    scoreMap: {
      A: ['aldo_raine', 'beatrix_kiddo'],
      B: ['shosanna_dreyfus', 'marquis_warren'],
      C: ['oren_ishii', 'mia_wallace'],
      D: ['django_freeman', 'cliff_booth'],
    },
  },
  {
    title: '5) Какой стиль общения тебе ближе?',
    options: {
      A: 'Харизматичный, с юмором и лёгкой провокацией.',
      B: 'Коротко и по делу.',
      C: 'Спокойно, но так, чтобы всем было ясно, кто ведёт.',
      D: 'Прямо и по совести.',
    },
    scoreMap: {
      A: ['mia_wallace', 'vincent_vega'],
      B: ['beatrix_kiddo', 'marquis_warren'],
      C: ['oren_ishii', 'aldo_raine'],
      D: ['jules_winnfield', 'django_freeman'],
    },
  },
  {
    title: '6) Как ты принимаешь важные решения?',
    options: {
      A: 'По интуиции и энергии момента.',
      B: 'Через стратегию и сбор фактов.',
      C: 'Через личный кодекс и чувство справедливости.',
      D: 'Через прагматику: что реально сработает.',
    },
    scoreMap: {
      A: ['vincent_vega', 'mia_wallace'],
      B: ['marquis_warren', 'shosanna_dreyfus'],
      C: ['jules_winnfield', 'django_freeman'],
      D: ['cliff_booth', 'beatrix_kiddo'],
    },
  },
  {
    title: '7) Как ты относишься к риску?',
    options: {
      A: 'Рискую, если ставка — свобода или близкие.',
      B: 'Люблю риск, когда можно красиво сыграть.',
      C: 'Рискую только при чётком плане отхода.',
      D: 'Иногда лучший план — ударить первым.',
    },
    scoreMap: {
      A: ['django_freeman', 'beatrix_kiddo'],
      B: ['mia_wallace', 'vincent_vega'],
      C: ['marquis_warren', 'cliff_booth'],
      D: ['aldo_raine', 'oren_ishii'],
    },
  },
  {
    title: '8) Какую роль ты чаще берёшь в команде?',
    options: {
      A: 'Лицо команды: задаю настроение.',
      B: 'Тактик: вижу детали, которые упускают другие.',
      C: 'Исполнитель: делаю работу тихо и качественно.',
      D: 'Лидер: веду и беру ответственность.',
    },
    scoreMap: {
      A: ['mia_wallace', 'vincent_vega'],
      B: ['marquis_warren', 'shosanna_dreyfus'],
      C: ['cliff_booth', 'beatrix_kiddo'],
      D: ['aldo_raine', 'jules_winnfield'],
    },
  },
  {
    title: '9) Какая фраза тебе ближе?',
    options: {
      A: '«Терпение и точность побеждают».',
      B: '«Жизнь любит смелых и стильных».',
      C: '«За своих стою до конца».',
      D: '«Если начал — доведи до финала».',
    },
    scoreMap: {
      A: ['shosanna_dreyfus', 'marquis_warren'],
      B: ['vincent_vega', 'mia_wallace'],
      C: ['cliff_booth', 'django_freeman'],
      D: ['beatrix_kiddo', 'aldo_raine'],
    },
  },
  {
    title: '10) Выбери финальный принцип:',
    options: {
      A: '«Контроль важнее эмоций».',
      B: '«Свобода и достоинство — выше страха».',
      C: '«Слово и принципы определяют человека».',
      D: '«Действие важнее сомнений».',
    },
    scoreMap: {
      A: ['oren_ishii', 'marquis_warren'],
      B: ['django_freeman', 'shosanna_dreyfus'],
      C: ['jules_winnfield', 'beatrix_kiddo'],
      D: ['aldo_raine', 'cliff_booth'],
    },
  },
];

const questionTitleEl = document.getElementById('question-title');
const answersEl = document.getElementById('answers');
const progressTextEl = document.getElementById('progress-text');
const progressFillEl = document.getElementById('progress-fill');

const quizCardEl = document.getElementById('quiz-card');
const resultCardEl = document.getElementById('result-card');
const resultImagesEl = document.getElementById('result-images');
const resultHeroEl = document.getElementById('result-hero');
const resultDescriptionEl = document.getElementById('result-description');
const tieInfoEl = document.getElementById('tie-info');
const restartBtnEl = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let scores = initScores();
const answersHistory = [];

function initScores() {
  return Object.keys(HEROES).reduce((acc, heroKey) => {
    acc[heroKey] = 0;
    return acc;
  }, {});
}

function renderQuestion() {
  const question = QUESTIONS[currentQuestionIndex];
  const step = currentQuestionIndex + 1;

  questionTitleEl.textContent = question.title;
  progressTextEl.textContent = `Вопрос ${step} из ${QUESTIONS.length}`;
  progressFillEl.style.width = `${(step / QUESTIONS.length) * 100}%`;

  answersEl.innerHTML = '';

  Object.entries(question.options).forEach(([letter, text]) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.type = 'button';
    button.textContent = `${letter}. ${text}`;

    button.addEventListener('click', () => handleAnswer(letter));
    answersEl.appendChild(button);
  });
}

function handleAnswer(letter) {
  const question = QUESTIONS[currentQuestionIndex];
  const heroesForOption = question.scoreMap[letter] ?? [];

  heroesForOption.forEach((heroKey) => {
    scores[heroKey] += 1;
  });

  answersHistory.push({
    questionIndex: currentQuestionIndex,
    letter,
    heroesAwarded: heroesForOption,
  });

  currentQuestionIndex += 1;

  if (currentQuestionIndex >= QUESTIONS.length) {
    renderResult();
    return;
  }

  renderQuestion();
}

function getTopHeroes(currentScores) {
  const maxScore = Math.max(...Object.values(currentScores));
  const topHeroes = Object.keys(currentScores).filter((hero) => currentScores[hero] === maxScore);
  return { topHeroes, maxScore };
}

function tieBreak(topHeroes) {
  const finalIndices = [7, 8, 9]; // вопросы 8,9,10
  const tieScores = topHeroes.reduce((acc, hero) => {
    acc[hero] = 0;
    return acc;
  }, {});

  finalIndices.forEach((qIndex) => {
    const answer = answersHistory[qIndex];
    if (!answer) return;

    answer.heroesAwarded.forEach((hero) => {
      if (hero in tieScores) tieScores[hero] += 1;
    });
  });

  let finalists = getTopHeroes(tieScores).topHeroes;

  if (finalists.length === 1) {
    return { winners: finalists, reason: 'Ничья решена по вопросам 8–10.' };
  }

  const lastAnswer = answersHistory[9]; // вопрос 10
  if (lastAnswer) {
    const lastHit = finalists.filter((hero) => lastAnswer.heroesAwarded.includes(hero));
    if (lastHit.length === 1) {
      return { winners: lastHit, reason: 'Ничья решена по ответу на вопрос 10.' };
    }

    if (lastHit.length >= 2) {
      finalists = lastHit;
    }
  }

  return {
    winners: finalists.slice(0, 2),
    reason: 'После всех тай-брейков сохранилось равенство. Показан двойной результат.',
  };
}

function renderResult() {
  const { topHeroes } = getTopHeroes(scores);
  let winners = topHeroes;
  let tieReason = '';

  if (topHeroes.length > 1) {
    const tieResult = tieBreak(topHeroes);
    winners = tieResult.winners;
    tieReason = tieResult.reason;
  }

  const names = winners.map((key) => HEROES[key].name);
  const descriptions = winners.map((key) => HEROES[key].description);
  const images = winners.map((key) => ({
    src: HEROES[key].image,
    alt: HEROES[key].name,
  }));

  resultHeroEl.textContent = names.join(' / ');
  resultDescriptionEl.textContent = descriptions.join(' ');
  resultImagesEl.innerHTML = '';

  images.forEach((image) => {
    const img = document.createElement('img');
    img.className = 'result-image';
    img.src = image.src;
    img.alt = `Персонаж: ${image.alt}`;
    img.loading = 'lazy';
    resultImagesEl.appendChild(img);
  });

  if (tieReason) {
    tieInfoEl.classList.remove('hidden');
    tieInfoEl.textContent = tieReason;
  } else {
    tieInfoEl.classList.add('hidden');
    tieInfoEl.textContent = '';
  }

  quizCardEl.classList.add('hidden');
  resultCardEl.classList.remove('hidden');
}

function restartQuiz() {
  currentQuestionIndex = 0;
  scores = initScores();
  answersHistory.length = 0;

  resultCardEl.classList.add('hidden');
  quizCardEl.classList.remove('hidden');

  renderQuestion();
}

restartBtnEl.addEventListener('click', restartQuiz);
renderQuestion();
