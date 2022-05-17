$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
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


//testimonials
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//       items:2,
//       itemsDesktop:[1000,2],
//       itemsDesktopSmall:[979,2],
//       itemsTablet:[768,2],
//       itemsMobile:[650,1],
//       pagination:true,
//       navigation:false,
//       slideSpeed:1000,
//       autoPlay:true
//   });
// });


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
    // console.log('fjf')
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
});
///////////////////auto-complete function/////////////////////////////////
const arrayNames = ['ahmed','mohamed','youssuf','omar','ahmed','mohamed','youssuf','omar']
function autoComplete(inputname,namesArr){
    let currentFocus;
  inputname.addEventListener("input", function(e) {
      let a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute('dir','rtl');
      a.classList.add("autocomplete-items",'col-6');
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < namesArr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (namesArr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + namesArr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += namesArr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + namesArr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inputname.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inputname.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inputname) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
// const autocompleteinput = document.getElementById('autocompleteinput');
$('#autocompleteinput').on('focus', function(e){
    e.preventDefault();
    // console.log(autoComplete(autocompleteinput,arrayNames));
    autoComplete(autocompleteinput,arrayNames);
});
// back top
$(window).on("scroll", function() {
    if ($(".stricked-menu").length) {
        var headerScrollPos = 130;
        var stricky = $(".stricked-menu");
        if ($(window).scrollTop() > headerScrollPos) {
            stricky.addClass("stricky-fixed");
        } else if ($(this).scrollTop() <= headerScrollPos) {
            stricky.removeClass("stricky-fixed");
        }
    }
    if ($(".scroll-to-top").length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $(".scroll-to-top").fadeIn(500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $(".scroll-to-top").fadeOut(500);
        }
    }
});
// button toggle
// $('.switch label').on('click', function(){
//   var indicator = $(this).parent('.switch').find('span');
//   if ( $(this).hasClass('right') ){
// 		$(indicator).addClass('right');
//   } else {
//     $(indicator).removeClass('right');
//   }
// });

// pagination

      // );
