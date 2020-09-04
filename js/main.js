$(function(){

$('.global-link').click(function(){
    $('.popup').css({
        display: 'flex',
    });
    $('body').css({
        overflow: 'hidden',
    })
})
$('.popup__close').click(function(){
    $('.popup').css({
        display: 'none',
    })
    $('body').css({
        overflow: 'visible',
    })
})
$('.burger').click(function(){
    $('.burger, .header__nav').toggleClass('active');
    $('body').toggleClass('lock');
})
$('.header__nav').click(function(){
    $('.burger, .header__nav').removeClass('active');
    $('body').removeClass('lock');
})
});