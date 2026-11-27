const guessForm = document.querySelector("[data-guess-form]");

if (guessForm) {
  const target = Math.floor(Math.random() * 100) + 1;
  const status = document.querySelector("[data-guess-status]");
  let attempts = 0;

  guessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const guess = Number(new FormData(guessForm).get("guess"));
    attempts += 1;

    if (guess === target) {
      status.textContent = `Верно! Ты угадал за ${attempts} попыток.`;
      guessForm.querySelector("button").disabled = true;
    } else {
      status.textContent = guess < target ? "Загаданное число больше." : "Загаданное число меньше.";
    }
  });
}

const arithmeticForm = document.querySelector("[data-arithmetic-form]");

if (arithmeticForm) {
  const problem = document.querySelector("[data-arithmetic-problem]");
  const status = document.querySelector("[data-arithmetic-status]");
  let answer;

  const createProblem = () => {
    let first = Math.floor(Math.random() * 20) + 1;
    let second = Math.floor(Math.random() * 20) + 1;
    const operation = Math.random() < 0.5 ? "+" : "−";

    if (operation === "−" && second > first) {
      [first, second] = [second, first];
    }

    answer = operation === "+" ? first + second : first - second;
    problem.textContent = `${first} ${operation} ${second} = ?`;
    status.textContent = "";
    arithmeticForm.reset();
  };

  arithmeticForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userAnswer = Number(new FormData(arithmeticForm).get("answer"));
    status.textContent = userAnswer === answer ? "Правильно!" : `Неверно. Попробуй ещё раз.`;
  });

  document.querySelector("[data-new-problem]").addEventListener("click", createProblem);
  createProblem();
}

const reverseForm = document.querySelector("[data-reverse-form]");

if (reverseForm) {
  const status = document.querySelector("[data-reverse-status]");

  reverseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = new FormData(reverseForm).get("text");
    status.textContent = Array.from(text).reverse().join("");
  });
}

const rpsChoices = document.querySelector("[data-rps-choices]");

if (rpsChoices) {
  const choices = ["rock", "scissors", "paper"];
  const labels = {
    rock: "Камень",
    scissors: "Ножницы",
    paper: "Бумага",
  };
  const status = document.querySelector("[data-rps-status]");

  rpsChoices.addEventListener("click", (event) => {
    const button = event.target.closest("[data-choice]");

    if (!button) {
      return;
    }

    const player = button.dataset.choice;
    const computer = choices[Math.floor(Math.random() * choices.length)];
    let result = "Ничья!";

    if (
      (player === "rock" && computer === "scissors")
      || (player === "scissors" && computer === "paper")
      || (player === "paper" && computer === "rock")
    ) {
      result = "Ты выиграл!";
    } else if (player !== computer) {
      result = "Компьютер выиграл.";
    }

    status.textContent = `${labels[player]} — ${labels[computer]}. ${result}`;
  });
}

const quizOptions = document.querySelector("[data-quiz-options]");

if (quizOptions) {
  const questions = [
    { question: "Сколько будет 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "Какого цвета трава?", options: ["Синяя", "Зелёная", "Красная"], answer: "Зелёная" },
    { question: "Сколько дней в неделе?", options: ["5", "6", "7"], answer: "7" },
  ];
  const question = document.querySelector("[data-quiz-question]");
  const status = document.querySelector("[data-quiz-status]");
  const nextButton = document.querySelector("[data-quiz-next]");
  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  const showQuestion = () => {
    answered = false;
    status.textContent = "";
    nextButton.disabled = true;

    if (currentQuestion === questions.length) {
      question.textContent = `Викторина завершена! Правильных ответов: ${score} из ${questions.length}.`;
      quizOptions.replaceChildren();
      nextButton.hidden = true;
      return;
    }

    const current = questions[currentQuestion];
    question.textContent = current.question;
    quizOptions.replaceChildren(...current.options.map((option) => {
      const button = document.createElement("button");
      button.className = "play-button play-button--light";
      button.type = "button";
      button.dataset.answer = option;
      button.textContent = option;
      return button;
    }));
  };

  quizOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-answer]");

    if (!button || answered) {
      return;
    }

    answered = true;
    const correctAnswer = questions[currentQuestion].answer;
    const isCorrect = button.dataset.answer === correctAnswer;
    score += Number(isCorrect);
    status.textContent = isCorrect ? "Верно!" : `Неверно. Правильный ответ: ${correctAnswer}.`;
    nextButton.disabled = false;
  });

  nextButton.addEventListener("click", () => {
    if (!nextButton.disabled) {
      currentQuestion += 1;
      showQuestion();
    }
  });

  showQuestion();
}

const colorButton = document.querySelector("[data-new-color]");

if (colorButton) {
  const status = document.querySelector("[data-color-status]");

  colorButton.addEventListener("click", () => {
    const color = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, "0")}`;
    document.body.style.backgroundColor = color;
    status.textContent = `Новый цвет: ${color}`;
  });
}
