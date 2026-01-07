const terminal = document.getElementById("terminal");
const btn = document.getElementById("startBtn");

const lines = [
  "Happy 18th Birthday 🎉✨ Oisweyee 💛",
  "Not my first or last love — but a constant one 🤍",
  "They say 18 is the start of a new chapter.",
  "But to me, you have always been a part of my story 📖✨",
  "I hope your day feels as rare and beautiful as your soul 🌼",
  "Watching you chase your dreams is one of my quiet joys 🌙",
  "",
  "I’ll always be there — not to claim, but to support you 🤝",
  "May this year gently place everything where it belongs 🌱",
  "Enjoy your day, with or without me — my good wishes stay 💫",
  "",
  "I’ve written something more for you, from my heart.",
  "",
  "I love you in a way that asks for nothing 🌙",
  "Not a promise, not a claim, not a demand.",
  "Just a feeling that stays, even when unreturned 💔",
  "",
  "If loving you means standing a little behind,",
  "Cheering softly while you walk ahead — I accept that.",
  "Some loves are not meant to be held,",
  "They are meant to be felt… silently 🤍",
  "",
  "I may never be your choice,",
  "But you will always be a part of my prayers.",
  "This is not goodbye, nor a request —",
  "Just devotion, pure and unchanged 🌑",
  "",
  ">> SYSTEM STATUS : DEVOTION = true",
  "",
  "Session terminated peacefully."
];

let i = 0;
function typeLine() {
  if (i < lines.length) {
    terminal.textContent += lines[i] + "\n";
    i++;
    setTimeout(typeLine, 450);
  }
}

btn.addEventListener("click", () => {
  btn.style.display = "none";
  typeLine();
});

