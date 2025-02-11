/***********LOADiNG*************/

(() =>{
  const wait = (delay = 0) =>
new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
(typeof elementOrSelector === 'string'
  ? document.querySelector(elementOrSelector)
  : elementOrSelector
).style.display = visible ? 'block' : 'none';

setVisible('.main-page', false);
setVisible('#loading', true);

document.addEventListener('DOMContentLoaded', () =>
wait(1000).then(() => {
  setVisible('.main-page', true);
  setVisible('#loading', false);
}));


  })();

