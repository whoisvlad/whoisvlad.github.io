 $(window).scroll(function(){
 	inViewport();
 });

 $(window).resize(function(){
 	inViewport();
 });

 function inViewport(){
 	$('.animated').each(function(){
 		var viewPortHeight = $(window).height();;
 		var divPos = $(this).offset().top,
 		topOfWindow = $(window).scrollTop();

 		if( divPos < topOfWindow+viewPortHeight ){
 			$(this).addClass('fadeInUp');
 		}
 	});
 }