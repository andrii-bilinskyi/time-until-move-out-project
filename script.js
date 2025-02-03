const endDate = new Date("2025-08-03T00:00:00");

const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const currentDate = new Date();
  const millisecondsDifference = endDate - currentDate;

  if (millisecondsDifference <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    clearInterval(countdownInterval); // Зупиняємо таймер
    return;
  }

  const daysLeft = Math.floor(millisecondsDifference / MS_IN_DAY);
  const hoursLeft = Math.floor(
    (millisecondsDifference % MS_IN_DAY) / MS_IN_HOUR
  );
  const minutesLeft = Math.floor(
    (millisecondsDifference % MS_IN_HOUR) / MS_IN_MINUTE
  );
  const secondsLeft = Math.floor(
    (millisecondsDifference % MS_IN_MINUTE) / MS_IN_SECOND
  );

  daysEl.textContent = daysLeft;
  hoursEl.textContent = hoursLeft;
  minutesEl.textContent = minutesLeft;
  secondsEl.textContent = secondsLeft;
}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();
