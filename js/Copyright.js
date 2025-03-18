//console.log("草莓鮮奶茶喜歡十月海風");

//tag
customElements.define('copyrights', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer copyright">
            <span>&#169; 2022-2023 布榖豬/BOKU-PIG&nbsp;&nbsp;<a class="more-info-btn">More
                    info.</a></span>
        </div>
        <div class="copyright-moreinfo">
            <div class="moreinfo-box">
                <i class="ri-close-line moreinfo-closebtn absolute pointer"></i>
                <h4>版權聲明</h4>
                <span>本人簡宏祐(Google Account ID 布穀豬) 以合理之努力載明圖像、影片版權或來源出處。</span>
                <span>北經殘卷作品集之網頁設計、影像圖形均為簡宏祐 (Google Account ID 布穀豬) 繪製創作，
                    版權為本人所有，除法律規定或特別指明外，非經本人書面授權同意，不得以任何方式轉載、
                    修改、傳輸、再製、散佈、出版或是傳播。</span>
                <span>羽衣悔換作品集之設計、影像圖形均為簡宏祐 (Google Account ID 布穀豬) 繪製創作，
                    版權為本人所有，除法律規定或特別指明外，非經本人書面授權同意，不得以任何方式轉載、
                    修改、傳輸、再製、散佈、出版或是傳播。</span>
                <div class="link-box">
                    <span>北經殘卷及羽衣悔換中所載之練習作品與其他作品，版權或資源出處如下:</span>
                    <span>01. 羽衣悔換作品集為再製、修改，網頁程式與版型來源:<a
                            href="https://www.youtube.com/@TheWebShala">@TheWebShala</a></span>

                    <span>02. 沙漠旅遊為再製、修改，網頁程式與設計原型來源:<a href="https://www.youtube.com/@Bedimcode">@Bedimcode</a></span>
                    <span>03. 渡假計畫為再製、修改，網頁程式與設計原型來源:<a
                            href="https://www.youtube.com/@MrWebDesignerAnas">@MrWebDesigner</a></span>
                    <span>04. 十月餐廳為再製、修改，網頁程式與設計原型來源:<a
                            href="https://www.youtube.com/@TheWebShala">@TheWebShala</a></span>
                    <span>05. APP UI 為再製、修改，原型來源:<a
                            href="https://www.youtube.com/@DesignCodeTeam">@DesignCodeTeam</a></span>
                    <span>06. 新光三越圖像、檔期文字訊息，版權皆屬新光三越所有。</span>
                    <span>07. TESLA特斯拉商品圖像、LOGO，版權皆屬TESLA所有。</span>
                    <span>08. 作品內頁為再製、修改，網頁程式與設計原型來源:<a
                            href="https://www.youtube.com/@CubertoDesign">@CubertoDesign</a></span>
                    <span>09. 沙漠旅遊、渡假計畫、十月餐廳、APP UI 內所載之圖像、影片來源:<a href="https://www.pexels.com/">Pexels</a>、<a
                            href="https://unsplash.com/">Unsplash</a></span>
                    <span>10. 練習小計畫、語言問題解決:<a
                            href="https://www.youtube.com/@OnlineTutorialsYT">@OnlineTutorialsYT</a>、<a
                            href="https://stackoverflow.com/">stackoverflow</a></span>
                </div>
            </div>
        </div>
        `;
    }
});

//action
(function(){
    let moreInfoBtn = document.querySelector('.more-info-btn');
    let copyrightMoreinfo = document.querySelector('.copyright-moreinfo');
    let moreInfoClose = document.querySelector('.moreinfo-closebtn')

    moreInfoBtn.addEventListener('click', ()=>{
        copyrightMoreinfo.classList.add('active');
    })
    moreInfoClose.addEventListener('click',()=>{
        copyrightMoreinfo.classList.remove('active');
    })

})();