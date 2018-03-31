$(document).ready(function(){
		  // Add smooth scrolling to all links
		  $("a").on('click', function(event) {

		    // Make sure this.hash has a value before overriding default behavior
		    if (this.hash !== "") {
		      // Prevent default anchor click behavior
		      event.preventDefault();

		      // Store hash
		      var hash = this.hash;

		      // Using jQuery's animate() method to add smooth page scroll
		      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		      $('html, body').animate({
		        scrollTop: $(hash).offset().top
		      }, 800, function(){
		   
		        // Add hash (#) to URL when done scrolling (default click behavior)
		        window.location.hash = hash;
		      });
		    } // End if
		  });
		});

/* Menu button */
		var wrapperMenu = document.querySelector('.wrapper-menu'); //hmburger-icon for animation
		var mainMenu = document.querySelector('.header-navigation');
		var mobileMenuButton = document.querySelector('.mobile-menu-button');

			mobileMenuButton.addEventListener('click', function(){
			  wrapperMenu.classList.toggle('open');
			  mainMenu.classList.toggle('show');
			})