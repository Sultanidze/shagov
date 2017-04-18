$(document).ready(function(){
	//index.html slider initialization
	var $sliderMain = $("#sliderMain").slick({
		arrows: false,
		infinite: false,
		speed: 2500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 600,
				settings: {
				speed: 400,
				autoplaySpeed: 6000,
				slidesToShow: 1,
				slidesToScroll: 1
				}
		}]
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
// show submenu
	var  $subMenu = $(".js-submenu")
		,$linkToSubMenu = $(".js-toggler_subMenu")
		,transTime = $subMenu.css("transition-duration")	// string 0.4s
		;
		transTime = (transTime.split("s"))[0]*1000;	// number 400

	function hideSubmenu(){
		$linkToSubMenu.removeClass("b-menu__link_active");
		$subMenu.removeClass("b-submenu_active").delay(400).queue(function(){
			$(this).css("visibility", "hidden");
		});
	};

	$linkToSubMenu.click(function(){
		$(this).addClass("b-menu__link_active");
		$subMenu.css("visibility", "visible");
		$subMenu.addClass("b-submenu_active");
	});
	$linkToSubMenu.mouseenter(function(){
		$(this).trigger("click");
	});
	$linkToSubMenu.mouseleave(function(event){
		var relTarget = event.relatedTarget;
		if (relTarget != $subMenu[0]){
			hideSubmenu();
		}
	});
	$subMenu.mouseleave(function(event){
		var relTarget = event.relatedTarget;
		if (relTarget != $linkToSubMenu[0]){
			hideSubmenu();
		}
	});
	
})