
var mq = window.matchMedia("(min-width: 821px)"); 
if (mq.matches) {
	$('.main-content').css('visibility','hidden').delay(2000).css('visibility','visible');
	$('#page-content').css('visibility','hidden').delay(2700).css('visibility','visible');
} 
else {
	$('.main-content').css('opacity','1');
	$('#page-content').css('opacity','1');
}




