(function(scs) {
    scs(window.jQuery, window, document);
    }(function($, window, document) {
        // jQuery $ locally scoped
       
        
        $(function() {

            $('.ids-portfolio--menu-btn').click(function(){
                $('body').toggleClass('is-visible--menu');
            });

            //scroll-to section
            $("#scroll-cta").click(function(){
              $('html, body').animate({ scrollTop: $('#about').offset().top }, 'slow');
            });


            // Select all links with hashes
            $('a[href*="#"]')
                  // Remove links that don't actually link to anything
                  .not('[href="#"]')
                  .not('[href="#0"]')
                  .click(function(event) {
                    // On-page links
                    $('body').removeClass('is-visible--menu');

                    if (
                      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                      && 
                      location.hostname == this.hostname
                    ) {
                      // Figure out element to scroll to
                      var target = $(this.hash);
                      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                      // Does a scroll target exist?
                      if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                         var newScroll = target.offset().top;
                        $('html, body').animate({
                          scrollTop: newScroll
                        }, 1000, function() {
                          // Callback after animation
                          // Must change focus!
                          var $target = $(target);
                          $target.focus();
                          if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                          } else {
                            //$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                          };
                        });
                      }
                    }
            });

            $('.ids-portfolio--nav a').click(function(){
                $('a').removeClass("active");
                $(this).addClass("active");
            });

            var wow = new WOW({
              boxClass: 'js-wow'
            });

            wow.init();
            
        });
    })
);