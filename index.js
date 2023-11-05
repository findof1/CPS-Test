
let clicks = 0;
let seconds = 5;
let clickArea = document.querySelector('.js-click');
let clickOn = document.querySelector('.js-start');
let clickDisplay = document.querySelector('.js-clicks-number');
let cpsDisplay = document.querySelector('.js-cps');
cpsDisplay.innerHTML = 'Cps: ';
clickOn.innerHTML = 'Ready';
clickDisplay.innerHTML = `Clicks: ${clicks}`;
clickArea.addEventListener('click', BeginClick);


function BeginClick() {

    if (clickOn.innerHTML === 'Ready') {
    clicks = 0;

    clickOn.innerHTML = 'GO!';
    setTimeout(wait, seconds * 1000);
  }
  if (clickOn.innerHTML === 'GO!') {
  clicks++;
  clickDisplay.innerHTML = `Clicks: ${clicks}`;
  }
}

function wait() {

  clickOn.innerHTML = 'Waiting';
  clickDisplay.innerHTML = `Clicks: ${clicks}`;
  cpsDisplay.innerHTML = `CPS: ${(clicks / seconds).toFixed(2)}`;
  setTimeout(() => {

    clickOn.innerHTML = 'Ready';
  } , 3000)
}