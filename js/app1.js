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

//menuBtn900.addEventListener('click', toggleNav900)
function toggleNav900(){
  nav900.classList.toggle('nav-active')
}
navClose900.addEventListener('click', function(){
  toggleNav900()
})

let navOption900 = document.querySelectorAll('.media-w900 .nav-option')
navOption900.forEach(function(optionButton900){
  optionButton900.addEventListener('click', function(){
    toggleNav900()
  })
})

//media min-width899
let menuBtn899 = document.querySelector('.media-w899 .menubutton');
let nav899 = document.querySelector('.media-w899 .nav');
let navClose899 = document.querySelector('.media-w899 .nav-closebtn');

menuBtn899.addEventListener('click', toggleNav899)
function toggleNav899(){
  nav899.classList.toggle('nav-active')
}
navClose899.addEventListener('click', function(){
  toggleNav899()
})

let navOption899 = document.querySelectorAll('.media-w899 .nav-option');
navOption899.forEach(function(optionButton899){
  optionButton899.addEventListener('click', function(){
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
let mountain = document.getElementById('mountain');
let cloudSky = document.getElementById('cloud-sky');
let seaBottom = document.getElementById('sea-bottom01');
let cloudBottom = document.getElementById('cloud-bottom');


window.addEventListener('scroll', function(){
  let value = window.scrollY;

  if (value<=180) {
    seaTopback.style.top = `${value * -.4}px`
  } else {
    seaTopback.style.top = `${-120 + value * .4}px`
  }

  seaMid.style.top = `${value * -.2}px`;
  title767.style.top = `${value * .6}px`;
  title766.style.top = `${value * .6}px`;
  mountain.style.top =`${value * .4}px`;
  
  
  if(window.matchMedia('(min-width:1366px)').matches){
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

  
  if(value>250){
    title767.classList.add('opacity0-active');
    title766.classList.add('opacity0-active');

  }else{
    title767.classList.remove('opacity0-active');
    title766.classList.remove('opacity0-active');
  }

  cloudFront.style.left = `${value * .6}px`
  cloudBack.style.left = `${value * .3}px`
  moon.style.right= `${-176 + value * 2}px`;
  moon.style.top= `${160 + value * .5}px`;
  
  if (value>=100) {
    moon.style.transform = `scale(${100 + value * .35}%)`;
  }else if (value>=1600){
    moon.style.transform = `scale(${0}%)`;
  }
  if (value<100) {
    moon.style.transform = `scale(${100}%)`;
  }
})


/***********SKILL*************/
let imgBtn = document.querySelectorAll('.img-btn');
let textIntro = document.querySelector('.text-intro');
let closeBtn = document.querySelector('.close-btn');
let emptyEl = document.querySelector('.empty-element');

imgBtn.forEach(function (button) {
  button.addEventListener('click', function () {
    textIntro.classList.remove('intro-active');
    document.querySelector('.content .pointer-active').classList.remove('pointer-active');
    document.querySelector('.content .text-active').classList.remove('text-active');
    document.querySelector('.content .shadow-active').classList.remove('shadow-active');
    document.querySelector('.content .opacity0-active').classList.remove('opacity0-active');
    document.querySelector('.content .opacity1-active').classList.remove('opacity1-active');
    button.closest('div').classList.add('pointer-active');
    button.parentNode.children[0].classList.add('text-active');
    //button.parentNode.children[1].classList.add('opacity0-active');
    //button.parentNode.children[3].classList.add('shadow-active');
    closeBtn.classList.add('opacity1-active');
  })
})

closeBtn.addEventListener('click', close)
function close() {
  closeBtn.classList.remove('opacity1-active');
  textIntro.classList.add('intro-active');

  document.querySelector('.content .pointer-active').classList.remove('pointer-active');
  document.querySelector('.content .text-active').classList.remove('text-active');
  document.querySelector('.content .shadow-active').classList.remove('shadow-active');
  document.querySelector('.content .opacity0-active').classList.remove('opacity0-active');
}

closeBtn.addEventListener('click', emptyAddClass)
function emptyAddClass() {
  emptyEl.classList.add('pointer-active');
  emptyEl.classList.add('text-active');
  emptyEl.classList.add('shadow-active');
  emptyEl.classList.add('opacity0-active');
  emptyEl.classList.add('opacity1-active');
}

//Magic-circle img exchange
let margicSrc01 = document.querySelector('.magic_circle01').getAttribute('data-src');
let margicSrc02 = document.querySelector('.magic_circle02').getAttribute('data-src');
let centerSrc01 = document.querySelector('.center01').getAttribute('data-src');
let centerSrc02 = document.querySelector('.center02').getAttribute('data-src');
let psSrc = document.querySelector('.photoshop').getAttribute('data-src');
let adobeSrc = document.querySelector('.adobe').getAttribute('data-src');



let media767 = window.matchMedia('(max-width:767px)');
let psText = document.querySelector('.ps-text')
//imgExchange(media767)
//media767.addListener(imgExchange)

media767.addEventListener('change', imgExchange)

function imgExchange(){  
  if(media767.matches){
    
    document.querySelector('.magic-circle').src = margicSrc02;
    document.querySelector('.center').src = centerSrc02;
    document.querySelector('.ps-boximg').src = adobeSrc;
    psText.innerHTML = "使用Adobe系列軟體處理圖像、影片後製、平面設計或繪製畫稿。";
  } else {
    document.querySelector('.magic-circle').src = margicSrc01;
    document.querySelector('.center').src = centerSrc01;
    document.querySelector('.ps-boximg').src = psSrc;
    psText.innerHTML = "使用Photoshop繪製像素圖形、調整照片圖像、去背、合成，設計平面視覺。";
  }
}

imgExchange() //在未改變裝置寬度時 保持圖片顯示


