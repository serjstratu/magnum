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

    if($.browser.webkit) {
        $('body').addClass('webkit')
    }
    if($.browser.mozilla) {
        $('body').addClass('mozilla')
    }
    if ($('.button.button1').length) {
        $('.button.button1').wrap('<div class="large-sparkle" />');
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

});
