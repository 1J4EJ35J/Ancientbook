/*-----------load------------*/
window.addEventListener("load",function(){
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector(".page-loader").style.display="none"
    },600)
    //animation on scroll
    AOS.init();
})




/*----------toggle nav--------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",toggleNav);

function toggleNav(){    
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}
//用JQ寫就是用toggleClass把open加進nav-toggler

/*----close nav clicking on a nav item----*/
document.addEventListener("click",function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();        
    }
});
//if(e 是 觸發事件的 是 最接近nav-item的元素)
/*也可以直接把.active .open刪掉
navToggler.classList.remove("active");
document.querySelector(".nav").classList.remove("open");*/


window.addEventListener("scroll",function(){
    //console.log(window.pageYOffset);
    if(this.scrollY > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
});

/*--------------menu tabs---------------*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".menu-tab-item.active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection=document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        //animation on scroll
        AOS.init();
    }
});
//data-target 被定義為#abcabc 