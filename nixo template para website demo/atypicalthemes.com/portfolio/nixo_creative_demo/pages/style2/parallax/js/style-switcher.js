/* Style Switcher */
$( document ).ready(function() {
    $("#turquoise").click(function(){
        $("#hero-section ,#about-section ,#services-section-1 ,#team-section ,#skills-section ,#newsletter ,#services-section-2 ,#portfolio-section ,#pricing-section ,#testimonials-section ,#contact-section ,#main-footer").removeClass("blue red green gold purple indigo default").addClass("turquoise");
    });
    $("#blue").click(function(){
        $("#hero-section ,#about-section ,#services-section-1 ,#team-section ,#skills-section ,#newsletter ,#services-section-2 ,#portfolio-section ,#pricing-section ,#testimonials-section ,#contact-section ,#main-footer").removeClass("turquoise red green gold purple indigo default").addClass("blue");
    });
    $("#red").click(function(){
        $("#hero-section ,#about-section ,#services-section-1 ,#team-section ,#skills-section ,#newsletter ,#services-section-2 ,#portfolio-section ,#pricing-section ,#testimonials-section ,#contact-section ,#main-footer").removeClass("turquoise blue green gold purple indigo default").addClass("red");
    });
    $("#green").click(function(){
        $("#hero-section ,#about-section ,#services-section-1 ,#team-section ,#skills-section ,#newsletter ,#services-section-2 ,#portfolio-section ,#pricing-section ,#testimonials-section ,#contact-section ,#main-footer").removeClass("turquoise red blue gold purple indigo default").addClass("green");
    });
    $("#gold").click(function(){
        $("#hero-section ,#about-section ,#services-section-1 ,#team-section ,#skills-section ,#newsletter ,#services-section-2 ,#portfolio-section ,#pricing-section ,#testimonials-section ,#contact-section ,#main-footer").removeClass("turquoise red green blue purple indigo default").addClass("gold");
    });
    $("#purple").click(function(){
        $("#hero-section ,#about-section ,#services-section-1 ,#team-section ,#skills-section ,#newsletter ,#services-section-2 ,#portfolio-section ,#pricing-section ,#testimonials-section ,#contact-section ,#main-footer").removeClass("turquoise red green gold blue indigo default").addClass("purple");
    });
    $("#indigo").click(function(){
        $("#hero-section ,#about-section ,#services-section-1 ,#team-section ,#skills-section ,#newsletter ,#services-section-2 ,#portfolio-section ,#pricing-section ,#testimonials-section ,#contact-section ,#main-footer").removeClass("turquoise red green gold purple blue default").addClass("indigo");
    });
    $("#default").click(function(){
        $("#hero-section ,#about-section ,#services-section-1 ,#team-section ,#skills-section ,#newsletter ,#services-section-2 ,#portfolio-section ,#pricing-section ,#testimonials-section ,#contact-section ,#main-footer").removeClass("turquoise red green gold purple indigo blue").addClass("default");
    });              
});