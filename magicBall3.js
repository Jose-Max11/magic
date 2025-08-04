const messages = [
  "Yes, definitely!",
  "You’re on the right path.",
  "Go for it!",
  "Absolutely!",
  "Now is the time.",
  "You will succeed!",
  "It's your lucky day!",
  "Dream big, act bigger.",
  "Believe in yourself.",
  "Happiness is ahead."
];

function shakeBall() {
  const ball = document.querySelector('.ball-container');
  const messageBox = document.getElementById('message');

  // Shake animation
  ball.classList.add('shake');
  messageBox.innerText = "";

  setTimeout(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageBox.innerText = randomMessage;
    ball.classList.remove('shake');
  }, 500);
}
