let user;
let Move;
let score_h = 0;
let score_AI = 0;
let win_status; /*false means AI true means human*/
let AI_move = document.getElementById("choo-AI");
let H_move = document.getElementById("choo-U");
let H_score = document.getElementById("score");
let AI_score = document.getElementById("score_AI");
function checking(move, user) {
  if (user === move) {
    console.log("Draw");
  } else if (
    (user === "rock" && move === "scissor") ||
    (user === "paper" && move === "Rock") ||
    (user === "scissor" && move === "paper")
  ) {
    score_h++;
    H_score.innerText = score_h;
    win_status = true;
    return win_status;
  } else {
    score_AI++;
    AI_score.innerText = score_AI;
    win_status = false;
    return win_status;
  }
}
const picking = function picking() {
  let AI = Math.random() * 3;

  if (AI < 1) {
    Move = "rock";
    AI_move.innerText = " ✊";
  } else if (AI >= 1 && AI < 2) {
    Move = "paper";
    AI_move.innerText = " 📜";
  } else {
    Move = "scissor";
    AI_move.innerText = "✂️";
  }
  console.log(AI);

  return Move;
};

const human = document.querySelectorAll(".option");
human.forEach((opt) => {
  opt.addEventListener("click", () => {
    user = opt.getAttribute("ID");

    if (user === "rock") {
      H_move.innerText = " ✊";
    } else if (user === "paper") {
      H_move.innerText = " 📜";
    } else {
      H_move.innerText = "✂️";
    }
    picking();
    checking(Move, user);
  });
}); 
document.getElementById("reset-button").addEventListener("click", () => {
  playerScore = 0;
  aiScore = 0;
  playerScoreDisplay.innerText = playerScore;
  aiScoreDisplay.innerText = aiScore;
  playerDisplay.innerText = "";
  aiDisplay.innerText = "";
});
