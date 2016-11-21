$(function(){
	$(".floor-1 .mod-pro-list").hover(function(){
		$(this).find("li").hover(function(){
			$(this).removeClass("tmingdu").siblings().addClass("tmingdu")
		},function(){
			$(".floor-1 .mod-pro-list").find("li").removeClass("tmingdu");
		})
	})
	$(".floor-2 .mod-pro-list").hover(function(){
		$(this).find("li").hover(function(){
			$(this).removeClass("tmingdu").siblings().addClass("tmingdu")
		},function(){
			$(".floor-2 .mod-pro-list").find("li").removeClass("tmingdu");
		})
	})
})