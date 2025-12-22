const terminal = document.getElementById("terminal");
const btn = document.getElementById("startBtn");

const lines = [
  "Initializing system breach...",
  "Bypassing firewall...",
  "Decrypting encrypted data...",
  "Accessing root privileges...",
  "Loading birthday protocol...",
  "",
  "ACCESS GRANTED ✔",
  "",
  "User Identified : Debopriyo Pandit",
  "Role           : LEGENDARY BROTHER",
  "Clearance      : MAXIMUM",
  "",
  "Injecting birthday payload...",
  "Compiling wishes...",
  "Removing bugs from life...",
  "",
  "🎉 HAPPY BIRTHDAY, DEBOPRIYO 🎂",
  "May your code compile on first try 🚀",
  "May your bugs be few and commits be clean 💻",
  "",
  ">> SYSTEM STATUS : BROTHERHOOD = ∞",
  "",
  "Session terminated successfully."
];

let i = 0;
function typeLine(){
  if(i < lines.length){
    terminal.textContent += lines[i]+"\n";
    i++;
    setTimeout(typeLine, 450);
  }
}
btn.addEventListener("click", ()=> {
   btn.style.display= "none";
   typeLine();
})
