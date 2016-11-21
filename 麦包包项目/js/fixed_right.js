
/*页面中右边固定定位浮动盒子*/
$(function(){
	$(".fb-side li").hover(function(){//所有li的hover效果
		$(this).find("a").css({"background":"white"});
		$(this).find("i").css({"background-position-y": "-35px"});
		$(this).find("span").css({"color":"#d41c50"});
	},function(){
		$(this).find("a").css({"background":"#d41c50"});
		$(this).find("i").css({"background-position-y": "0px"});
		$(this).find("span").css({"color":"white"});
	});
})	
	
$(function(){//回到顶部事件
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 612){
			$(".fb-side .gotop").fadeIn();
			$(".menu-lift").fadeIn();
			$(".fb-side .gotop").click(function(e){//回到顶部
				$('body').stop(true).animate({scrollTop:0});
			})
			if (scrollTop > 900) {
				var cur=Math.floor((scrollTop-900)/1200);
				$(".menu-lift li").eq(cur).find("a").css({"background-position-x": "-160px"})
				.parent("li").siblings().children("a").css({"background-position-x": "0px"});
			}
			
		}else{
			$(".fb-side .gotop").fadeOut();
			$(".menu-lift").fadeOut();
		}
		
		$(".menu-lift li").click(function(){//点击切换楼层
			$(this).find("a").css({"background-position-x": "-160px"})
			.parent("li").siblings().children("a").css({"background-position-x": "0px"});
			var cur=$(this).index();
			var top=900+cur*1200;
			$('body').stop(true).animate({"scrollTop":top+"px"});
		})
		
	})
})
