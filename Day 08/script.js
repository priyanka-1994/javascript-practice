function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Pad single digits with 0
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = currentTime;

  // Format the date
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',   // Monday
    year: 'numeric',   // 2025
    month: 'long',     // June
    day: 'numeric'     // 9
  }).format(now);

  document.getElementById('date').textContent = formattedDate;
}

// Initial call and update every second
updateClock();
setInterval(updateClock, 1000);
