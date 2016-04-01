$(document).ready(function(){
	$(window).scroll(function(){
		const position = $(window).scrollTop();
		const aboutpane = $('#about-pane-wrapper').offset().top - 80;

		if (position > aboutpane) {
			$('#site_navbar').addClass("navbar-fixed").removeClass("navbar-hidden");
		} else {
			$('#site_navbar').addClass("navbar-hidden").removeClass("navbar-fixed");
		}
	})
})