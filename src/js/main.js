$(function () {
    $('.header__menu-btn').on('click', function () {
        $('.header__list').toggleClass("off");
        $('.header__menu-btn').toggleClass("on");
    });

    $('.like-slider__inner').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $(".rate-star").rateYo({
        rating: 3.6,
        normalFill: "#ffffff",
        ratedFill: "#f8e530",
        starWidth: "19px",
    });
});
