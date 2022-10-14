const orderDay = document.querySelectorAll('.date__part--day');
const orderMonth = document.querySelectorAll('.date__part--month');
const orderYear = document.querySelectorAll('.date__part--year');

const initDate = () => {
  const date = new Date();
  const dayNumber = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  orderDay.forEach((el) => (el.innerHTML = dayNumber));
  orderMonth.forEach((el) => (el.innerHTML = month));
  orderYear.forEach((el) => (el.innerHTML = year));
};

export {initDate};
