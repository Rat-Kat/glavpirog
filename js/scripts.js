$(document).ready(function(){

    $('.parallax').height($(window).height());

    var win_w = $(window).width();

    if (win_w > 1030){
        $(".first-page-clients-gallery").jCarouselLite({
            btnNext: ".first-page-clients-next",
            btnPrev: ".first-page-clients-prev",
            visible: 4,
            speed: 2500
        });
    } if(win_w > 620 && win_w <= 1030){
        $(".first-page-clients-gallery").jCarouselLite({
            btnNext: ".first-page-clients-next",
            btnPrev: ".first-page-clients-prev",
            visible: 3,
            speed: 2500
        });
    } if(win_w > 420 && win_w <= 620) {
        $(".first-page-clients-gallery").jCarouselLite({
            btnNext: ".first-page-clients-next",
            btnPrev: ".first-page-clients-prev",
            visible: 2,
            speed: 2500
        });
    } if(win_w <= 420) {
        $(".first-page-clients-gallery").jCarouselLite({
            btnNext: ".first-page-clients-next",
            btnPrev: ".first-page-clients-prev",
            visible: 1,
            speed: 2500
        });
    }




    $('.number-7').animateNumber({number: 7}, 3000);
    $('.number-2000').animateNumber({number: 2000}, 3000);
    $('.number-2457').animateNumber({number: 2457}, 3000);



    $('.second-page-order-form-date').datetimepicker(
        {pickTime: false, language: 'ru'}
    );
    $('.second-page-order-form-time').datetimepicker(
        {pickDate: false, language: 'ru'}
    );
    $('.second-page-address-subway').styler();



});








