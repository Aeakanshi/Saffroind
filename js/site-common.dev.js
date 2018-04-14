			//Responsive menu toggle code
			function activateResponsiveNav(){
				$("#nav-toggle").click(function(){						
					$("html").toggleClass("openResponsiveNav");
					//$("#responsive-nav").toggle();
				});
				//Mobile menu Nav icon animation
				if (typeof document.querySelector("#nav-toggle").addEventListener=='function'){
					document.querySelector("#nav-toggle").addEventListener("click", function(){
						this.classList.toggle("active");
					});
				}
			};
				
			function scrollToTop(onScroll) {
				// hide #back-top first
				$("#back-top").hide();
				// fade in #back-top
				$(function () {
					$(window).scroll(function () {
						if ($(this).scrollTop() > 100) {
							$('#back-top').fadeIn();
						} else {
							$('#back-top').fadeOut();
						}
					});
					// scroll body to 0px on click
					$('#back-top a').click(function () {
						$('body,html').animate({scrollTop: 0}, 800);
						if (typeof onScroll=='function') onScroll();
						return false;
					});
				});
			};
			
			$(document).ready(function(){	
				activateResponsiveNav();
				scrollToTop();
			});
		

					