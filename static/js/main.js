$(document).ready(function(){
	$("#site-audio-pp").text("Play");
	var audio_playing = false;
	var initial_play = true;
	var first_scroll = true;
	$("#site-audio-pp").click(function(){
		if(audio_playing){
			$("#site_music").trigger('pause');
			$("#site-audio-pp").text("Play");
			audio_playing = false;
		}
		else{
			if(initial_play){
				$("#player-title").text('');
				$("#player-title").hide("slide", { direction: "right" }, 500);
			}
			$("#site_music").trigger('play');
			$("#site-audio-pp").text("Pause");
			audio_playing = true;
		}
	});
	const position = $(window).scrollTop();
	const aboutpane = $('#about-pane-wrapper').offset().top - 80;
	const skillexppane = $('#experience-skills-pane').offset().top - 80;
	const contactpane = $('#contact-pane').offset().top - 80;
	
	$('#navbar-welcome').click(function(){
		$(window).scrollTop(0);
		$('#navbar-about').addClass("selected");
		$('#navbar-skillexp').removeClass("selected");
		$('#navbar-contact').removeClass("selected");
	});
	$('#navbar-about').click(function(){
		$(window).scrollTop(aboutpane + 10);
		$('#navbar-about').addClass("selected");
		$('#navbar-skillexp').removeClass("selected");
		$('#navbar-contact').removeClass("selected");
	});
	$('#navbar-skillexp').click(function(){
		$(window).scrollTop(skillexppane + 10);
		$('#navbar-about').removeClass("selected");
		$('#navbar-skillexp').addClass("selected");
		$('#navbar-contact').removeClass("selected");
	});
	$('#navbar-contact').click(function(){
		$(window).scrollTop(contactpane + 30);
		$('#navbar-about').removeClass("selected");
		$('#navbar-skillexp').removeClass("selected");
		$('#navbar-contact').addClass("selected");
	});
  
	$(window).scroll(function(){
		const position = $(window).scrollTop();
		const aboutpane = $('#about-pane-wrapper').offset().top - 80;
		const skillexppane = $('#experience-skills-pane').offset().top - 80;
		const contactpane = $('#contact-pane').offset().top - 80;

		if (position > contactpane){
			$('#site_navbar').addClass("navbar-fixed navbar-orange").removeClass("navbar-hidden navbar-red navbar-white");
			$('#navbar-contact').addClass("selected");
			$('#navbar-skillexp').removeClass("selected");

		}
		else if (position > skillexppane && position <= contactpane) {
			$('#site_navbar').addClass("navbar-fixed navbar-red").removeClass("navbar-hidden navbar-white navbar-orange");
			$('#navbar-skillexp').addClass("selected");
			$('#navbar-contact').removeClass("selected");
			$('#navbar-about').removeClass("selected");
		} 
		else if (position > aboutpane && position <= skillexppane) {
			$("#player-title").text('');
			$("#player-title").hide("slide", { direction: "right" }, 500);
			$("#site-audio-pp").hide("slide", { direction: "right" }, 500);
			$('#site_navbar').addClass("navbar-fixed navbar-white").removeClass("navbar-hidden navbar-red navbar-orange");
			$('#navbar-about').addClass("selected");
			$('#navbar-skillexp').removeClass("selected");
		}
		else {
			$("#player-title").text('Some music while you browse?');
			$("#player-title").show();
			$("#site-audio-pp").show("slide", { direction: "right" }, 200);
			$('#site_navbar').addClass("navbar-hidden").removeClass("navbar-fixed navbar-white navbar-orange navbar-red");
		}
	})
})