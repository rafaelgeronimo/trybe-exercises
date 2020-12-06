window.onload = function() {
  createDaysOfTheWeek();
  createButton('btn-holiday', 'Feriados', 'showHolidays'); // Primeiro parâmetro: ID | Segundo parâmetro: Texto do botão | Terceiro parâmetro: action
  createButton('btn-friday', 'Sexta-feira'); // Primeiro parâmetro: ID | Segundo parâmetro: Texto do botão
}

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

function createButton(buttonId, buttonName, action) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let createButton = document.createElement('button');
  createButton.setAttribute('id', buttonId);
  createButton.innerText = buttonName;
  createButton.addEventListener('click', function() {
    activateAction(action);
  });
  buttonsContainer.appendChild(createButton);
}



let checkHolidays = true;
function activateAction(action) {
  if (action === 'showHolidays') {
    let holidays = document.querySelectorAll('.holiday');
    for (let index = 0; index < holidays.length; index += 1) {
      if (checkHolidays === true) {        
        holidays[index].setAttribute('style', 'background-color: white;');
      } else {
        holidays[index].setAttribute('style', 'background-color: rgb(238,238,238);');
      }
    }
    if (checkHolidays === true) {
      checkHolidays = false;
    } else {
      checkHolidays = true;
    }
  }
}