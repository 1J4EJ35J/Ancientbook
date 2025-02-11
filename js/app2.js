/***********LOADiNG*************/
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

/***********HEADER*************/
//media min-width900
let menuBtn900 = document.querySelector('.media-w900 .menubutton');
let nav900 = document.querySelector('.media-w900 .nav');
let navClose900 = document.querySelector('.media-w900 .nav-closebtn');

menuBtn900.addEventListener('click', toggleNav900)
function toggleNav900() {
  nav900.classList.toggle('nav-active')
}
navClose900.addEventListener('click', function () {
  toggleNav900()
})

let navOption900 = document.querySelectorAll('.media-w900 .nav-option')
navOption900.forEach(function (optionButton900) {
  optionButton900.addEventListener('click', function () {
    toggleNav900()
  })
})

//media max-width899
let menuBtn899 = document.querySelector('.media-w899 .menubutton');
let nav899 = document.querySelector('.media-w899 .nav');
let navClose899 = document.querySelector('.media-w899 .nav-closebtn');

menuBtn899.addEventListener('click', toggleNav899)
function toggleNav899() {
  nav899.classList.toggle('nav-active')
}
navClose899.addEventListener('click', function () {
  toggleNav899()
})

let navOption899 = document.querySelectorAll('.media-w899 .nav-option');
navOption899.forEach(function (optionButton899) {
  optionButton899.addEventListener('click', function () {
    toggleNav899()
  })
})

/***********HOME*************/
let seaTopback = document.getElementById('sea-topback');
let title767 = document.getElementById('title767');
let title766 = document.getElementById('title766');
let moon = document.getElementById('moon');
let cloudBack = document.getElementById('cloud-back');
let cloudFront = document.getElementById('cloud-front');
let seaMid = document.getElementById('sea-mid');
//let mountain = document.getElementById('mountain');
//let mountainL = document.getElementById('mountain-left');
//let mountainR = document.getElementById('mountain-right');
let cloudSky = document.getElementById('cloud-sky');
let seaBottom = document.getElementById('sea-bottom01');
let cloudBottom = document.getElementById('cloud-bottom');
let star01 = document.getElementById('star01');
let star02 = document.getElementById('star02');

let mediaW768 = window.matchMedia('(max-width:768px)')
    madiaW979 = window.matchMedia('(max-width:979px)')
    mediaH1240 = window.matchMedia('(min-height:1240px)');
mediaW768.addEventListener('change', titleChange)

function titleChange(){
  if(mediaW768.matches){
    title767.style.display = `none`;
    title766.style.display = `block`;
  }
  else{
    title767.style.display = `block`;
    title766.style.display = `none`;
  }
};
titleChange();
  

window.addEventListener('scroll', function () {
  let value = window.scrollY;

  /*if (value<=180) {
    seaTopback.style.top = `${value * -.4}px`
  } else {
    seaTopback.style.top = `${-120 + value * .4}px`
  }*/
  seaTopback.style.top = `${48 + value * .4}px`;
  if (value > 40) {
    seaTopback.style.transform = `scale(${.9})`;
    seaTopback.style.transition = `${2}s`;
    seaTopback.style.opacity = `${value / value * 300 / value}`;
  }if (value <= 40) {
    seaTopback.style.transform = `scale(${1})`;
    seaTopback.style.opacity = `${.6}`;
  }
  seaMid.style.top = `${48 + value * .2}px`;
  if (value > 90) {
    seaMid.style.transform = `scale(${.75})`;
    seaMid.style.transition = `${2}s`;
    seaMid.style.opacity = `${value / value * 400 / value}`;
  }if (value <= 90) {
    seaMid.style.transform = `scale(${1})`;
    seaMid.style.opacity = `${.88}`;
  };
////////////////////
  let mediaW1048 = window.matchMedia("(max-width: 1048px)");
  mediaW1048.addEventListener('change', title767Top)

  function title767Top(){
    if(mediaW1048.matches){
      title767.style.transform = `scale(${.9})`;
      if (value > 120){
        title767.style.top = `${value * .6}px`;
        title767.style.transform = `scale(${.9 / value * .47})`;
        title767.style.opacity = `${ value / value * 100/value}`;
        title767.style.transition = `${.8}s`
      } if (value > 600){
        title767.style.opacity = `${0}`;
      } if (value <= 120){
        title767.style.top = `${0}px`;
        title767.style.opacity = `${1}`;
        title767.style.transform = `scale(${.9})`;
        title767.style.transition = `${.9}s`
      }
    } else{
      title767.style.transform = `scale(${1})`;
      if (value > 120){
        title767.style.top = `${value * .6}px`;
        title767.style.transform = `scale(${value / value * .47})`;
        title767.style.opacity = `${ value / value * 100/value}`;
        title767.style.transition = `${.8}s`
      } if (value > 600){
        title767.style.opacity = `${0}`;
      } if (value <= 120){
        title767.style.top = `${0}px`;
        title767.style.opacity = `${1}`;
        title767.style.transform = `scale(${1})`;
        title767.style.transition = `${.8}s`
      }
    }
  }
  title767Top()
///////////////
  let mediaH800 = window.matchMedia("(max-height: 800px)");
  mediaH800.addEventListener('change', title766Top)
  function title766Top() {
    if (mediaH800.matches) {
      title766.style.top = `${160}px`
      if (value >= 40) {
        title766.style.top = `${160 + value * .6}px`;
        title766.style.opacity = `${1 * 60 / value}`;
        title766.style.transition = `${.6}s`;
      }if (value < 40) {
        title766.style.top = `${160}px`;
        title766.style.opacity = `${1}`;
      }if (value > 1400) {
        title766.style.top = `${0}px`;
        //title766.style.opacity = `${0}`;
        title766.style.transition = `${0}s`;
      }
    } else {
      title766.style.top = `${240}px`
      if (value >= 40) {
        title766.style.top = `${240 + value * .6}px`;
        title766.style.opacity = `${1 * 60 / value}`;
        title766.style.transition = `${.6}s`;
      }if (value < 40) {
        title766.style.top = `${240}px`;
        title766.style.opacity = `${1}`;
      }if (value > 1400) {
        title766.style.top = `${0}px`;
        //title766.style.opacity = `${0}`;
        title766.style.transition = `${0}s`;
      }
    }
  }
  title766Top()


  if (value >= 40) {
    seaBottom.style.top = `${value * -.13}px`;
    seaBottom.style.opacity = `${1}`;
    seaBottom.style.transition = `${.4}s`;
    cloudBottom.style.top = `${-320 + value * -.2}px`;
    cloudBottom.style.opacity = `${.86}`;
    cloudBottom.style.transition = `${.3}s`;
    star01.style.top = `${-240 + value * -.3}px`;
    star01.style.opacity = `${1}`;
    star01.style.transition = `${1.4}s`;
    star01.style.transform = `scale(${1 + value * .0003})`;
    star02.style.opacity = `${0 + value * .002}`;
    star02.style.transition = `${3.5}s`;
  }if (value < 40) {
    seaBottom.style.top = `${0}px`;
    cloudBottom.style.top = `${-20}rem`;
    star01.style.top = `${-15}rem`;
    star01.style.transform = `scale(${1})`;
  }if (value < 700) {
    star02.style.opacity = `${0}`;
  }if (value > 400) {
    star01.style.opacity = `${.9 * 150 / value}`;

  }if (value > 1600) {
    seaBottom.style.top = `${0}px`;
    seaBottom.style.opacity = `${0}`;
    seaBottom.style.transition = `${0}s`;
    cloudBottom.style.top = `${-20}rem`;
    cloudBottom.style.opacity = `${0}`;
    cloudBottom.style.transition = `${0}s`;
    star01.style.top = `${-15}rem`;
    star01.style.opacity = `${0}`;
    star01.style.transition = `${0}s`;
    star01.style.transform = `scale(${1})`;
    star02.style.opacity = `${1}`;
  }

  /*if(window.matchMedia('(min-width:1366px)').matches){
    seaBottom.style.top =`${value * -.06}px`;
    cloudBottom.style.top = `${value * -.08}px`;
  }
  else if(window.matchMedia('(max-width:767px)').matches){
      cloudBottom.style.top = `${-70 + value * -.15}px`;
    }
  else{
    seaBottom.style.top =`${value * -.12}px`;
      cloudBottom.style.top = `${value * -.16}px`;
    }
*/

  let mediaH1024 = this.window.matchMedia('(min-height:1024px)');
  mediaH1024.addEventListener('change', minHieght1024)

  function minHieght1024() {
    if (mediaH1024.matches) {
      moon.style.top = `${128 + value * .88}px`
      moon.style.right = `${-16 + value * 1.3}px`
      if (value >= 100) {
        cloudSky.style.left = `${value * -.7}px`;
        cloudSky.style.opacity = `${value / value * 1 / value}`;
        cloudSky.style.transition = `${1.6}s`;
        cloudBack.style.right = `${value * -.3}px`;
        cloudBack.style.transition = `${1}s`;
        cloudBack.style.opacity = `${value / value * 100 / value}`;
        cloudFront.style.right = `${-80 - value * .6}px`;
        cloudFront.style.transition = `${2}s`;
        cloudFront.style.opacity = `${value / value * 10 / value}`;
        moon.style.transform = `scale(${100 + value * .35}%)`;
      } if (value >= 1600) {
        moon.style.transform = `scale(${0}%)`;
      } if (value < 100) {
        moon.style.transform = `scale(${1})`;
      } if (value < 30) {
        cloudSky.style.left = `${0}px`;
        cloudSky.style.opacity = `${.9}`;
        cloudBack.style.top = `${7}rem`;
        cloudBack.style.right = `${0}rem`;
        cloudBack.style.opacity = `${1}`;
        cloudFront.style.top = `${10}rem`;
        cloudFront.style.right = `${-5}rem`;
        cloudFront.style.opacity = `${1}`;
        moon.style.top = `${8}rem`;
        moon.style.right = `${-1}rem`;
      }

    } else {
      moon.style.top = `${25.6 + value * .88}px`
      moon.style.right = `${-16 + value * 1.3}px`
      if (value >= 100) {
        cloudSky.style.left = `${value * -.7}px`;
        cloudSky.style.opacity = `${value / value * 1 / value}`;
        cloudSky.style.transition = `${1.6}s`;
        cloudBack.style.right = `${value * -.3}px`;
        cloudBack.style.transition = `${1}s`;
        cloudBack.style.opacity = `${value / value * 100 / value}`;
        cloudFront.style.right = `${-128 - value * .6}px`;
        cloudFront.style.transition = `${2}s`;
        cloudFront.style.opacity = `${value / value * 10 / value}`;
        moon.style.transform = `scale(${100 + value * .35}%)`;
      } if (value >= 1600) {
        moon.style.transform = `scale(${0}%)`;
      } if (value < 100) {
        moon.style.transform = `scale(${1})`;
      } if (value < 30) {
        cloudSky.style.left = `${0}px`;
        cloudSky.style.opacity = `${.9}`;
        cloudBack.style.top = `${1}rem`;
        cloudBack.style.right = `${0}rem`;
        cloudBack.style.opacity = `${1}`;
        cloudFront.style.top = `${1}rem`;
        cloudFront.style.right = `${-8}rem`;
        cloudFront.style.opacity = `${1}`;
        moon.style.top = `${1.6}rem`;
        moon.style.right = `${-1}rem`;
      }
    }
  }
  minHieght1024()
})


/***********GALLERY*************/
//in HTML

/***********SKILL*************/
let imgBtn = document.querySelectorAll('.img-btn');
let textIntro = document.querySelector('.text-intro');
let closeBtn = document.querySelector('.close-btn');
let emptyEl = document.querySelector('.empty-element');

imgBtn.forEach(function (button) {
  button.addEventListener('click', function () {
    textIntro.classList.remove('intro-active');
    document.querySelector('.content .pointer-active').classList.remove('pointer-active');
    document.querySelector('.content .img-active').classList.remove('img-active');
    document.querySelector('.content .text-active').classList.remove('text-active');
    document.querySelector('.content .shadow-active').classList.remove('shadow-active');
    document.querySelector('.content .opacity0-active').classList.remove('opacity0-active');
    document.querySelector('.content .opacity1-active').classList.remove('opacity1-active');

    button.closest('div').classList.add('pointer-active');
    button.classList.add('img-active');
    button.parentNode.children[0].classList.add('text-active');
    button.parentNode.children[1].classList.add('opacity0-active');
    button.parentNode.children[3].classList.add('shadow-active');
    closeBtn.classList.add('opacity1-active');
  })
})

closeBtn.addEventListener('click', close)
function close() {
  closeBtn.classList.remove('opacity1-active');
  textIntro.classList.add('intro-active');

  document.querySelector('.content .pointer-active').classList.remove('pointer-active');
  document.querySelector('.content .img-active').classList.remove('img-active');
  document.querySelector('.content .text-active').classList.remove('text-active');
  document.querySelector('.content .shadow-active').classList.remove('shadow-active');
  document.querySelector('.content .opacity0-active').classList.remove('opacity0-active');
}

closeBtn.addEventListener('click', emptyAddClass)
function emptyAddClass() {
  emptyEl.classList.add('pointer-active');
  emptyEl.classList.add('img-active');
  emptyEl.classList.add('text-active');
  emptyEl.classList.add('shadow-active');
  emptyEl.classList.add('opacity0-active');
  emptyEl.classList.add('opacity1-active');
}

//IIFE Immediately Invoked Function Expression
//(function(){})()
//Magic-circle img exchange
(() => {
  let margicSrc01 = document.querySelector('.magic_circle01').getAttribute('data-src');
  let margicSrc02 = document.querySelector('.magic_circle02').getAttribute('data-src');
  let centerSrc01 = document.querySelector('.center01').getAttribute('data-src');
  let centerSrc02 = document.querySelector('.center02').getAttribute('data-src');
  let psSrc = document.querySelector('.photoshop').getAttribute('data-src');
  let adobeSrc = document.querySelector('.adobe').getAttribute('data-src');
  let media767 = window.matchMedia('(max-width:767px)');
  let psText = document.querySelector('.ps-text');
  //imgExchange(media767)
  //media767.addListener(imgExchange)

  media767.addEventListener('change', imgExchange);

  function imgExchange() {
    if (media767.matches) {
      document.querySelector('.magic-circle').src = margicSrc02;
      document.querySelector('.center').src = centerSrc02;
      document.querySelector('.ps-boximg').src = adobeSrc;
      psText.innerHTML = "使用Adobe系列軟體處理圖像、影片後製、平面設計或繪製畫稿。";
    } else {
      document.querySelector('.magic-circle').src = margicSrc01;
      document.querySelector('.center').src = centerSrc01;
      document.querySelector('.ps-boximg').src = psSrc;
      psText.innerHTML = "使用Photoshop繪製圖形、調整照片圖像或去背、合成，設計平面視覺。";
    }
  };

  imgExchange() //在未改變裝置寬度時 保持圖片顯示

})()


let body = document.body;
  //console.log(body);
  
  body.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
  });
  
  window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };;

