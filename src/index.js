const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body')
const   btnStart = document.querySelector('[data-action="start"]')
const  btnStop = document.querySelector('[data-action="stop"]')

btnStart.addEventListener('click', btnStartClick)
btnStop.addEventListener('click', btnStopClick)


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;
function btnStartClick  ()  {
    btnStart.disabled = true
 intervalId = setInterval(colorChoose,100)
}
function colorChoose() {
    let color = randomIntegerFromInterval(0, colors.length + 1)
    body.style.backgroundColor = colors[color]
}
function btnStopClick() {
     clearTimeout(intervalId);
    btnStart.disabled = false

   
  
}


