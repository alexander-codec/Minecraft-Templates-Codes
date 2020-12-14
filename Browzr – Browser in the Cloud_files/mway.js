$(document).ready(function() {

    enquire
        .register("screen and (min-width: 1024px)", {
            match: function() {
                $('.animation-intro-text').addClass('animation-intro-text-on');
                $('.animation-intro-container').addClass('animation-intro-on');

                $('[id^="animation"]').css({opacity: 0});

                $('[id^="flag"]').each(function() {
                    var number = $(this).attr('id').split('-').pop();
                    var animationElem = $('#animation-' + number);

                    $(this).on('inview', function( e, visible ) {
                        if( visible ) {
                            //                if( !animationElem.hasClass('uk-animation-slide-bottom') && !animationElem.is(':visible') ) {
                            animationElem.show().css({opacity: 1}).addClass('uk-animation-slide-bottom');
                            //                }
                        } else {
                            //                if( animationElem.hasClass('uk-animation-slide-bottom') && animationElem.is(':visible') ) {
                            animationElem.removeClass('uk-animation-slide-bottom').animate({opacity: 0}, 500);
                            //                    animationElem.removeClass('uk-animation-slide-bottom').fadeOut(500);
                            //                }
                        }
                    });
                });
            }
        })
        .register("screen and (max-width: 1023px)", {
            match: function() {
                $('.animation-intro-text').addClass('animation-intro-text-fixed');
                $('.animation-intro-container').addClass('animation-intro-fixed');
            }
        });

    var parts_url = window.location.pathname.split('/');
    var lastIndex = parts_url.length - 1;
    var isImprint = _.find(parts_url, function( part ) {
        return part === 'imprint' || part === 'impressum';
    });
    if( isImprint ) {
        $('.two-row-container').hide();
    }
});