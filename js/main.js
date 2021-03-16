$(document).ready(function () {
    $('.title-slider').slick({
        prevArrow: '<button class="prev"><i class="fal fa-long-arrow-left prev-but"></i><span class="button-prev">ПРЕД</span></button>',
		nextArrow: '<button class="next"><span class="button-next">СЛЕД</span><i class="fal fa-long-arrow-right next-but"></i></button>',
    })

    $('.services-slider__descktop').slick({
	   arrows: false,
	   speed: 300,
	//    variableWidth: true,
	   infinite: false
	})
	
	$('.services-slider__mobile').slick({
		arrows: false,
		speed: 300,
		slidesToShow: 2,
	    variableWidth: true,
		infinite: false
	 })




    $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$( "#target" ).click(function() {
		document.getElementById("header__bar-mobile").classList.toggle("display-block");
	  });
	  $( "#targetClose" ).click(function() {
		document.getElementById("header__bar-mobile").classList.toggle("display-block");
	  });

	$( ".services__content-1" ).mouseenter(function() {
		document.getElementById("services__event-1-1").classList.toggle("show-block");
		document.getElementById("services__event-1-2").classList.toggle("show-block");
		document.getElementById("services__event-1-3").classList.toggle("show-block");
	  });
	  $( ".services__content-1" ).mouseleave(function() {
		document.getElementById("services__event-1-1").classList.toggle("show-block");
		document.getElementById("services__event-1-2").classList.toggle("show-block");
		document.getElementById("services__event-1-3").classList.toggle("show-block");
	  });

	  $( ".services__content-2" ).mouseenter(function() {
		document.getElementById("services__event-2-1").classList.toggle("show-block");
		document.getElementById("services__event-2-2").classList.toggle("show-block");
		document.getElementById("services__event-2-3").classList.toggle("show-block");
	  });
	  $( ".services__content-2" ).mouseleave(function() {
		document.getElementById("services__event-2-1").classList.toggle("show-block");
		document.getElementById("services__event-2-2").classList.toggle("show-block");
		document.getElementById("services__event-2-3").classList.toggle("show-block");
	  });

	  $( ".services__content-3" ).mouseenter(function() {
		document.getElementById("services__event-3-1").classList.toggle("show-block");
		document.getElementById("services__event-3-2").classList.toggle("show-block");
		document.getElementById("services__event-3-3").classList.toggle("show-block");
	  });
	  $( ".services__content-3" ).mouseleave(function() {
		document.getElementById("services__event-3-1").classList.toggle("show-block");
		document.getElementById("services__event-3-2").classList.toggle("show-block");
		document.getElementById("services__event-3-3").classList.toggle("show-block");
	  });

	  $( ".services__content-4" ).mouseenter(function() {
		document.getElementById("services__event-4-1").classList.toggle("show-block");
		document.getElementById("services__event-4-2").classList.toggle("show-block");
		document.getElementById("services__event-4-3").classList.toggle("show-block");
	  });
	  $( ".services__content-4" ).mouseleave(function() {
		document.getElementById("services__event-4-1").classList.toggle("show-block");
		document.getElementById("services__event-4-2").classList.toggle("show-block");
		document.getElementById("services__event-4-3").classList.toggle("show-block");
	  });

	document.getElementById("services__event-1-3").classList.toggle("show-block");
	document.getElementById("services__event-2-3").classList.toggle("show-block");
	document.getElementById("services__event-3-3").classList.toggle("show-block");
	document.getElementById("services__event-4-3").classList.toggle("show-block");


	  if($(window).width() < 1001) {
		document.getElementById("slider__descktop").classList.toggle("show-block");
	  } else {
		document.getElementById("slider__mobile").classList.toggle("show-block");
	  }
});

