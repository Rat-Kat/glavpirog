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


    $('.glyphicon-triangle-left').click(function () {
        var input = $(this).parent().find('.second-page-cart-list-total');
        var count = parseInt(input.val()) - 1;
        count = count < 1 ? 1 : count;
        input.val(count);
        input.change();

        var sum = $(this).parent().find('.second-page-order-cart-list-total-weight');
        sum.val(parseInt(sum.val() * $(".second-page-cart-list-total").val()));
        sum.change();

        return false;

    });
    $('.glyphicon-triangle-right').click(function () {
        var input = $(this).parent().find('.second-page-cart-list-total');
        input.val(parseInt(input.val()) + 1);
        input.change();

        var sum = $(this).parent().find('.second-page-order-cart-list-total-weight');
        sum.val(parseInt(sum.val() * $(".second-page-cart-list-total").val()));
        sum.change();

        return false;
    });

    var sum = $(this).parent().find('.second-page-order-cart-list-total-weight');
    sum.val(parsInt(sum.val() * $(".second-page-cart-list-total").val()));
    sum.change();


    $('.second-page-order-form-date').datetimepicker(
        {pickTime: false, language: 'ru'}
    );
    $('.second-page-order-form-time').datetimepicker(
        {pickDate: false, language: 'ru'}
    );
    $('.second-page-address-subway').styler();

});








