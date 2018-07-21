$(document).ready(function() {
	$('.sidenav').sidenav();
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy();
	$('ul.tabs').tabs();
	$('.modal').modal();
	$('.fixed-action-btn').floatingActionButton();
	//scrollUp
	$(function toTop() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('#top').fadeIn();
			} else {
				$('#top').fadeOut();
			}
		});
		$('#top').click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});
//typed main
$(function() {
	$(".element").typed({
		strings: ["I like Anime.", "I enjoy Programming.", "I love Design.", "Graphic Designer", "Web developer"],
		typeSpeed: 40
	});
});
//typed socialising
$(function() {
	$(".social").typed({
		strings: ["I can build a website for you!", "I can fix your computer!", "I can provide advice for you.", "I can help you with research.", "I can manage your server or infrastructure or offer support.", "I can make your idea a reality.", "Don't be shy and contact me! :)"],
		typeSpeed: 40
	});
});
//animation for WOW
new WOW().init();
//animate specific tabs
$("#ongoinganimate").click(function() {
	$("#ongoniganimation").addClass("wow fadeInUp animated");
	$("#ongoniganimation").attr("style", "visibility: visible; animation-name: fadeInUp;");
});
$("#webanimate").click(function() {
	$("#webanimation").addClass("wow fadeInUp animated");
	$("#webanimation").attr("style", "visibility: visible; animation-name: fadeInUp;");
});
$("#appanimate").click(function() {
	$("#appanimation").addClass("wow fadeInUp animated");
	$("#appanimation").attr("style", "visibility: visible; animation-name: fadeInUp;");
});
$("#otheranimate").click(function() {
	$("#otheranimation").addClass("wow fadeInUp animated");
	$("#otheranimation").attr("style", "visibility: visible; animation-name: fadeInUp;");
});
var loc = window.location.href + '';
if (loc.indexOf('http://') === 0) {
	window.location.href = loc.replace('http://', 'https://');
}
