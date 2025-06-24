document.addEventListener('DOMContentLoaded', () => {
  const durationInput = document.getElementById('durationInput');
  const countdownDisplay  = document.getElementById('countdown-display');
  const startButton = document.getElementById('startButton');
  const resetButton = document.getElementById('reset');

  let countdownInterval = null;
  let totalSeconds = 0;
  
  function formatTime(seconds){
    const minutes = Math.floor(seconds/60);
    const remainingSeconds = seconds % 60;
    
    const formattedMinutes = String(minutes).padStart(2,'0');
    const formattedSeconds = String(remainingSeconds).padStart(2,'0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  function tick() {
    totalSeconds--;
    if(totalSeconds<0){
      clearInterval(countdownInterval);
      countdownDisplay.textContent = "00:00";
      alertMessage("Time's up!");
      startButton.disabled = false;
      return;
    }
    countdownDisplay.textContent = formatTime(totalSeconds);
  }
});

