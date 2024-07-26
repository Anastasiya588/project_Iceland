'use strict';

$(window).on('load', function () {
    let preloader = $('.preLoader'),
        loaderOpenPage = preloader.find('.loaderOpenPage');
    loaderOpenPage.fadeOut();
    preloader.delay(350).fadeOut('slow');
});

$(document).ready(function () {

    new WOW(
        {
            animateClass: 'animate__animated',
        }).init();

    let loader = $('.mainLoader');

//Бургер меню
    const sidebar = $('#sidebar');
    const menuBurger = $('.menuBurger');

    menuBurger.click(function () {
        sidebar.toggleClass('show');

    });

    $(window).click(function (e) {
        if (e.target.id !== 'sidebar' && e.target.className !== 'menuBurger') {
            sidebar.removeClass('show');
        }
    });

    const swiper_cube = new Swiper(".icelandSwiperCube", {
        direction: "horizontal",
        loop: true,
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: ".swiper-pagination.icelandPagination",
            clickable: true,
        },
    });

    const swiper_cubeMobile = new Swiper(".icelandSwiperCubeMobile", {
        direction: "vertical",
        loop: true,
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: ".swiper-pagination.icelandPaginationMobile",
            clickable: true,
        },
    });

    const swiper_text = new Swiper(".swiper__tour-text", {
        loop: true,
        autoHeight: true,
        spaceBetween: 30,
        slidesPerView: 1,
        allowTouchMove: false,
        parallax: true,
    });

    const swiper_mainTour = new Swiper('.swiper__tour-image', {
        lazy: true,
        loop: true,
        autoHeight: true,
        spaceBetween: 30,
        grabCursor: true,
        parallax: true,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next.tour__arrows-next",
            prevEl: ".swiper-button-prev.tour__arrows-prev",
        },
        thumbs: {
            swiper: swiper_text,
        },
    });

    const swiper_textMobile = new Swiper(".swiper__tour-textMobile", {
        loop: true,
        autoHeight: true,
        spaceBetween: 30,
        slidesPerView: 1,
        allowTouchMove: false,
        parallax: true,
        navigation: {
            nextEl: ".swiper-button-next.tour__arrows-nextMobile",
            prevEl: ".swiper-button-prev.tour__arrows-prevMobile",
        },
        thumbs: {
            swiper: swiper_mainTour,
        },
    });


    const swiper_reviewText = new Swiper(".swiper__reviewsItemText", {
        loop: true,
        autoHeight: true,
        spaceBetween: 30,
        slidesPerView: 1,
        allowTouchMove: false,
        parallax: true,
        navigation: {
            nextEl: ".swiper-button-next.reviews__arrows-next",
            prevEl: ".swiper-button-prev.reviews__arrows-prev",
        },
    });


    const swiper_mainReview = new Swiper('.swiper__reviewsItemImage', {
        lazy: true,
        loop: true,
        autoHeight: true,
        spaceBetween: 30,
        parallax: true,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next.reviews__arrows-nextMobile",
            prevEl: ".swiper-button-prev.reviews__arrows-prevMobile",
        },
        thumbs: {
            swiper: swiper_reviewText,
        },
    });

    const swiper_mainGallery = new Swiper('.swiper__gallery', {
        loop: true,
        autoHeight: true,
        spaceBetween: 30,
        parallax: true,
        navigation: {
            nextEl: ".swiper-button-next.gallery__next",
            prevEl: ".swiper-button-prev.gallery__prev",
        },
        pagination: {
            el: ".swiper-pagination.gallery__pagination",
            clickable: true,
        },
    });

    const swiper_mainGalleryNew = new Swiper('.swiper__galleryNew', {
        loop: true,
        autoHeight: true,
        spaceBetween: 50,
        parallax: true,
        pagination: {
            el: ".swiper-pagination.gallery__paginationNew",
            clickable: true,
            dynamicBullets: true,
        },
    });

    const swiper_mainGalleryMobile = new Swiper('.swiper__galleryMobile', {
        loop: true,
        autoHeight: true,
        spaceBetween: 50,
        parallax: true,
        pagination: {
            el: ".swiper-pagination.gallery__paginationMobile",
            clickable: true,
            dynamicBullets: true,
        },
    });

    $('.popup-galleryOne').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-galleryOneNew').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-galleryTwoNew').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-galleryThreeNew').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-galleryFourNew').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-galleryFiveNew').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-gallerySixNew').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    $('.popup-gallerySevenNew').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    $('.popup-galleryEightNew').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-galleryTwo').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-galleryThree').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-galleryFour').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-galleryMobile').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    let uniquePlacesOne = $('.uniquePlaces__map-one');
    let uniquePlacesTwo = $('.uniquePlaces__map-two');
    let uniquePlacesThree = $('.uniquePlaces__map-three');
    let uniquePlacesFour = $('.uniquePlaces__map-four');
    let uniquePlacesFive = $('.uniquePlaces__map-five');

    let uniquePlacesImgOne = $('.uniquePlaces__info-imageOne');
    let uniquePlacesImgTwo = $('.uniquePlaces__info-imageTwo');
    let uniquePlacesImgThree = $('.uniquePlaces__info-imageThree');
    let uniquePlacesImgFour = $('.uniquePlaces__info-imageFour');
    let uniquePlacesImgFive = $('.uniquePlaces__info-imageFive');

    let uniquePlacesTitleOne = $('.uniquePlaces__info-titleOne');
    let uniquePlacesTitleTwo = $('.uniquePlaces__info-titleTwo');
    let uniquePlacesTitleThree = $('.uniquePlaces__info-titleThree');
    let uniquePlacesTitleFour = $('.uniquePlaces__info-titleFour');
    let uniquePlacesTitleFive = $('.uniquePlaces__info-titleFive');

    let uniquePlacesTextOne = $('.uniquePlaces__info-textOne');
    let uniquePlacesTextTwo = $('.uniquePlaces__info-textTwo');
    let uniquePlacesTextThree = $('.uniquePlaces__info-textThree');
    let uniquePlacesTextFour = $('.uniquePlaces__info-textFour');
    let uniquePlacesTextFive = $('.uniquePlaces__info-textFive');

    let uniquePlaceNumber = [uniquePlacesOne, uniquePlacesTwo, uniquePlacesThree, uniquePlacesFour, uniquePlacesFive]
    let uniqueInfo = [[uniquePlacesTitleOne, uniquePlacesTextOne, uniquePlacesImgOne], [uniquePlacesTitleTwo, uniquePlacesTextTwo, uniquePlacesImgTwo], [uniquePlacesTitleThree, uniquePlacesTextThree, uniquePlacesImgThree], [uniquePlacesTitleFour, uniquePlacesTextFour, uniquePlacesImgFour], [uniquePlacesTitleFive, uniquePlacesTextFive, uniquePlacesImgFive]]

    for (let i = 0; i < uniquePlaceNumber.length; i++) {
        uniquePlaceNumber[i].click(function (event) {

            for (let j = 0; j < uniqueInfo.length; j++) {
                if (j === i) {
                    for (let k = 0; k < uniqueInfo[j].length; k++) {
                        uniqueInfo[j][k].fadeIn();
                    }
                } else {
                    for (let k = 0; k < uniqueInfo[j].length; k++) {
                        uniqueInfo[j][k].hide();
                    }
                }
            }

        });
    }


    let videoButton = $('.video__action-btn');
    let videoText = $('.video__action-text');
    let video = $('.video');
    let youtubeVideo = $('.youtubeVideo');

    videoButton.click(function (event) {
        video.hide();
        youtubeVideo.show();
    });

    videoText.click(function (event) {
        video.hide();
        youtubeVideo.show();
    });

    let reviewsArrowsPrev = $('.reviews__arrows-prev');
    let reviewsArrowsNext = $('.reviews__arrows-next');
    swiper_mainReview.on('slideChange', function () {
        if (swiper_mainReview.activeIndex === 0) {
            // Если текущий слайд - первый, блокируем левую стрелку
            reviewsArrowsPrev.addClass('swiper-button-disabled').css('border-color', 'rgb(164,164,164)').children().css('fill', 'rgb(164,164,164)');
        } else {
            // Иначе разблокируем левую стрелку
            reviewsArrowsPrev.removeClass('swiper-button-disabled').css('border-color', 'rgb(44, 44, 44)').children().css('fill', 'rgb(44, 44, 44)');
        }

        if (swiper_mainReview.activeIndex === swiper_mainReview.slides.length - 1) {
            // Если текущий слайд - последний, блокируем правую стрелку
            reviewsArrowsNext.addClass('swiper-button-disabled').css('border-color', 'rgb(164,164,164)').children().css('fill', 'rgb(164,164,164)');
        } else {
            // Иначе разблокируем правую стрелку
            reviewsArrowsNext.removeClass('swiper-button-disabled').css('border-color', 'rgb(44, 44, 44)').children().css('fill', 'rgb(44, 44, 44)');
        }
    });

    reviewsArrowsNext.on('click', function (event) {
        event.preventDefault();
        swiper_mainReview.slideNext();
    });

// Обработчик нажатия на кнопку "предыдущий слайд"
    reviewsArrowsPrev.on('click', function (event) {
        event.preventDefault();
        swiper_mainReview.slidePrev();
    });


    let reviewsArrowsPrevMobile = $('.reviews__arrows-prevMobile');
    let reviewsArrowsNextMobile = $('.reviews__arrows-nextMobile');
    swiper_mainReview.on('slideChange', function () {
        if (swiper_mainReview.activeIndex === 0) {
            // Если текущий слайд - первый, блокируем левую стрелку
            reviewsArrowsPrevMobile.addClass('swiper-button-disabled').css('border-color', 'rgb(164,164,164)').children().css('fill', 'rgb(164,164,164)');
        } else {
            // Иначе разблокируем левую стрелку
            reviewsArrowsPrevMobile.removeClass('swiper-button-disabled').css('border-color', 'rgb(44, 44, 44)').children().css('fill', 'rgb(44, 44, 44)');
        }

        if (swiper_mainReview.activeIndex === swiper_mainReview.slides.length - 1) {
            // Если текущий слайд - последний, блокируем правую стрелку
            reviewsArrowsNextMobile.addClass('swiper-button-disabled').css('border-color', 'rgb(164,164,164)').children().css('fill', 'rgb(164,164,164)');
        } else {
            // Иначе разблокируем правую стрелку
            reviewsArrowsNextMobile.removeClass('swiper-button-disabled').css('border-color', 'rgb(44, 44, 44)').children().css('fill', 'rgb(44, 44, 44)');
        }
    });

    reviewsArrowsNextMobile.on('click', function (event) {
        event.preventDefault();
        swiper_mainReview.slideNext();
    });

// Обработчик нажатия на кнопку "предыдущий слайд"
    reviewsArrowsPrevMobile.on('click', function (event) {
        event.preventDefault();
        swiper_mainReview.slidePrev();
    });


//Валидация формы
    let orderTitle = $('.order__title');
    let form = $('.form');
    let newBlock = $('.newBlock');
    let error = $('.error-input');
    let name = $('.name');

    let phone = $('.phone');

    let radioBtn = $('.radioBtn');
    let radioBtnChecked = $('.radioBtn:checked');
    let errorRadioBtn = $('.error-inputRadioBtn');

    phone.mask('+375 (00) 000-00-00');


    $('#submit').click(function () {
        event.preventDefault();
        let hasError = false;

        loader.css('display', 'flex');

        let inputs = [name, phone];

//Валидация полей на заполненность
        inputs.forEach(function (input) {
            if (!input.val()) {
                input.next().css('margin-bottom', '10px').show();
                input.css('border-color', 'red').css('box-shadow', '0 0 10px 2px red');
                loader.css('display', 'none');
                hasError = true;
            } else {
                error.hide();
                input.css('border-color', 'white').css('box-shadow', 'none');
            }
        });

// Валидация радио-кнопки
        if (!radioBtn.is(':checked')) {
            errorRadioBtn.css('margin-bottom', '30px').show();
            radioBtn.next().css('border-color', 'red').css('box-shadow', '0 0 10px 2px red').css('margin-bottom', '10px');
            loader.css('display', 'none');
            hasError = true;
        } else {
            errorRadioBtn.hide();
            radioBtn.next().css('border-color', 'white').css('box-shadow', 'none').css('margin-bottom', '30px');
        }

        radioBtn.each(function () {
            if ($(this).is(':checked')) {
                radioBtnChecked = $(this);
            }
        });

        if (hasError) {
            inputs.forEach(function (input) {
                if (!input.val()) {
                    input.next().css('margin-bottom', '10px').show();
                }
            });
            if (!radioBtn.is(':checked')) {
                errorRadioBtn.css('margin-bottom', '10px').show();
            }
        } else {
            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: {number: radioBtnChecked.val(), name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success === 0) {
                        alert('Возникла ошибка, проверьте правильность введенных данных');
                    } else if (msg.success === 1) {
                        form.hide();
                        orderTitle.hide();
                        newBlock.css('display', 'flex');
                    }
                });
        }
    });


});