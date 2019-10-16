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

/*
* Replace all SVG images with inline SVG
*/
jQuery('img.svg').each(function(){
	var $img = jQuery(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	jQuery.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = jQuery(data).find('svg');

		// Add replaced image's ID to the new SVG
		if(typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		}

		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');

		// Replace image with new SVG
		$img.replaceWith($svg);

	}, 'xml');

});
