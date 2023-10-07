$(document).ready(function(){
    // Carousel
    $('#carouselItems').slick({
        autoplay: true,
        autoplaySpeed: 700 ,
        dots: true,
        prevArrow: `<button type="button" class="slick-prev">Prev</button>`,
        nextArrow: `<button type="button" class="slick-next">Next</button>`
        
    });

    // Accordion
    $('.accordionTitle').click(function(){
        $('.accordionContent').hide(200);
        let target = $(this).attr('href');
        $(target).show(200);

        $('.accordionTitle').removeClass('tabActive')
        $(this).addClass('tabActive')
        return false;
    });
    
    // Chat Popup
    $('#letsChatX').click(function(){
        $('.letsChat').hide(400)
    });

});
