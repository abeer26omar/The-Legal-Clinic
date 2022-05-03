$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        // // items:2,
        // pagination:true,
        // // navigation:true,
        // // navigationText:["<",">"],
        // autoPlay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                // nav:true
            },
            600:{
                items:1,
                // nav:false
            },
            992:{
                items:2,
                // nav:true, 

                // loop:false
            }
        },
        items:2,
        // itemsDesktop:[1000,2],
        // itemsDesktopSmall:[980,1],
        // itemsTablet:[768,1],
        pagination:true,
        // navigation:true,
        // navigationText:["<",">"],
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
  });


// navbar Sticky
// $(window).on('scroll',function() {
// 	var stickytop = $('.nav-style');
// 	var stickytopslide = $('.stick-top ');
	
// 	if ($(this).scrollTop() > 1){  
// 		stickytop.addClass("sticky-on");
// 		stickytop.find(".logo").attr('src',stickytop.find('.logo').data('sticky-logo'));
// 	}
// 	else {
// 		stickytop.removeClass("sticky-on");
// 		stickytop.find(".logo").attr('src',stickytop.find('.logo').data('default-logo'));
// 	}
	
// 	if ($(this).scrollTop() > 180){  
// 		stickytopslide.find(".nav-style").addClass("sticky-on");
// 		stickytopslide.find(".logo").attr('src',stickytopslide.find('.logo ').data('sticky-logo'));
// 	}
// 	else{
// 		stickytopslide.find(".nav-style").removeClass("sticky-on");
// 		stickytopslide.find(".logo ").attr('src',stickytopslide.find('.logo').data('default-logo'));
// 	}
// });

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("header-stickey");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }




// navBar collapse X
$('.navbar-toggler').on('click', function() {
	$(this).toggleClass('show');
    $('#header-nav').toggleClass('show');
    // $('.page-wrapper').toggleClass('fade')
    // console.log('gfhdj')
});
$(".navbar-nav a").on('click', function() {
    $(".navbar-collapse, .navbar-toggler").removeClass("show");
    // console.log('fghjdk')
    // $('.page-wrapper').removeClass('fade')

});

$(".search-toggler").on("click", function(e) {
    e.preventDefault();
    $(".search-popup").toggleClass("active");
    console.log('fjf')
});

// $('.drop-menu-profile').on('click',(e)=>{
//     e.preventDefault();
//     $('#ul-menu-profile').style.display = 'block';
// })
const dropMenuProfile = document.getElementById('drop-menu-profile');
const ulMenuProfile = document.getElementById('ul-menu-profile');

dropMenuProfile.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    if(ulMenuProfile.style.display == 'none'){
        ulMenuProfile.style.display = 'block';
        dropMenuProfile.classList.add('expanded');
    }else{
        ulMenuProfile.style.display = 'none';
        dropMenuProfile.classList.remove('expanded');
    }
})