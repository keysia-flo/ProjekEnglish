const questions = [
    {
        q: "She ___ to the market every morning.",
        options: ["go", "goes", "going", "gone"],
        answer: 1
    },
    {
        q: "I have been studying English ___ two hours.",
        options: ["since", "at", "for", "in"],
        answer: 2
    },
    {
        q: "They ___ playing football when it started to rain.",
        options: ["is", "was", "are", "were"],
        answer: 3
    },
    {
        q: "If I ___ enough money, I would buy that luxury car.",
        options: ["have", "had", "has", "having"],
        answer: 1
    },
    {
        q: "The sun ___ in the east and sets in the west.",
        options: ["rise", "rising", "rose", "rises"],
        answer: 3
    },
    {
        q: "This bridge ___ in 1920 by a famous architect.",
        options: ["is built", "was built", "were built", "building"],
        answer: 1
    },
    {
        q: "You ___ touch that wire; it is very dangerous!",
        options: ["must not", "should", "might", "can"],
        answer: 0
    },
    {
        q: "We are very excited ___ our upcoming graduation ceremony.",
        options: ["in", "about", "at", "for"],
        answer: 1
    },
    {
        q: "This is the ___ movie I have ever watched in my life.",
        options: ["good", "better", "best", "most good"],
        answer: 2
    },
    {
        q: "By the time you arrive, we ___ our dinner.",
        options: ["will finish", "finished", "will have finished", "have finish"],
        answer: 2
    },
    {
        q: "I am looking forward to ___ you at the campus next week.",
        options: ["see", "seeing", "seen", "saw"],
        answer: 1
    }
    
];

let currentQuestionIndex = 0;
let score = 0;
let playerName = "Pelajar";

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const scoreEl = document.getElementById("score");
const startScreen = document.getElementById("start-screen");
const quizBox = document.getElementById("quiz-box");
const resultScreen = document.getElementById("result-screen");
const welcomeMessage = document.getElementById("welcome-message");
const nameInput = document.getElementById("player-name");
const startBtn = document.getElementById("start-btn");

function startGame() {
    const enteredName = nameInput.value.trim();
    playerName = enteredName === "" ? "Student" : enteredName;
    welcomeMessage.innerText = `Hello ${playerName}! Let's start the quiz.`;
    welcomeMessage.classList.remove("hidden");
    startScreen.classList.add("hidden");
    quizBox.classList.remove("hidden");
    resultScreen.classList.add("hidden");
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.innerText = score;
    loadQuestion();
}

function loadQuestion() {
    const current = questions[currentQuestionIndex];
    questionEl.innerText = current.q;
    optionBtns.forEach((btn, index) => {
        btn.innerText = current.options[index];
        btn.style.backgroundColor = "rgb(255, 255, 255)";
        btn.style.color = "black";
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;

    if (selectedIndex === correctIndex) {
        score += 10;
        scoreEl.innerText = score;
        alert("Correct!");
    } else {
        alert("Ups! You're wrong.");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizBox.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    document.getElementById("final-score").innerText = score;
    const scoreMessage = document.getElementById("score-message");

    if (score < 50) {
        scoreMessage.innerText = "Score below 50. Let's study more and try again!";
    } else if (score > 50) {
        scoreMessage.innerText = "Great! Score above 50. Keep studying to become even better!";
    } else {
        scoreMessage.innerText = "Score is 50. Good job, keep up the good work!";
    }
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.innerText = score;
    welcomeMessage.classList.add("hidden");
    quizBox.classList.add("hidden");
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    nameInput.value = "";
    nameInput.focus();
}

startBtn.addEventListener("click", startGame);
nameInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        startGame();
    }
});
