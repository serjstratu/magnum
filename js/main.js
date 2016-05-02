$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

$(document).ready(function(){
    if ($('.promo-button').length) {
        $('.promo-button').wrap('<div class="large-sparkle" />');
        $('.large-sparkle').append('<span class="sparkle">');
        $('.large-sparkle .sparkle').delay(1000).animate({'left':'100%'},600, function() {
            $('.large-sparkle .sparkle').css('left','-120px');
        });
        setInterval(function(){
            $('.large-sparkle .sparkle').animate({'left':'100%'},600, function() {
                $('.large-sparkle .sparkle').css('left','-120px');
            });
        },4500);
    }

    if ($('.promo-button2').length) {
        $('.promo-button2').wrap('<div class="large-sparkle2" />');
        $('.large-sparkle2').append('<span class="sparkle">');
        $('.large-sparkle2 .sparkle').delay(1000).animate({'left':'100%'},600, function() {
            $('.large-sparkle2 .sparkle').css('left','-120px');
        });
        setInterval(function(){
            $('.large-sparkle2 .sparkle').animate({'left':'100%'},600, function() {
                $('.large-sparkle2 .sparkle').css('left','-120px');
            });
        },4500);
    }
});
