const clock = document.querySelector(".clock");

function updateClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

// Call updateClock initially to display the time instantly
updateClock();