$(document).ready(function(){
	//index.html slider initialization
	var $sliderMain = $("#sliderain").slick({
		arrows: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 6500,
		// responsive: [{
		// 		breakpoint: 992,
		// 		settings: {
		// 		slidesToShow: 2,
		// 		slidesToScroll: 2,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1
		// 		}
		// }]
	});
	// add my buttons to ads slider
	var  $sliderMainPrevBtn = $sliderMain.parent(".b-section_slider").find(".b-control_left")
		,$sliderMainNextBtn = $sliderMain.parent(".b-section_slider").find(".b-control_right")
		;
	$sliderMainPrevBtn.click(function(event){
		event.preventDefault();
		$sliderMain.slick("slickPrev");
	});	
	$sliderMainNextBtn.click(function(event){
		event.preventDefault();
		$sliderMain.slick("slickNext");
	});
// show-hide navigation menu on tablets
	$("#MenuToggleBtn").click(function(){
		$(this).toggleClass("b-toggler_active");
		$("#navigation").toggleClass("b-header__nav_opened");
	});
})