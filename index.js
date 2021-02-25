const bodyRef = document.querySelector('body')
const startRef = document.querySelector('[data-action="start"]')
const stopRef = document.querySelector('[data-action="stop"]')

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

startRef.addEventListener('click', onStartClick)
stopRef.addEventListener('click', onStopClick)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; 

let intervalId = null;

function onStartClick() {
    intervalId = setInterval(generateBodyBackgroundColor, 1000)
    startRef.disabled = true
}

function onStopClick() {
    clearInterval(intervalId)
    startRef.disabled = false;
}

function generateBodyBackgroundColor() {
    bodyRef.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`
}



        







