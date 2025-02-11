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



/***********background path*************/
/*
let path = document.querySelector('.path')
let pathLength = path.getTotalLength();

console.log(path);
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

const drawWhenScroll = () => {
  //console.log(calcScrollPercent());
  const drawPath = pathLength * calcScrollPercent();
  path.style.strokeDasharray =drawPath;
}

const calcScrollPercent = () => {
  let height = (document.documentElement.scrollHeight) - (document.documentElement.clientHeight);
  return document.documentElement.scrollTop / height;
}

window.addEventListener('scroll', drawWhenScroll)
*/
/*
let path = document.querySelector('.path')
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength + pathLength;

window.addEventListener('scroll', function(){

//0.5 使上面不消失?
var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)/ (document.documentElement.clientHeight);

var drawLength = pathLength * scrollPercentage / -16;
//var drawLength = pathLength * scrollPercentage / 1.5;
// 1.5使下面的線跑比較慢 不會超出先跑完

path.style.strokeDashoffset = pathLength + drawLength;

})
*/
