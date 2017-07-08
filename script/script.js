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
        icon: './images/bulb.png'
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

$('.slider__dot').on('click', function () {
    var currentIndex = $(this).index();
    changeActiveImg(currentIndex);
    changeActiveDot(currentIndex);
});
