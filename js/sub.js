$(document).ready(function () {
    //skill
    //skicky
    const winHei = $(window).height();
    const stickyY = $('.sticky').offset().top;
    console.log(winHei, stickyY);

    $('.tree_wrap .seed:nth-of-type(1)').addClass('on');
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        $('.tree_wrap > div').each(function (idx) {
            if(scrollY > stickyY + winHei * idx) $(this).addClass('on').siblings().removeClass('on');
        });
    });

});