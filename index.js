const messages = [
  "Are you sure?",
  "Really sure??",
  "Think again 🥺",
  "Pookie please...",
  "Don’t break my heart 💔",
  "I’ll be very sad...",
  "Very very sad...",
  "Okay fine 😭",
  "Just kidding, say YES 💕"
];

let i = 0;

function sayNo() {
  const noBtn = document.querySelector(".no");
  const yesBtn = document.querySelector(".yes");

  noBtn.innerText = messages[i];
  i = (i + 1) % messages.length;

  let size = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = size * 1.3 + "px";
}

function goYes() {
  window.location.href = "yes.html";
}
