
$(document).ready(function(){
	// $(document).scroll(function() {
	//   if ($(document).scrollTop() >= 5) {
	    $('.buttons, .logo').addClass('show');
	  // }else{
	  // 	$('.buttons, .logo').removeClass('show');
	  // }
	// });
	// pricing table
	// $('.monthly').addClass('current-tables');
	$('.feature.web').hide();

	$('.toggle-input').click(function(event) {
		if ($(this).is(':checked')){
			$('.price strong').each(function(index, el) {
				$(this).fadeOut('fast', function() {
					$(this).fadeIn('fast').text($(this).data('web'));
				});
			});
			$('.type').fadeOut('fast', function() {
				$(this).fadeIn('fast').text('Web');
			});
			$('.feature.mobile').fadeOut('fast', function() {
				$('.feature.web').fadeIn('fast');
			});;
		}else{
			$('.price strong').each(function(index, el) {
				$(this).fadeOut('fast', function() {
					$(this).fadeIn('fast').text($(this).data('mobile'));
				});
			});
			$('.type').fadeOut('fast', function() {
				$(this).fadeIn('fast').text('Mobile');
			});
			$('.feature.web').fadeOut('fast', function() {
				$('.feature.mobile').fadeIn('fast');
			});;
		}
	});
	// animate scroll
	$("a[href^=#]").click(function(e) {
		e.preventDefault();
		var dest = $(this).attr('href');
		$('html,body').animate({
			scrollTop: $(dest).offset().top
		}, 'slow');
	});
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [1,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				var imageTitle = item.el.attr('title'),
					projectTitle = '<span>' + item.el.data('project') + '</span>'
				return projectTitle
			}
		}
	});
});