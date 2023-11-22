// Get access to start/stop btns and body elements
const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
// Add event listeners to the start/stop btns
startBtn.addEventListener('click', startClickHandler);
stopBtn.addEventListener('click', stopClickHandler);
stopBtn.setAttribute('disabled', 'true');

// Specify timerId variable
let timerId;
// Start callback
function startClickHandler() {
  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
// Stop callback
function stopClickHandler() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');

  clearInterval(timerId);
}
// Function for random color creation
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
