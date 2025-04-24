customElements.define('nav-top', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="media-w900">
                <header>
                    <div class="absolute header-background"></div>
                    <div class="container">
                        <div class="zone">
                            <div class="logo pointer">
                                <a href="#home" target="_self">
                                    <div class="svg-box eye">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.6722" cy="11.6722" r="11.4222" stroke="url(#paint0_linear_3415_3494)" stroke-width="0.5"/>
                                            <path d="M19.9133 11.6721C19.9133 16.1286 16.3281 19.7405 11.9065 19.7405C7.48484 19.7405 3.89965 16.1286 3.89965 11.6721C3.89965 7.21568 7.48484 3.60375 11.9065 3.60375C16.3281 3.60375 19.9133 7.21568 19.9133 11.6721Z" fill="url(#paint1_radial_3415_3494)" stroke="url(#paint2_radial_3415_3494)" stroke-width="0.115703"/>
                                            <path d="M17.8096 12.0254C17.8096 14.3355 15.9513 16.2074 13.6598 16.2074C11.3683 16.2074 9.51 14.3355 9.51 12.0254C9.51 9.71539 11.3683 7.8435 13.6598 7.8435C15.9513 7.8435 17.8096 9.71539 17.8096 12.0254Z" fill="url(#paint3_linear_3415_3494)" stroke="url(#paint4_radial_3415_3494)" stroke-width="0.115703"/>
                                            <g filter="url(#filter0_f_3415_3494)">
                                            <ellipse cx="10.8547" cy="14.1454" rx="1.40255" ry="1.41326" fill="url(#paint5_radial_3415_3494)"/>
                                            </g>
                                            <defs>
                                            <filter id="filter0_f_3415_3494" x="9.33645" y="12.6165" width="3.03609" height="3.05782" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="0.0578516" result="effect1_foregroundBlur_3415_3494"/>
                                            </filter>
                                            <linearGradient id="paint0_linear_3415_3494" x1="15.8585" y1="-1.72806e-08" x2="15.3036" y2="22.1217" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#DECE98"/>
                                            <stop offset="0.215625" stop-color="#D3BA65"/>
                                            <stop offset="0.913541" stop-color="#9D894D"/>
                                            </linearGradient>
                                            <radialGradient id="paint1_radial_3415_3494" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.4971 14.0642) rotate(-48.1309) scale(18.2255 45.2881)">
                                            <stop offset="0.139365"/>
                                            <stop offset="0.50953" stop-color="#413B47"/>
                                            <stop offset="0.753125" stop-color="#625664"/>
                                            <stop offset="1" stop-color="#968387"/>
                                            </radialGradient>
                                            <radialGradient id="paint2_radial_3415_3494" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.4971 14.0642) rotate(-48.1309) scale(18.2255 45.2881)">
                                            <stop offset="0.139365"/>
                                            <stop offset="0.50953" stop-color="#413B47"/>
                                            <stop offset="0.753125" stop-color="#625664"/>
                                            <stop offset="1" stop-color="#968387"/>
                                            </radialGradient>
                                            <linearGradient id="paint3_linear_3415_3494" x1="15.1689" y1="7.78564" x2="14.9658" y2="15.821" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#DECE98"/>
                                            <stop offset="0.215625" stop-color="#D3BA65"/>
                                            <stop offset="0.913541" stop-color="#9D894D"/>
                                            </linearGradient>
                                            <radialGradient id="paint4_radial_3415_3494" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.9245 13.2735) rotate(-48.1309) scale(9.50897 23.6286)">
                                            <stop offset="0.139365"/>
                                            <stop offset="0.50953" stop-color="#413B47"/>
                                            <stop offset="0.753125" stop-color="#625664"/>
                                            <stop offset="1" stop-color="#968387"/>
                                            </radialGradient>
                                            <radialGradient id="paint5_radial_3415_3494" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.8547 14.1454) rotate(90) scale(1.62558 1.61327)">
                                            <stop stop-color="#A8B3B3"/>
                                            <stop offset="0.387755" stop-color="#C9CACA"/>
                                            <stop offset="0.675" stop-color="#E3E1DD"/>
                                            <stop offset="1" stop-color="#FFFBF2"/>
                                            </radialGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <i class="ri-menu-line pointer menu menubutton"></i>
                        </div>
                    </div>
                </header>
                <nav class="nav nav-active">
                    <i class="ri-close-line nav-closebtn absolute pointer"></i>
                    <div class="nav-grid-box">
                        <a href="#contactme" target="_self" class="contactme-link nav-option link-box">
                            <div class="contactme-box container">
                                <div class="contactme-shadow shadow-box"></div>
                                <div class="contactme-content content-box">
                                    <h4 class="vertical-rl contactme-chapter">卷五</h4>
                                    <h4 class="vertical-rl contactme-square">◆</h4>
                                    <h4 class="vertical-rl contactme-title">與我聯繫</h4>
                                </div>
                                <img src="./img/header/contact-1.jpg" alt="" class="contactme-img">
                            </div>
                        </a>
                        <a href="#skill" target="_self" class="skill-link nav-option link-box">
                            <div class="skill-box container">
                                <div class="skill-shadow shadow-box"></div>
                                <div class="skill-content content-box">
                                    <h4 class="vertical-rl skill-chapter">卷四</h4>
                                    <h4 class="vertical-rl skill-square">◆</h4>
                                    <h4 class="vertical-rl skill-title">技　　能</h4>
                                </div>
                                <img src="./img/header/skill-1.jpg" alt="" class="skill-img">
                            </div>
                        </a>
                        <a href="#gallery" target="_self" class="gallery-link nav-option link-box">
                            <div class="gallery-box container">
                                <div class="gallery-shadow shadow-box"></div>
                                <div class="gallery-content content-box">
                                    <h4 class="vertical-rl gallery-chapter">卷三</h4>
                                    <h4 class="vertical-rl gallery-square">◆</h4>
                                    <h4 class="vertical-rl gallery-title">作　　品</h4>
                                </div>
                                <img src="./img/header/gallery-1.jpg" alt="" class="gallery-img">
                            </div>
                        </a>
                        <a href="#aboutme" target="_self" class="aboutme-link nav-option link-box">
                            <div class="aboutme-box container">
                                <div class="aboutme-shadow shadow-box"></div>
                                <div class="aboutme-content content-box">
                                    <h4 class="vertical-rl aboutme-chapter">卷二</h4>
                                    <h4 class="vertical-rl aboutme-square">◆</h4>
                                    <h4 class="vertical-rl aboutme-title">關於我</h4>
                                </div>
                                <img src="./img/header/aboutme-1.jpg" alt="" class="aboutme-img">
                            </div>
                        </a>
                        <a href="#home" target="_self" class="home-link nav-option link-box">
                            <div class="home-box container">
                                <div class="home-shadow shadow-box"></div>
                                <div class="home-content content-box">
                                    <h4 class="vertical-rl home-chapter">卷一</h4>
                                    <h4 class="vertical-rl home-square">◆</h4>
                                    <h4 class="vertical-rl home-title">開　　卷</h4>
                                </div>
                                <img src="./img/header/home-1.jpg" alt="" class="home-img">
                            </div>
                        </a>
                    </div>
                </nav>
            </section>
            <section class="media-w899">
                <header>
                    <div class="container">
                        <div class="zone">
                            <div class="logo">
                                <a href="#home" target="_self">
                                    <img src="./img/base/logo60px.svg" alt="">
                                </a>
                            </div>
                            <i class="ri-menu-line pointer menu menubutton"></i>

                            <!-- <a href="">
                            <i class="ri-function-fill pointer">
                            </i>
                            <p href="#" class="absolute">104/Resume</p>
                        </a> -->
                        </div>
                    </div>
                </header>
                <nav class="nav nav-active home">
                    <div class="nav-grid-box">
                        <i class="ri-close-line nav-closebtn absolute pointer"></i>
                        <a href="#home" target="_self" class="home-link nav-option">
                            <div class="home-box">
                                <div class="home-shadow"></div>
                                <div class="home-content">
                                    <h4 class="home-title">開　　卷</h4>
                                    <h4 class="home-square">◆</h4>
                                    <h4 class="home-chapter">卷一</h4>
                                </div>
                                <img src="./img/header/home-2.jpg" alt="" class="home-img">
                            </div>
                        </a>
                        <a href="#aboutme" target="_self" class="aboutme-link nav-option">
                            <div class="aboutme-box">
                                <div class="aboutme-shadow"></div>
                                <div class="aboutme-content">
                                    <h4 class="aboutme-title">關於我</h4>
                                    <h4 class="aboutme-square">◆</h4>
                                    <h4 class="aboutme-chapter">卷二</h4>
                                </div>
                                <img src="./img/header/aboutme-2.jpg" alt="" class="aboutme-img">
                            </div>
                        </a>
                        <a href="#gallery" target="_self" class="gallery-link nav-option">
                            <div class="gallery-box">
                                <div class="gallery-shadow"></div>
                                <div class="gallery-content">
                                    <h4 class="gallery-title">作　　品</h4>
                                    <h4 class="gallery-square">◆</h4>
                                    <h4 class="gallery-chapter">卷三</h4>
                                </div>
                                <img src="./img/header/gallery-2.jpg" alt="" class="gallery-img">
                            </div>
                        </a>
                        <a href="#skill" target="_self" class="skill-link nav-option">
                            <div class="skill-box">
                                <div class="skill-shadow"></div>
                                <div class="skill-content">
                                    <h4 class="skill-title">技　　能</h4>
                                    <h4 class="skill-square">◆</h4>
                                    <h4 class="skill-chapter">卷四</h4>
                                </div>
                                <img src="./img/header/skill-2.jpg" alt="" class="skill-img">
                            </div>
                        </a>
                        <a href="#contactme" target="_self" class="contactme-link nav-option">
                            <div class="contactme-box">
                                <div class="contactme-shadow"></div>
                                <div class="contactme-content">
                                    <h4 class="contactme-title">與我聯繫</h4>
                                    <h4 class="contactme-square">◆</h4>
                                    <h4 class="contactme-chapter">卷五</h4>
                                </div>
                                <img src="./img/header/contact-2.jpg" alt="" class="contactme-img">
                            </div>
                        </a>
                    </div>
                </nav>
            </section>
        `;
    }
});



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