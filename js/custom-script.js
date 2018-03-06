$(document).ready(function() {
	$('.sidenav').sidenav();
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy();
	$('ul.tabs').tabs();
});

//typed
$(function() {
	$(".element").typed({
		strings: ["Java.", "HTML.", "SQL.", "GIT.", "UML.", "PHP.", "CSS.", "JS.", "Web Developer.", "Freelancer.", "husky", "edlaika", "Edgar"],
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
// scrollUp
$(function() {
	$.scrollUp({
		animation: 'slide',
		scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>', // Text for element
	});
});
var loc = window.location.href + '';
if (loc.indexOf('http://') === 0) {
	window.location.href = loc.replace('http://', 'https://');
}
