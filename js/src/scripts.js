

var mq = window.matchMedia("(max-width: 51.250em)");
if (mq.matches) {
	$('.main-content').css('opacity','1');
	$('#page-content').css('opacity','1');
} 
else {
	$('.main-content').css('opacity','0').delay(1400).animate({opacity:1});
	$('#page-content').css('opacity','0').delay(2100).animate({opacity:1});
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

