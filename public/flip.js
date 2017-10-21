$(window).load(function() {
    console.log("window load occurred!");

// card flip //
	$(".flip").hover(function(){
		$(this).find(".card").toggleClass("flipped");
			return false;
	});

// navbar color change on scroll // 
	var mainbottom = $('#main').offset().top + $('#main').height(); 
	$(window).on('scroll',function(){
	    stop = Math.round($(window).scrollTop());
		    if (stop > mainbottom) {
		        $('.navbar').addClass('navbar-white');
		    } else {
		        $('.navbar').removeClass('navbar-white');
		   }
	});
});

