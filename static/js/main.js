$(document).ready(function(){
	$("#site-audio-pp").text("Play");
	var audio_playing = false;
	var initial_play = true;
	var first_scroll = true;
	$("#summary-name").typed({
          strings: ["Jake Kent"],
          typeSpeed: 100,
          backSpeed: 125,
          backDelay: 2000,
          showCursor: true,
    })
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
	var position = $(window).scrollTop();
	var aboutpane = $('#about-pane-wrapper').offset().top - 80;
	var skillexppane = $('#experience-skills-pane').offset().top - 80;
	/*var contactpane = $('#contact-pane').offset().top - 80;*/

	/*if (position > contactpane){
		$('#site_navbar').addClass("navbar-fixed navbar-orange").removeClass("navbar-hidden navbar-red navbar-white");
		$('#navbar-contact').addClass("selected");
		$('#navbar-skillexp').removeClass("selected");

	}*/
	if (position > skillexppane) {
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
	
	$('#navbar-welcome').click(function(){
		$('body').animate({scrollTop: 0}, 300);
		$('#navbar-about').addClass("selected");
		$('#navbar-skillexp').removeClass("selected");
		$('#navbar-contact').removeClass("selected");
	});
	$('#navbar-about').click(function(){
		$('body').animate({scrollTop: aboutpane + 10}, 300);
		$('#navbar-about').addClass("selected");
		$('#navbar-skillexp').removeClass("selected");
		$('#navbar-contact').removeClass("selected");
	});
	$('#navbar-skillexp').click(function(){
		$('body').animate({scrollTop: skillexppane + 10}, 300);
		$('#navbar-about').removeClass("selected");
		$('#navbar-skillexp').addClass("selected");
		$('#navbar-contact').removeClass("selected");
	});
	/*$('#navbar-contact').click(function(){
		$('body').animate({scrollTop: contactpane + 30}, 300);
		$('#navbar-about').removeClass("selected");
		$('#navbar-skillexp').removeClass("selected");
		$('#navbar-contact').addClass("selected");
	});*/
	
	$(window).scroll(function(){
		position = $(window).scrollTop();
		aboutpane = $('#about-pane-wrapper').offset().top - 80;
		skillexppane = $('#experience-skills-pane').offset().top - 80;
		/*contactpane = $('#contact-pane').offset().top - 80;*/

		/*if (position > contactpane){
			$('#site_navbar').addClass("navbar-fixed navbar-orange").removeClass("navbar-hidden navbar-red navbar-white");
			$('#navbar-contact').addClass("selected");
			$('#navbar-skillexp').removeClass("selected");
		}*/
		if (position > skillexppane) {
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
	$(window).resize(function(){
		position = $(window).scrollTop();
		aboutpane = $('#about-pane-wrapper').offset().top - 80;
		skillexppane = $('#experience-skills-pane').offset().top - 80;
		/*contactpane = $('#contact-pane').offset().top - 80;*/
	});
})
