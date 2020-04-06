const calculateTimeLeft = (finalDate = new Date()) => {
  const timeLeft = Math.floor(
    (finalDate.getTime() - new Date().getTime()) / 1000
  );

  let days = Math.floor(timeLeft / (60 * 60 * 24));
  let hours = Math.floor((timeLeft / (60 * 60)) % 24);
  let minutes = Math.floor((timeLeft / 60) % 60);
  let seconds = Math.floor(timeLeft % 60);
  if (timeLeft > 0) {
    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
  } else {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  return {days: days, hours: hours, minutes: minutes, seconds: seconds};
};

export default calculateTimeLeft;
