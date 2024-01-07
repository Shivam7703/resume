var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    dot:true,
    margin:70,
    responsive:{
        0:{
            items:1
        },
        630:{
            items:2
        },            
        900:{
            items:3
        },
        1240:{
            items:4
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});