/*----------------timer--------------------*/

function timer() {
  const endDate = new Date();

  const randomNumber = Math.floor(Math.random() * 4) + 2;
  console.log(randomNumber); // Случайное число: 2, 3, 4 или 5

  endDate.setDate(endDate.getDate() + randomNumber); // + 3 дня

  const daysElement = document.querySelector("#days");
  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");

  let timerInterval;

  function updateTimer() {
    const now = new Date();

    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
      daysElement.innerText = "😢";
      hoursElement.innerText = "😢";
      minutesElement.innerText = "😢";
      secondsElement.innerText = "😢";
      clearInterval(timerInterval);
      return;
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      daysElement.innerText = days < 10 ? "0" + days : days;
      hoursElement.innerText = hours < 10 ? "0" + hours : hours;
      minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;
      secondsElement.innerText = seconds < 10 ? "0" + seconds : seconds;
    }
  }

  console.log("Start timer");

  updateTimer(); // запускаем счетчик при загрузке

  timerInterval = setInterval(updateTimer, 1000); // обновляем таймер каждую секунду
}

timer();

export default timer;
