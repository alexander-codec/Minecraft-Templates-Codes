//General
jQuery(document).ready(function() {
	
	//icons hover
		jQuery("#contact").find("a").hover(function(){
		  jQuery(this).animate({"margin-top":"-10px"},"fast");
		},
		function () {
			jQuery(this).animate({"margin-top":"0"},"fast");						
		});
		
	//show and hide mobi nav	
	jQuery(".mobi-nav").click(function() {
		jQuery("header ul").toggle();
	});
	
	//parallax effect
		$window = $(window);
		$('section[data-type="background"]').each(function(){
			var $bgobj = $(this); // assigning the object
		 
			$(window).scroll(function() {
				var yPos = -($window.scrollTop() / $bgobj.data('speed'));
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';
	 
				// Move the background
				$bgobj.css({ backgroundPosition: coords });
			});
		}); 
	
	//scroll links
	var headerTop = jQuery("header").outerHeight(true);
	
	jQuery(".home").click(function() {
		jQuery('html, body').animate({
			 scrollTop: jQuery("#about").offset().top- headerTop
		 }, 500);
	});	
	
	jQuery(".work").click(function() {
		jQuery('html, body').animate({
			 scrollTop: jQuery("#work").offset().top- headerTop
		 }, 500);
	});	
	
	jQuery(".services").click(function() {
		jQuery('html, body').animate({
			 scrollTop: jQuery("#services").offset().top- headerTop
		 }, 500);
	});	
	
	jQuery(".contact").click(function() {
		jQuery('html, body').animate({
			 scrollTop: jQuery("#contact").offset().top- headerTop
		 }, 500);
	});	 

});		
