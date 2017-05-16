const secondsHand = document.querySelector('.sec');
const minutesHand = document.querySelector('.min');
const hoursHand = document.querySelector('.hour')

const setDate = () => {
  const now = new Date();

  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  let secondsDegree = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  let minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  let hoursDegree = ((hours / 12) * 360) + ((minutes / 60) * 30 ) + 90;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
