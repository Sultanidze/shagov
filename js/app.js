$(document).ready(function(){
	//new in ads slider initialization
	var $sliderMain = $("#sliderMain").slick({
		arrows: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
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
})