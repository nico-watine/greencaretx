// :: IMPORTS :: 
// PREPENDS :: 
	// /bower_components/magnific-popup/dist/jquery.magnific-popup.min.js
// APPENDS ::
	// /js/src/nav/responsive-nav.js
	// /js/src/nav/fastclick.js
	// /js/src/nav/scroll.js
	// /js/src/nav/fixed-responsive-nav.js


var mq = window.matchMedia("(min-width: 51.313em)"); //821px
if (mq.matches) {
	$('.main-content').css('opacity','0').delay(2000).animate({opacity:1});
	$('#page-content').css('opacity','0').delay(2700).animate({opacity:1});
	$('#default-logo').css('opacity','0').delay(3800).animate({opacity:1});
} 
else {
	$('.main-content').css('opacity','1');
	$('#page-content').css('opacity','1');
}

$(document).ready(function() {

	$('.open-popup-link').magnificPopup({
		type:'inline',
		fixedContentPos: true,
		midClick: true,
		removalDelay: 400,
		mainClass: 'mfp-zoom-in'
	});

	$('.gallery').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});

});


