if(window.devicePixelRatio >= 1.2){
  var elems = document.getElementsByTagName('*');
  for(var i=0;i < elems.length;i++){
  var attr = elems[i].getAttribute('data-2x');
    if(attr){
      elems[i].style.cssText += 'background-image: url('+attr+')';
    }
  }
}
/*=============================================================================================*/
/* Ready Function START Here*/
jQuery(document).ready(function() {
	'use strict';
	$('select').niceSelect();
	 
	jQuery(".hamburguer").click(function(){
		jQuery(this).toggleClass("active");
		jQuery('body').toggleClass("overflow-hidden");
	});

	/*=====================================*/
	/* Homepage Footer Flag Slider : Start */
	jQuery('#home-slider-main').owlCarousel({
		loop:false,
		margin:0,
		nav:true,
		smartSpeed: 1000,
		autoplay: false,
		autoplayTimeout: 5000,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	/* Homepage Footer Flag Slider : End */
	
	/* Homepage Footer Flag Slider : Start */
	jQuery('#text-slider').owlCarousel({
		loop:false,
		margin:0,
		nav:true,
		smartSpeed: 1000,
		autoplay: false,
		autoplayTimeout: 5000,
		dots:false,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
jQuery(document).ready(function() {
	jQuery('.testimnial-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		centerMode: true,
		centerPadding: '345px',
		arrows: false,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1451,
				settings: {
					centerPadding: '145px'
					}
				},
				{
				breakpoint: 1210,
				settings: {
					centerPadding: '85px'
					}
				},
				{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					centerMode: false,
					centerPadding: '45px'
					}
				},
				{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					centerPadding: '45px'
					}
				},
				{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					centerPadding: '15px'
				}
			}]
		});
	});	

	
	jQuery('.partner-slider').owlCarousel({
		loop:true,
		items:5,
		margin:25,
		nav:true,
		smartSpeed: 1000,
		autoplay: false,
		autoplayTimeout: 5000,
		dots:false,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});

	$(document).ready(function() {
		$('#play-video').on('click', function(ev) {
			$(this).hide();	
			$("#player").addClass('active');
			$("#player")[0].src += "?mute=1&autoplay=1";
			ev.preventDefault();
		});
	});
	

	/* Homepage Footer Flag Slider : End */
	/*=====================================*/
	
});
/* Ready Function END Here*/
/*=============================================================================================*/


 
 



