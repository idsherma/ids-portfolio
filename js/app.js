(function(scs) {
    scs(window.jQuery, window, document);
    }(function($, window, document) {
        // jQuery $ locally scoped
       
        
        $(function() {
            

            //overlay menu for mobile
            function overlayMenu() {
              $('.menu-icon').on('click', function() {
                $('.menu-icon').toggleClass('active');
                $('.overlay-nav').toggleClass('active');
                $('body').toggleClass("overflow");
              });
            }

            overlayMenu();

            //closing hamburger menu overlay
            $('.nav-content ul li').on('click',function(event){
                $('.menu-icon').removeClass('active');
                $('.overlay-nav').removeClass('active');
                $('body').removeClass("overflow");
            });

            //adding + removing active class on menu overlay
            $('ul li a').click(function(){
                $('li a').removeClass("active");
                $(this).addClass("active");
            });


            // $(".animated-line").typed({
            //     strings: ["DESIGNER", "DEVELOPER", "CREATIVE"],
            //     typeSpeed: 50,
            //     backSpeed: 10,
            //     backDelay: 2000,
            //     showCursor: false,
            //     loop: false
            // });

            
        });
    })
);