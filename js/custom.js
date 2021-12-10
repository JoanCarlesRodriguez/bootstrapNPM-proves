var myCarousel = document.querySelector('#carouselIESMANACOR');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false
});

document.querySelector("#anterior").addEventListener('click',function(){   //Estic aplicant sa funcio de prev a es boto al fer click
    carousel.prev();
});

document.querySelector("#seguent").addEventListener('click',function(){
    carousel.next();
});

//Modal
var myModal = document.querySelector('#modalIES');
var modal = new bootstrap.Modal(myModal,{
    backdrop: 'static'
});

document.querySelector("#botoModal").addEventListener('click', function () {
    modal.show();
});