const quiz = [
  {
    question: "HTML ka full form kya hai?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language"],
    answer: 0
  },
  {
    question: "CSS ka use kis liye hota hai?",
    options: ["Styling", "Logic", "Database"],
    answer: 0
  },
  {
    question: "JavaScript ka use kis liye hota hai?",
    options: ["Structure", "Design", "Functionality"],
    answer: 2
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const choicesDiv = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  choicesDiv.innerHTML = "";
  questionText.textContent = quiz[index].question;

  quiz[index].options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quiz[index].answer) {
    score++;
    alert("Correct");
  } else {
    alert("Wrong");
  }
}

nextBtn.onclick = () => {
  index++;
  if (index < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML =
      `<h2>Quiz Finished</h2><p>Score: ${score}/${quiz.length}</p>`;
  }
};

loadQuestion();
