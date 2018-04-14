$(document).ready(function(){
			$('#responsive-nav .nav .sub-nav').hide();
			$('#responsive-nav .nav li a').click(function(){
				$(this).next('ul').slideToggle( );
			});
			
			
			//$('.head-menu li .icon-newsletter').click(function(){
			//		 $('.news-letter').fadeIn(1000);
			///	});
			////$('.icon-delete').click(function(){
			//	$('.news-letter').fadeOut(500);
			//});
			$('#newsltr, .news-letter #cancel').click(function(){
					 $('.news-letter').fadeToggle(1000);
			});
		});