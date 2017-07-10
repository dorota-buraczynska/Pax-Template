function initMap() {
    var position = {lat: 52.272564, lng: 20.978335};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: position,
        zoomControl: true,
        scaleControl: false,
        mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl: true
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: './images/marker.png'
    });
}

var changeActiveImg = function (index) {
    var active = 'slider__img--active';
    $('.slider__img--active').removeClass(active);
    $('.slider__img').eq(index).addClass(active);
};

var changeActiveDot = function (index) {
    var active = 'slider__dot-inside--active';
    $('.slider__dot-inside--active').removeClass(active);
    $('.slider__dot-inside').eq(index).addClass(active)
};

var changeActiveQuotation = function (index) {
    var active = 'slider__slide-content--active';
    $('.slider__slide-content--active').removeClass(active);
    $('.slider__slide-content').eq(index).addClass(active);
};

var runSlideShow;
var slideShow = function () {
    runSlideShow = setInterval(function () {
        var currentImgIndex = $('.slider__img--active').index();
        currentIndex = currentImgIndex;
        currentIndex++;
        if (currentIndex === $('.slider__slide-content').length) {
            currentIndex = 0;
        }
        changeActiveDot(currentIndex);
        changeActiveImg(currentIndex);
        changeActiveQuotation(currentIndex);
    }, 3000)
};

slideShow();

$('.slider__dot').on('click', function () {
    clearInterval(runSlideShow);
    var currentIndex = $(this).index();
    changeActiveImg(currentIndex);
    changeActiveDot(currentIndex);
    changeActiveQuotation(currentIndex);
    slideShow();
});

$('.slider__arrow-wrapper--left').on('click', function () {
    clearInterval(runSlideShow);
    var currentImgIndex = $('.slider__img--active').index();
    currentIndex = currentImgIndex;
    if (currentIndex === 0) {
        currentIndex = $('.slider__slide-content').length;
    }
    currentIndex--;
    changeActiveDot(currentIndex);
    changeActiveImg(currentIndex);
    changeActiveQuotation(currentIndex);
    slideShow();
});

$('.slider__arrow-wrapper--right').on('click', function () {
    clearInterval(runSlideShow);
    var currentImgIndex = $('.slider__img--active').index();
    currentIndex = currentImgIndex;
    currentIndex++;
    if (currentIndex === $('.slider__slide-content').length) {
        currentIndex = 0;
    }
    changeActiveDot(currentIndex);
    changeActiveImg(currentIndex);
    changeActiveQuotation(currentIndex);
    slideShow();
});

