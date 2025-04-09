const questions = [
    {
        question: "Qual o nome do melhor amigo do Chris?",
        answers: ["Greg", "Drew", "Julius", "Tonhão"],
        correct: "Greg"
    },
    {
        question: "Quantos empregos o Julius tem?",
        answers: ["1", "2", "3", "4"],
        correct: "2"
    },
    {
        question: "O que a Rochelle sempre diz?",
        answers: [
            "Eu sou rica!",
            "Isso é responsabilidade do Chris!",
            "Eu não preciso disso, meu marido tem dois empregos!",
            "Vai estudar, garoto!"
        ],
        correct: "Eu não preciso disso, meu marido tem dois empregos!"
    },
    {
        question: "Quem narra a série?",
        answers: ["Chris Rock", "Terry Crews", "Tyler James", "Greg"],
        correct: "Chris Rock"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.addEventListener("click", () => checkAnswer(answer));
        answersEl.appendChild(btn);
    });
}

function checkAnswer(answer) {
    const correct = questions[currentQuestion].correct;
    if (answer === correct) score++;

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("quiz-card").classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreEl.textContent = score;
}

nextBtn.addEventListener("click", () => {
    showQuestion();
    nextBtn.classList.add("hidden");
});

answersEl.addEventListener("click", () => {
    nextBtn.classList.remove("hidden");
});
