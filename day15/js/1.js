jQuery(function ($) {
    $('.tabBox>.header>li').on('click', function () {
        let index = $(this).index();
        $(this).addClass('active')
            .siblings().removeClass('active')
            .parent().nextAll()
            .eq(index).addClass('active')
            .siblings('div').removeClass('active');
    });
});