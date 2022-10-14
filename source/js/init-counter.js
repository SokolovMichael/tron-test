const countDown = document.querySelector('.countdown');
const countDownMinutes = document.querySelectorAll('.countdown__time--minutes');
const countDownSeconds = document.querySelectorAll('.countdown__time--seconds');

const getTimeRemaining = (endtime) => {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);

  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds,
  };
};

const initCounter = (id, endtime) => {
  const updateClock = () => {
    const t = getTimeRemaining(endtime);
    countDownMinutes.forEach((el) => (el.innerHTML = ('0' + t.minutes).slice(-2)));
    countDownSeconds.forEach((el) => (el.innerHTML = ('0' + t.seconds).slice(-2)));
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  };

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
};

const deadLine = new Date(Date.parse(new Date()) + (10 * 60 - 1) * 1000);

export {initCounter, countDown, deadLine};
