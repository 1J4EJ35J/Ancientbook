/******* SEARCH BAR*******/ 

let searchButton = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

searchButton.addEventListener('click' , () =>{
    searchButton.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    nav.classList.remove('active'); //點選搜索時 把NAV消失 避免畫面亂(下面寫完拉上來用)
    menu.classList.remove('fa-times');//點選搜索時 把X消失(下面寫完拉上來用)
});

window.onscroll = () => {
    //捲動時 searchbar 及 X 切換回去
    searchButton.classList.remove('fa-times');
    searchBar.classList.remove('active');

    loginForm.classList.remove('active');

    nav.classList.remove('active');
    menu.classList.remove('fa-times');
};

/* window.onscroll = () => 下面的第一行 
不用箭頭函式的寫法 你快學會看懂箭頭函式了加油!

window.addEventListener('scroll' ,function(){
searchBotton.classList.remove('fa-times');
searchBar.classList.remove('active');
})
*/

/******* NAV in media max-width 768px*******/ 
let nav = document.querySelector('.navbar');
let menu = document.querySelector('#menu-bar');

menu.addEventListener('click' , () =>{
    nav.classList.toggle('active');
    menu.classList.toggle('fa-times');
    searchButton.classList.remove('fa-times'); //點選NAV時 把X消失 避免按鈕錯誤
    searchBar.classList.remove('active');//點選NAV時 把登入消失 避免畫面亂
    
});




/******* LOGIN *******/ 
let formBotton = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

formBotton.addEventListener('click' , function(){
    loginForm.classList.add('active');
    searchButton.classList.remove('fa-times'); 
    searchBar.classList.remove('active');
    nav.classList.remove('active');
    menu.classList.remove('fa-times');
});

formClose.addEventListener('click' , function(){
    loginForm.classList.remove('active');
});






/******* VIDEO BTN*******/
let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

let src = btn.getAttribute('data-src');
document.querySelector('#video-slider').src = src;
    });
});















/*********Swipe 寫在HTML裡面 寫在這裡失效 原因不明*********/

  