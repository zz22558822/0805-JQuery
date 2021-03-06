$(document).ready(function () {

    // Swiper輪播
    const swiper = new Swiper('.swiper-container', {
        // 可選的參數
        speed: 500,
        loop: true,
        // 自動撥放
        autoplay: {
            delay: 2000,
        },
        // 如果需要分頁
        pagination: {
        el: '.swiper-pagination',
        },
    });

    // Lightbox 燈箱效果
    lightbox.option({
        resizeDuration: 100,
        wrapAround: true,
    });

    // 下拉式選單
    $('.meun-open').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('meun-click').parent().siblings().find('a').removeClass('meun-click');
        $(this).siblings('ul').slideToggle(200).parent().siblings().find('ul').slideUp(200);
    });

    // TOP按鈕
    $('.top-btn a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        },350);
    });

    
});