/*------------------------------------------ 

   Template: Nixo Creative Agency Template
   Author: AtypicalThemes
   Version: 1.0.0
   Last Change: 11/22/2016
   Description: Custom JS file
   
-------------------------------------------*/
$(document).ready(function(){
    "use strict";
    
    // Slides the color-switcher in and out
      $(".switcher-icon").on("click", function(){
          $(".switcher-wrapp").toggleClass('activated');  
      });

    // SMOOTH SCROLLING TO ANCHORS
        $('a[href*=\\#]:not([href=\\#]):not(.control-right, .control-left)').on('click', function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
            return false;
          }
        }
      });

    
    // SKILLBARS SLIDER
    jQuery('.skillbar').each(function() {
        jQuery(this).appear(function() {
            jQuery(this).find('.count-bar').animate({
                width:jQuery(this).attr('data-percent')
            }, 1000);
            var percent = jQuery(this).attr('data-percent');
            jQuery(this).find('.count').html('<span>' + percent + '</span>');
        });
    });	
    
    // TESTIMONIAL SLIDER OPTIONS
    $('#carousel-testimonials').carousel({
        interval: 8000, // Interval of the slides (8s)
        pause: "hover" // Paue slides on mouse hover
    });
    
    // ANIMATIONS
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top + 150;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        }
      });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    
    // LOAD GOOGLE MAP
    google.maps.event.addDomListener(window, 'load', initialize);
        function initialize() {
            var myLatLng = {lat: 44.4278279, lng: 26.10389};
            var mapCanvas = document.getElementById('map-canvas');
            var mapOptions = {
                center: myLatLng,
                zoom: 13,
                navigationControl: true,
                mapTypeControl: true,
                scaleControl: true,
                scrollwheel: false,
                draggable: true,
              mapTypeId: google.maps.MapTypeId.TERRAIN
            }
            var map = new google.maps.Map(mapCanvas, mapOptions)

            var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Find us here!'
                });
            marker.setMap(map);
          }

    // FORM SCRIPTS
    $("#contactForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var website = $("#website").val();
        var message = $("#message").val();


        $.ajax({
            type: "POST",
            url: "php/form-process.php",
            data: "name=" + name + "&email=" + email + "&website=" + website + "&message=" + message,
            success: function(text) {
                if (text === "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError() {
        $("#contactForm").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    
    // NEWSLETTER SIGNUP SCRIPTS
    $("#signupForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            signupError();
            signupMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitSignup();
        }
    });

    function submitSignup() {
        // Initiate Variables With Form Content
        var emailsign = $("#emailsign").val();


        $.ajax({
            type: "POST",
            url: "php/newsletter-process.php",
            data: "&emailsign=" + emailsign,
            success: function(text) {
                if (text === "success") {
                    signupSuccess();
                } else {
                    signupError();
                    signupMSG(false, text);
                }
            }
        });
    }

    function signupSuccess() {
        $("#signupForm")[0].reset();
        signupMSG(true, "Awesome! Thank you for subscribing!")
    }

    function signupError() {
        $("#signupForm").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function signupMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSignup").removeClass().addClass(msgClasses).text(msg);
    }
    
});

window.onload = function() {
    //INITIALIZE ISOTIPE
    // cache container
    var $container = $('.portfolio-grid');
    // initialize isotope
    $container.isotope({
    // options...
    });
    // filter items when filter link is clicked
    $('.portfolio-tags li a').on('click', function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
    // HIDE LOADING SCREEN WHEN PAGE IS LOADED
    $('#loader-wrapper').addClass('loaded');

}
