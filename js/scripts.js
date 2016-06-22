$('.parallax').height($(window).height());


$('.number-7').animateNumber({ number: 7}, 1500);
$('.number-2000').animateNumber({number: 2000},1500);
$('.number-2457').animateNumber({number: 2457},1500);


$(function () {
    $('.second-page-order-form-date').datetimepicker(
        {pickTime: false, language: 'ru'}
    );
    $('.second-page-order-form-time').datetimepicker(
        {pickDate: false, language: 'ru'}
    );
});
