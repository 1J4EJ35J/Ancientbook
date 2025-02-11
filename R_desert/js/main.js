/************SHOW MENU ************/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");
      
/************MENU SHOW************/
/* Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener("click" , () =>{
        navMenu.classList.add("show-menu")
    })
}

/************MENU HIDDEN************/
/* Validate if constant exists*/
if(navClose){
    navClose.addEventListener("click" , () =>{
       navMenu.classList.remove("show-menu")
    })
}

/************REMOVE MENU MOBILE************/
const navLink = document.querySelectorAll(".nav__link");
function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))



/* 整個menu的另一種寫法 較難但是簡潔有力
const navMenu = document.querySelector(".nav__menu"),
navToggle = document.querySelector(".nav__toggle");

navToggle.addEventListener("click" , menuToggle);

function menuToggle(){
    navMenu.classList.toggle("show-menu");
}

document.addEventListener("click" , function(e){
    if(e.target.closest(".nav__link")){
        menuToggle();
    }
    if(e.target.closest(".nav__close")){
        menuToggle();
    }
});

*/

/************CHANGE BACKGROUND HEADER************/
//先寫一個叫做scrollHeader的功能 最後寫何時執行scrollHeader功能
function scrollHeader(){
    const header = document.getElementById("header");
    if(this.scrollY >= 60) {
        header.classList.add("scroll-header")
    }else{
        header.classList.remove("scroll-header")
    }
}
window.addEventListener("scroll", scrollHeader);

/*
//另一種不命名功能 直接執行的寫法 scrollY 和 pageYOffset 都可以
window.addEventListener("scroll", function(){
    if(this.pageYOffset >= 400){
        document.querySelector(".header").classList.add("scroll-header");
    }else{
        document.querySelector(".header").classList.remove("scroll-header");
    }
})
*/

/************SWIPER DISCOVER************/
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {       
      rotate: 0,      
    },    
  });

/************VIDEO************/
const videoFile = document.getElementById("video-file"),
      videoButton = document.getElementById("video__button"),
      videoIcon = document.getElementById("video-icon");

function playPause(){
    if(videoFile.paused){
        //Play video
        videoFile.play();
        //ri-pause-line 是RemixIcon裡的暫停鍵 <i class="ri-play-line">CLASS換掉
        videoIcon.classList.add("ri-pause-line");
        videoIcon.classList.remove("ri-play-line");
    }else{
        videoFile.pause();
        videoIcon.classList.remove("ri-pause-line");
        videoIcon.classList.add("ri-play-line");
    }
}
videoButton.addEventListener("click" , playPause);

function finalVideo(){
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
}
videoFile.addEventListener("ended" , finalVideo);


/************SHOW SCROLL UP************/
const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll" , scrollTop)
function scrollTop(){
    if(this.scrollY>= 200){
        scrollUp.classList.add("show-scroll")
    }else{
        scrollUp.classList.remove("show-scroll")
    }
}

/************ SCROLL SECTIONS ACTIVE LINK************/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/************ DARK LIGHT THEME ************/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/************ SCROLL REVEAL ANIMATION ************/
const sr = ScrollReveal({
    distance:"60px",
    duration:1200,
    reset:true, //若是不要true 效果就只會有一次
})

//相同方向的都可以寫在一起，只是這裡用網頁順序往下排

sr.reveal('.home__data, .home__social-link, .home__info ',{
    origin:'top',
    interval:100,
})

sr.reveal('.about__data',{
    origin:'left',
})

sr.reveal('.about__img-overlay',{
    origin:'right',
    interval:100,
})

sr.reveal('.discover__container',{
    origin:'top',
    interval:100,
})

sr.reveal('.experience__date, .experience__overlay',{
    origin:'top',
    interval:100,
})

sr.reveal('.video__description',{
    origin:'left',
})

sr.reveal('.video__content',{
    origin:'right',
    interval:100,
})

sr.reveal('.place__card',{
    origin:'top',
    interval:100,
})

sr.reveal('.subscribe__description',{
    origin:'left',
})

sr.reveal('.subscribe__form',{
    origin:'right',
    interval:100,
})

sr.reveal('.sponsor__content',{
    origin:'top',
    interval:100,
})

sr.reveal('.footer__data, footer__rights',{
    origin:'top',
    interval:100,
})