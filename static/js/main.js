$(document).ready(function(){
	$(window).scroll(function(){
		const position = $(window).scrollTop();
		const aboutpane = $('#about-pane-wrapper').offset().top - 80;
		const skillexppane = $('#experience-skills-pane').offset().top - 80;
		const contactpane = $('#contact-pane').offset().top - 80;

		if (position > contactpane){
			$('#site_navbar').addClass("navbar-fixed navbar-orange").removeClass("navbar-hidden navbar-red");
		}
		else if (position > skillexppane && position <= contactpane) {
			$('#site_navbar').addClass("navbar-fixed navbar-red").removeClass("navbar-hidden navbar-white navbar-orange");
		} 
		else if (position > aboutpane && position <= skillexppane) {
			$('#site_navbar').addClass("navbar-fixed navbar-white").removeClass("navbar-hidden navbar-red");
		}
		else {
			$('#site_navbar').addClass("navbar-hidden").removeClass("navbar-fixed navbar-white");
		}
	})
})