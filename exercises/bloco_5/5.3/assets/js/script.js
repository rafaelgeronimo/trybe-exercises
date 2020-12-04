function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const days = document.querySelector('#days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
for (let index = 0; index < dezDaysList.length; index += 1) {
  const newDay = document.createElement('li');
  newDay.setAttribute('class', 'day');
  let holidays = [24, 25, 31];
  for (holiday in holidays) {
    if (holidays[holiday] === dezDaysList[index]) {
      newDay.classList.add('holiday');
    }
  }
  let fridays = [4, 11, 18, 25];
  for (friday in fridays) {
    if (fridays[friday] === dezDaysList[index]) {
      newDay.classList.add('friday');
    }
  }
  newDay.innerText = dezDaysList[index];
  days.appendChild(newDay);
}

function showHolidays(feriados) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let createButtonHolidays = document.createElement('button');
  createButtonHolidays.setAttribute('id', 'btn-holiday');
  createButtonHolidays.innerText = feriados;
  buttonsContainer.appendChild(createButtonHolidays);
}

showHolidays('Feriados');