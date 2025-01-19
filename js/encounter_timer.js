// Timer function script

let timerInterval;
let elapsedSeconds = 0;
let isRunning = false;

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateTimerDisplay() {
  const timerDisplay = document.querySelector('.timer');
  if (timerDisplay) {
    timerDisplay.textContent = `Time: ${formatTime(elapsedSeconds)}`;
  } else {
    console.error("Timer display element not found.");
  }
}

function toggleTimer() {
  const button = document.querySelector('.stopTimer');

  if (isRunning) {
    clearInterval(timerInterval);
    button.textContent = 'Start Timer';
    button.style.backgroundColor = '#03a100';  //green
  } else {
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      updateTimerDisplay();
    }, 1000);
    button.textContent = 'Stop Timer';
    button.style.backgroundColor = '#c42b2b';  //red
  }

  isRunning = !isRunning;
}

// Attach the toggleTimer function to the button
window.onload = () => {
  const button = document.querySelector('.stopTimer');
  if (button) {
    button.addEventListener('click', toggleTimer);
  } else {
    console.error("Start/Stop button element not found.");
  }
};