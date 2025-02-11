/***********LOADiNG*************/

(() => {
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

/**--------------- portfolio 
 * skm = ui
 * ------------------**/
(() => {


  let uiItem = document.querySelectorAll(".ui-item .shadow-box01")

  const footerMargin = document.querySelector(".cb-footer-content")
  skmLineL = document.querySelector(".skm-line.-left")
  skmLineR = document.querySelector(".skm-line.-right")
  skmLineBox = document.querySelector(".skm-line-box")
  skmArrowdown01 = document.querySelector(".skm-arrowdown i:nth-child(1)")
  skmArrowdown02 = document.querySelector(".skm-arrowdown i:nth-child(2)")
  uiPortfolio = document.querySelector(".ui-portfolio")
  skmFilterImg = document.querySelector(".ui-item img");

  function lineBoxActive() {
    //footerMargin.classList.toggle("active");
    skmLineL.classList.toggle("active");
    skmLineR.classList.toggle("active");
    skmLineBox.classList.toggle("active");
    skmArrowdown01.classList.toggle("active");
    skmArrowdown02.classList.toggle("active");
    uiPortfolio.classList.toggle("active");
  }

  uiItem.forEach((itemImgLight) => {
    itemImgLight.addEventListener("click", (e) => {

      let item = e.target.getAttribute("data-title")
      //console.log(item)
      box = document.querySelectorAll(".ui-portfolio .box");



      const closeBtn900 = document.querySelector(".media-w900 header a.menu")
      closeBtn899 = document.querySelector(".media-w899 header a.menu");


      box.forEach((boxActive) => {
        function iconChange(){
          if (closeBtn900.querySelector("i").classList.contains("ri-close-fill")) {
            document.querySelector(".media-w900 header a.menu").style.fontSize = "2rem";
            document.querySelector(".media-w899 header a.menu").style.fontSize = "1.5rem";
          }if(closeBtn900.querySelector("i").classList.contains("ri-download-line")){
            document.querySelector(".media-w900 header a.menu").style.fontSize = "var(--title-font-size)";
            document.querySelector(".media-w899 header a.menu").style.fontSize = "1.2rem";
          }
        }
        function closeAllBtn() {

          if (skmLineBox.classList.contains("active")) {
            lineBoxActive();
          }
          boxActive.style.transitionDelay = ".0s";
          skmLineBox.style.transitionDuration = "0s";
          e.target.parentNode.classList.remove("active");
          e.target.parentNode.children[1].classList.remove("active");
          e.target.parentNode.children[2].classList.remove("active");
          e.target.classList.remove("active");
          boxActive.classList.remove("active");
          //document.querySelector(".ui-item.active").classList.remove("active");
          //document.querySelector(".shadow-box01.active").classList.remove("active");
          //document.querySelector(".shadow-box02.active").classList.remove("active");
          //document.querySelector(".img.active").classList.remove("active");
          closeBtn900.querySelector("i").classList.add("ri-download-line");
          closeBtn900.querySelector("i").classList.remove("ri-close-fill");
          closeBtn899.querySelector("i").classList.add("ri-download-line");
          closeBtn899.querySelector("i").classList.remove("ri-close-fill");
        }
        closeBtn900.addEventListener("click", () => {
          closeAllBtn()
          iconChange()
        })
        closeBtn899.addEventListener("click", () => {
          closeAllBtn()
          iconChange()
        })
        
        if (boxActive.getAttribute("data-title") === item && !skmLineBox.classList.contains("active")) {

          lineBoxActive();
          boxActive.style.transitionDelay = "1.8s";
          skmLineBox.style.transitionDuration = ".8s";

          var scrollToBox = document.getElementById("srcoll-to-skmbox").offsetTop;
          window.scrollTo({ top: scrollToBox, behavior: 'smooth' });

          //console.log(e.target)
          //console.log(e.target.parentNode)
          //console.log(e.target.parentNode.children[1])
          //console.log(e.target.parentNode.children[2])
          e.target.parentNode.classList.add("active");
          e.target.parentNode.children[1].classList.add("active");
          e.target.parentNode.children[2].classList.add("active");
          e.target.classList.add("active");
          boxActive.classList.add("active");

          closeBtn900.querySelector("i").classList.remove("ri-download-line");
          closeBtn900.querySelector("i").classList.add("ri-close-fill");
          closeBtn899.querySelector("i").classList.remove("ri-download-line");
          closeBtn899.querySelector("i").classList.add("ri-close-fill");
          iconChange()
          
        }else if (boxActive.getAttribute("data-title") === item && skmLineBox.classList.contains("active")){

          var scrollToBox = document.getElementById("srcoll-to-skmbox").offsetTop;
          window.scrollTo({ top: scrollToBox, behavior: 'smooth' });
          document.querySelector(".ui-item.active").classList.remove("active");
          document.querySelector(".shadow-box01.active").classList.remove("active");
          document.querySelector(".shadow-box02.active").classList.remove("active");
          document.querySelector(".img.active").classList.remove("active");

          e.target.parentNode.classList.add("active");
          e.target.parentNode.children[1].classList.add("active");
          e.target.parentNode.children[2].classList.add("active");
          e.target.classList.add("active");
          boxActive.style.transitionDelay = ".5s";
          document.querySelector(".box.active").style.transitionDelay = "0s";
          document.querySelector(".box.active").classList.remove("active");
          boxActive.classList.add("active");

          closeBtn900.querySelector("i").classList.remove("ri-download-line");
          closeBtn900.querySelector("i").classList.add("ri-close-fill");
          closeBtn899.querySelector("i").classList.remove("ri-download-line");
          closeBtn899.querySelector("i").classList.add("ri-close-fill");
          iconChange()
        }
        
      })
    })
  })
})();

