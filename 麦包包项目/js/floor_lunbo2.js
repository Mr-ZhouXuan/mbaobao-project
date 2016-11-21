$(function(){
	var cur=0;
	var timer= setInterval(nextImg,2000);
	function nextImg(){
		cur++;
		if (cur==6) {
			cur=1;
			$("#floor_slide2 .bxslider").css("left",0);
		}
		if (cur==5) {
			$("#floor_slide2 .bx-pager a").eq(0).addClass("hover").siblings("a").removeClass("hover");
		}
		$("#floor_slide2 .bxslider").animate({"left":-952*cur},700);
		$("#floor_slide2 .bx-pager a").eq(cur).addClass("hover").siblings("a").removeClass("hover");
	}
	
	$("#floor_slide2").hover(function(){
		clearInterval(timer);
	},function(){
		timer= setInterval(nextImg,2000);
	})
	$("#floor_slide2 .bx-pager a").hover(function(){
		var count=$(this).index();
		$("#floor_slide2 .bx-pager a span").eq(count).addClass("red")
		.parent("a").siblings("a").children("span").removeClass("red");
	},function(){
		$("#floor_slide2 .bx-pager a span").removeClass("red");
	})
	$("#floor_slide2 .bx-pager a").click(function(){
		cur=$(this).index();
		$("#floor_slide2 .bxslider").stop().animate({"left":-952*cur},700);
		$("#floor_slide2 .bx-pager a").eq(cur).addClass("hover").siblings("a").removeClass("hover");
	})
	
})