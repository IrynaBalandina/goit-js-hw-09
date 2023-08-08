function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const buttonStartEl = document.querySelector('button[data-start]');
  const buttonStopEl = document.querySelector('button[data-stop]');
  buttonStartEl.addEventListener(`click`, onStartClick);
  buttonStopEl.addEventListener(`click`, onStopClick);
  buttonStopEl.disabled = true;
  let interval = null;

  function onStartClick(event){
    buttonStartEl.disabled = true;
    buttonStopEl.disabled = false;
    interval = setInterval(() =>{
        document.body.style.backgroundColor = getRandomHexColor();
    },
    1000);
  }

  function onStopClick(event){
    buttonStopEl.disabled = true;
    buttonStartEl.disabled = false;
    clearInterval(interval);
  }
