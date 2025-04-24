customElements.define('footer-zone', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <footer class="footer-zone">
            <section class="cb-footer-content">
                <div class="footer-container">
                    <div class="logo img-container">
                        <img src="./img/footer/logo_a_2.svg" class="img-control">
                    </div>
                    
                    <div class="footer-body">
                        <div class="left-side">
                            <div class="zone">
                                <div class="container">
                                    <h4 class="title">作品集</h4>
                                    <div class="list">
                                        <a class="item text" href="">醫美後台系統</a>
                                        <a class="item text" href="">弱勢公益平台</a>
                                        <a class="item text" href="">財物庫存系統</a>
                                    </div>
                                </div>
                                <div class="container">
                                    <h4 class="title">其他計畫</h4>
                                    <div class="list">
                                        <a class="item text" href="">電動車系統APP</a>
                                        <a class="item text" href="">訂購機票APP</a>
                                    </div>
                                </div>
                                <div class="container">
                                    <h4 class="title">與我聯繫</h4>
                                    <div class="list">
                                        <a class="item text" href="">信件傳遞</a>
                                        <a class="item text" href="">留言給我</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right-side">
                            <div class="zone allomyrina">
                                <div class="container">
                                    <!--<h4 class="title">羽衣悔換</h4>-->
                                    <div class="list">
                                        <a class="allomyrina-item" href="">
                                            <div class="shadow-box03"></div>
                                            <div class="allomyrina img-container">
                                                <img src="./img/footer/p_beetle.svg" clsss="img-control">
                                            </div>
                                        </a>
                                        <div class="item ">
                                            <h4 class="title">羽衣悔換</h4>
                                            <p class="text"> Neumorphic style 作品集，如對北經殘卷風格過敏，請由圖像連結進入參閱。 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="copyright">
                <span>&#169; 2022-2023 布榖豬/BOKU-PIG.&nbsp;&nbsp;<a class="more-info-btn">More info..</a></span>
            </div>
            <section class="copyright-moreinfo">
                <div class="moreinfo-box">
                    <div class="title-box">
                        <h4>版權聲明</h4>
                        <button class="moreinfo-closebtn pointer">
                            <i class="ri-close-line icon-control"></i>
                        </button>
                    </div>
                    <div class="list">
                        <span>本人簡宏祐(Google Account ID 布穀豬) 以合理之努力載明圖像、影片版權或來源出處。</span>
                        <span>北經殘卷作品集之網頁設計、影像圖形均為簡宏祐 (Google Account ID 布穀豬) 繪製創作，
                            版權為本人所有，除法律規定或特別指明外，非經本人書面授權同意，不得以任何方式轉載、
                            修改、傳輸、再製、散佈、出版或是傳播。</span>
                        <span>羽衣悔換作品集之設計、影像圖形均為簡宏祐 (Google Account ID 布穀豬) 繪製創作，
                            版權為本人所有，除法律規定或特別指明外，非經本人書面授權同意，不得以任何方式轉載、
                            修改、傳輸、再製、散佈、出版或是傳播。</span>
                        <div class="link-box">
                            <span>北經殘卷及羽衣悔換中所載之練習作品與其他作品，版權或資源出處如下:</span>
                            <span>1. APP UI 為再製、修改，原型來源:<a
                                    href="https://www.youtube.com/@DesignCodeTeam">@DesignCodeTeam</a></span>
                            
                            <span>2. TESLA特斯拉商品圖像、LOGO，版權皆屬TESLA所有。</span>
                            <span>3. 作品內頁為再製、修改，網頁程式與設計原型來源:<a
                                    href="https://www.youtube.com/@CubertoDesign">@CubertoDesign</a></span>
                            <span>4. APP UI 內所載之圖像、影片來源:<a href="https://www.pexels.com/">Pexels</a>、<a
                                    href="https://unsplash.com/">Unsplash</a></span>
                            <span>5. 練習小計畫、語言問題解決:<a
                                    href="https://www.youtube.com/@OnlineTutorialsYT">@OnlineTutorialsYT</a>、<a
                                    href="https://stackoverflow.com/">stackoverflow</a></span>
                        </div>
                    </div>
                    
                </div>
            </section>
        </footer>
        `;
    }
});



//copyrights
(function () {
    let moreInfoBtn = document.querySelector('.more-info-btn');
    let copyrightMoreinfo = document.querySelector('.copyright-moreinfo');
    let moreInfoClose = document.querySelector('.moreinfo-closebtn')

    moreInfoBtn.addEventListener('click', () => {
        copyrightMoreinfo.classList.add('active');
    })
    moreInfoClose.addEventListener('click', () => {
        copyrightMoreinfo.classList.remove('active');
    })

})();