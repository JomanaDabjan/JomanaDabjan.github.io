$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})


// $(document).ready(function() {
//     $("#menu li a").click(function (e) {
//             e.preventDefault();
//             $("#menu li a").addClass("active").not(this).removeClass("active");
//     }); 
//     });

    // $(function() {
    //     $('#menu a').on('click',function (e) {
    //         var $this = $(this);
    //         $this.closest('ul').find('a').removeClass('active');
    //         $this.addClass('active');
    //         e.preventDefault();
    //     }); 
    // });