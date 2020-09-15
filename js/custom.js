$(document).ready(function(){
    
    $(".menu .search i").click(function(){
        $(".search").addClass("active");
    })

    $(".owl-carousel").mouseenter(function(){
        
        $(".owl-nav button").css('opacity','1');
    })
    $(".owl-carousel").mouseleave(function(){
        $(".owl-nav button").css('opacity','0');
    })


    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay: false,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true
    });
   
 






});