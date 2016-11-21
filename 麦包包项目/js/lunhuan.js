$(function(){
	var cur=0;
	var timer= setInterval(nextImg,2000);
	function nextImg(){
		cur++;
		cur = (cur==5)?0:cur;
		$(" .flexslider img").eq(cur).fadeIn(1000).siblings("img").hide();//当前对应下标的img显示,其他img隐藏
		$(" .flexslider ul li").eq(cur).addClass("red").siblings("li").removeClass("red");//当前li显示,其它隐藏
	}
	
	$(" .flexslider ul li").hover(function(){//鼠标移入下标格子时变换对应图片
		clearInterval(timer);
		cur=$(this).index();
		//$(" .flexslider img").stop();//[图片切换有时间参与,多次执行时会造成队列堆叠 ]  !!!!!!!! [阻止事件进入队列].
		$(" .flexslider img").eq(cur).stop(true).fadeIn(1000).siblings("img").hide();
		$(" .flexslider ul li").eq(cur).addClass("red").siblings("li").removeClass("red");
	},function(){//鼠标移出下标格子时变换对应图片
		$(" .flexslider img").stop(true,true);
		clearInterval(timer);
	})
	
	$(" .flexslider").hover(function(){//鼠标移入轮换页面
		clearInterval(timer);
	},function(){//鼠标移出轮换页面
		timer= setInterval(nextImg,2000);
	})
	$(" .flexslider span").hover(function(){/*上一页下一页*/
		$(".flexslider span").css({"opacity": "0.9","filter": "alpha(opacity=90)"})
	},function(){
		$(".flexslider span").css({"opacity": "0.4","filter": "alpha(opacity=40)"})
	})
	//上一页 下一页
	$(".left_btn").click(function(){//点击轮换页面中的上一页
		cur = (cur==0)?5:cur;
		cur -=2;
		nextImg();
	});
	$(".right_btn").click(function(){//点击轮换页面中的下一页
		
		nextImg();
	});
})