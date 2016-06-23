$(document).ready(function(){
    $('.parallax').height($(window).height());

    $(".first-page-clients-gallery").jCarouselLite({
        btnNext: ".first-page-clients-next",
        btnPrev: ".first-page-clients-prev",
        visible: 4,
        auto: 5000,
        speed: 2500
    });

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

    $('.second-page-delivery-btn, .second-page-pickup-btn').on('click', function(){
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#'+tog).prop('value', sel);

        $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
    });
});








