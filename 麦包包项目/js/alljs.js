
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
			var cur=$(this).index();
			var top=900+cur*1200;
			$('body').stop(true).animate({"scrollTop":top+"px"});
		})
		
	})
})



$(function(){//主页面版块中大图轮换
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
		$(".flexslider span").show();
	},function(){//鼠标移出轮换页面
		$(".flexslider span").hide();
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

$(function(){//顶部  购物车
	$(".my-cart").hover(function(){
		$(this).find(".cart-list").show();
		$(this).find("a").css({"color":"red"});
		$(this).find(".min-cart").css({"border": "1px solid #ddd","borderBottom":"none","background":"white","height":"28px"});
		$(this).find(".arrow").css({"top":"6px","border-color": "#f2f2f2 #f2f2f2 #ca234f"});
	},function(){
		$(this).find(".cart-list").hide();
		$(this).find("a").css({"color":"#666"});
		$(this).find(".min-cart").css({"border": "none","background":"#f2f2f2","height":"22px"});
		$(this).find(".arrow").css({"top":"9px","border-color": "#666 #f2f2f2 #f2f2f2"});
	})
})

$(function(){//顶部  右上角网站导航
	$(".t-dropdown").hover(function(){
		$(this).find(".t-d-menu").show();
		$(this).css({"border": "1px solid #ddd","borderBottom":"none","background":"white","height":"28px","width":"71px"});
		$(this).find(".arrow").css({"top":"6px","border-color": "#f2f2f2 #f2f2f2 #ca234f"});
	},function(){
		$(this).find(".t-d-menu").hide();
		$(this).css({"border": "none","background":"#f2f2f2","height":"26px","width":"72px"});
		$(this).find(".arrow").css({"top":"9px","border-color": "#666 #f2f2f2 #f2f2f2"});
	})
})


$(function(){//主页全部商品分类   选项卡点击事件
	$(".channel li a").click(function(){
		$(this).css({"background": "#ac143f"})
		.parent("li").siblings("li").children("a")
		.css({"background": "#d41c4f"});
	})
})


/*$(function(){//主页全部商品分类     下面二级菜单显示
	$(".g-menu .all-btn").hover(function(){
		$(this).next(".catalog-list").css({"display": "block"});
	})
	$(".catalog-list").mouseleave(function(){
		$(this).css({"display": "none"});
	})
})*/


$(function(){//主页大轮换版左侧    二级菜单列表中hover事件
	$(".cata-group").hover(function(){
		$(this).find(".cata-sub").show();
		$(this).css({"borderBottom":"2px solid #ddd","borderTop":"2px solid #ddd"});
		$(this).find(".cata-group-btn").css({"borderRight":"none"});
		$(this).find(".cata-hot-words").css({"border":"none"})
	},function(){
		$(this).find(".cata-sub").hide();
		$(this).css({"borderBottom":"none","borderTop":"none"});
		$(this).find(".cata-group-btn").css({"borderRight":"1px solid #ddd"});
		$(this).find(".cata-hot-words").css({"borderBottom":"1px solid #e5e5e5"})
	})
})


$(function(){//floor_img_json.js   楼层1中json导入装图片的li
	$.get("json/floor_img.json",function(re){
		$(".floor-1 .mod-pro-list").append("<ul></ul>");
		for (var i=0;i<re.length;i++) {
			var my_img=" <img title='"+re[i].title+"' src='"+re[i].url+"' /> ";
			var my_a="<a href='#' title='"+re[i].title+"'>" + re[i].a_text+"</a>";
			var my_p="<p>"+ re[i].price +' '+ '<del>'+re[i].before_price+'</del>' +"</p>";
			$(".floor-1 .mod-pro-list ul").append("<li class=''>"+ my_img + my_a + my_p +"</li>");
			
		}
	})
})

$(function(){//floor_img_json2.js   楼层2中json导入装图片的li
	$.get("json/floor_img2.json",function(re){
		$(".floor-2 .mod-pro-list").append("<ul></ul>");
		for (var i=0;i<re.length;i++) {
			var my_img=" <img title='"+re[i].title+"' src='"+re[i].url+"' /> ";
			var my_a="<a href='#' title='"+re[i].title+"'>" + re[i].a_text+"</a>";
			var my_p="<p>"+ re[i].price +' '+ '<del>'+re[i].before_price+'</del>' +"</p>";
			$(".floor-2 .mod-pro-list ul").append("<li class=''>"+ my_img + my_a + my_p +"</li>");
			
		}
	})
})

$(function(){//floor_img_json3.js   楼层3中json导入装图片的li
	$.get("json/floor_img3.json",function(re){
		$(".floor-3 .mod-pro-list").append("<ul></ul>");
		for (var i=0;i<re.length;i++) {
			var my_img=" <img title='"+re[i].title+"' src='"+re[i].url+"' /> ";
			var my_a="<a href='#' title='"+re[i].title+"'>" + re[i].a_text+"</a>";
			var my_p="<p>"+ re[i].price +' '+ '<del>'+re[i].before_price+'</del>' +"</p>";
			$(".floor-3 .mod-pro-list ul").append("<li class=''>"+ my_img + my_a + my_p +"</li>");
			
		}
	})
})

$(function(){//floor_img_json4.js   楼层4中json导入装图片的li
	$.get("json/floor_img4.json",function(re){
		$(".floor-4 .mod-pro-list").append("<ul></ul>");
		for (var i=0;i<re.length;i++) {
			var my_img=" <img title='"+re[i].title+"' src='"+re[i].url+"' /> ";
			var my_a="<a href='#' title='"+re[i].title+"'>" + re[i].a_text+"</a>";
			var my_p="<p>"+ re[i].price +' '+ '<del>'+re[i].before_price+'</del>' +"</p>";
			$(".floor-4 .mod-pro-list ul").append("<li class=''>"+ my_img + my_a + my_p +"</li>");
			
		}
	})
})

$(function(){//floor_img_json5.js   楼层5中json导入装图片的li
	$.get("json/floor_img5.json",function(re){
		$(".floor-5 .mod-pro-list").append("<ul></ul>");
		for (var i=0;i<re.length;i++) {
			var my_img=" <img title='"+re[i].title+"' src='"+re[i].url+"' /> ";
			var my_a="<a href='#' title='"+re[i].title+"'>" + re[i].a_text+"</a>";
			var my_p="<p>"+ re[i].price +' '+ '<del>'+re[i].before_price+'</del>' +"</p>";
			$(".floor-5 .mod-pro-list ul").append("<li class=''>"+ my_img + my_a + my_p +"</li>");
			
		}
	})
})
/*购物车模块*/
/*$(".mod-pro-list ul li").click(function(){
	var mymy=$(this).children("img").attr("src");
	console.log(mymy)
})*/
$(function(){//floor_list_tmd.js   json导入的图片的hover事件:改变透明度
	$(".floor-1 .mod-pro-list").hover(function(){//楼层1
		$(this).find("li").hover(function(){
			$(this).removeClass("tmingdu").siblings().addClass("tmingdu")
		},function(){
			$(".floor-1 .mod-pro-list").find("li").removeClass("tmingdu");
		})
	})


/*购物车模块     未成功*/
			/*$(".floor-1 .mod-pro-list").mouseenter(function(){
				$(this).find("li").click(function(){
					//$(".my-cart").find(".cart-list").hide();
					//$(".my-cart").find(".cart-list").show();
					var mysrc=$(this).children("img").attr("src");
					var mytxt=$(this).children("img").attr("title");
					var myprice=$(this).children("p").text();
					console.log(myprice);
					var mypic=" <img src='"+mysrc+"' style='width: 50px;height: 50px;'/> ";
					var mya="<a>"+ mytxt +"</a>";
					var myspan="<span>"+ myprice +"</span>";
					$(".my-cart").find(".cart-list dl").append("<dd class='apd_dd'>"+ mypic + mya + myspan +"</dd>")
				})
			})*/
			
			
	$(".floor-2 .mod-pro-list").hover(function(){//楼层2
		$(this).find("li").hover(function(){
			$(this).removeClass("tmingdu").siblings().addClass("tmingdu")
		},function(){
			$(".floor-2 .mod-pro-list").find("li").removeClass("tmingdu");
		})
	})
	$(".floor-3 .mod-pro-list").hover(function(){//楼层3
		$(this).find("li").hover(function(){
			$(this).removeClass("tmingdu").siblings().addClass("tmingdu")
		},function(){
			$(".floor-3 .mod-pro-list").find("li").removeClass("tmingdu");
		})
	})
	$(".floor-4 .mod-pro-list").hover(function(){//楼层4
		$(this).find("li").hover(function(){
			$(this).removeClass("tmingdu").siblings().addClass("tmingdu")
		},function(){
			$(".floor-4 .mod-pro-list").find("li").removeClass("tmingdu");
		})
	})
	$(".floor-5 .mod-pro-list").hover(function(){//楼层5
		$(this).find("li").hover(function(){
			$(this).removeClass("tmingdu").siblings().addClass("tmingdu")
		},function(){
			$(".floor-5 .mod-pro-list").find("li").removeClass("tmingdu");
		})
	})
	$(".floor-6 .mod-pro-list li").hover(function(){//楼层6
		$(this).find(".pic-code").show();
	},function(){
		$(this).find(".pic-code").hide();
	})
})

$(function(){/*floor_lunbo.js 楼层中第一个轮播*/
	var cur=0;
	var timer= setInterval(nextImg,2000);
	function nextImg(){
		cur++;
		if (cur==6) {
			cur=1;
			$("#floor_slide1 .bxslider").css("left",0);
		}
		if (cur==5) {
			$("#floor_slide1 .bx-pager a").eq(0).addClass("hover").siblings("a").removeClass("hover");
		}
		$("#floor_slide1 .bxslider").animate({"left":-952*cur},700);
		$("#floor_slide1 .bx-pager a").eq(cur).addClass("hover").siblings("a").removeClass("hover");
	}
	
	$("#floor_slide1").hover(function(){
		clearInterval(timer);
	},function(){
		timer= setInterval(nextImg,2000);
	})
	$("#floor_slide1 .bx-pager a").hover(function(){
		var count=$(this).index();
		$("#floor_slide1 .bx-pager a span").eq(count).addClass("red")
		.parent("a").siblings("a").children("span").removeClass("red");
	},function(){
		$("#floor_slide1 .bx-pager a span").removeClass("red");
	})
	$("#floor_slide1 .bx-pager a").click(function(){
		cur=$(this).index();
		$("#floor_slide1 .bxslider").stop().animate({"left":-952*cur},700);
		$("#floor_slide1 .bx-pager a").eq(cur).addClass("hover").siblings("a").removeClass("hover");
	})
	
})

$(function(){/*floor_lunbo2.js 楼层中第二个轮播*/
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

$(function(){/*floor_lunbo3.js 楼层中第3个轮播*/
	var cur=0;
	var timer= setInterval(nextImg,2000);
	function nextImg(){
		cur++;
		if (cur==6) {
			cur=1;
			$("#floor_slide3 .bxslider").css("left",0);
		}
		if (cur==5) {
			$("#floor_slide3 .bx-pager a").eq(0).addClass("hover").siblings("a").removeClass("hover");
		}
		$("#floor_slide3 .bxslider").animate({"left":-952*cur},700);
		$("#floor_slide3 .bx-pager a").eq(cur).addClass("hover").siblings("a").removeClass("hover");
	}
	
	$("#floor_slide3").hover(function(){
		clearInterval(timer);
	},function(){
		timer= setInterval(nextImg,2000);
	})
	$("#floor_slide3 .bx-pager a").hover(function(){
		var count=$(this).index();
		$("#floor_slide3 .bx-pager a span").eq(count).addClass("red")
		.parent("a").siblings("a").children("span").removeClass("red");
	},function(){
		$("#floor_slide3 .bx-pager a span").removeClass("red");
	})
	$("#floor_slide3 .bx-pager a").click(function(){
		cur=$(this).index();
		$("#floor_slide3 .bxslider").stop().animate({"left":-952*cur},700);
		$("#floor_slide3 .bx-pager a").eq(cur).addClass("hover").siblings("a").removeClass("hover");
	})
})

$(function(){/*floor_lunbo4.js 楼层中第4个轮播*/
	var cur=0;
	var timer= setInterval(nextImg,2000);
	function nextImg(){
		cur++;
		if (cur==6) {
			cur=1;
			$("#floor_slide4 .bxslider").css("left",0);
		}
		if (cur==5) {
			$("#floor_slide4 .bx-pager a").eq(0).addClass("hover").siblings("a").removeClass("hover");
		}
		$("#floor_slide4 .bxslider").animate({"left":-952*cur},700);
		$("#floor_slide4 .bx-pager a").eq(cur).addClass("hover").siblings("a").removeClass("hover");
	}
	
	$("#floor_slide4").hover(function(){
		clearInterval(timer);
	},function(){
		timer= setInterval(nextImg,2000);
	})
	$("#floor_slide4 .bx-pager a").hover(function(){
		var count=$(this).index();
		$("#floor_slide4 .bx-pager a span").eq(count).addClass("red")
		.parent("a").siblings("a").children("span").removeClass("red");
	},function(){
		$("#floor_slide4 .bx-pager a span").removeClass("red");
	})
	$("#floor_slide4 .bx-pager a").click(function(){
		cur=$(this).index();
		$("#floor_slide4 .bxslider").stop().animate({"left":-952*cur},700);
		$("#floor_slide4 .bx-pager a").eq(cur).addClass("hover").siblings("a").removeClass("hover");
	})
})

$(function(){/*floor_lunbo5.js 楼层中第5个轮播*/
	var cur=0;
	var timer= setInterval(nextImg,2000);
	function nextImg(){
		cur++;
		if (cur==6) {
			cur=1;
			$("#floor_slide5 .bxslider").css("left",0);
		}
		if (cur==5) {
			$("#floor_slide5 .bx-pager a").eq(0).addClass("hover").siblings("a").removeClass("hover");
		}
		$("#floor_slide5 .bxslider").animate({"left":-952*cur},700);
		$("#floor_slide5 .bx-pager a").eq(cur).addClass("hover").siblings("a").removeClass("hover");
	}
	
	$("#floor_slide5").hover(function(){
		clearInterval(timer);
	},function(){
		timer= setInterval(nextImg,2000);
	})
	$("#floor_slide5 .bx-pager a").hover(function(){
		var count=$(this).index();
		$("#floor_slide5 .bx-pager a span").eq(count).addClass("red")
		.parent("a").siblings("a").children("span").removeClass("red");
	},function(){
		$("#floor_slide5 .bx-pager a span").removeClass("red");
	})
	$("#floor_slide5 .bx-pager a").click(function(){
		cur=$(this).index();
		$("#floor_slide5 .bxslider").stop().animate({"left":-952*cur},700);
		$("#floor_slide5 .bx-pager a").eq(cur).addClass("hover").siblings("a").removeClass("hover");
	})
})


$(function(){
	/*$(".search-input").keyup(function(){
		var keyword=$(this).val();//获取搜索区文字
		$.ajax({
			url:"../json/sousuo.php",//数据发送地址
			type:"post",//传输方式
			date:{'kw':keyword},//你要发送的数据内容:字符串
			dataType:"json",
			success:function(re){//成功接收到数据
				alert(re);
				$("#search_list").empty();//重新键入时清空数据
				for (var i=0;i<re.length;i++) {
					$("#search_list").append("<li>"+ re[i]+"</li>");
				}
			}
		});
	})*/
	$(".search-input").keyup(function(){
		var keyword=$(this).val();//获取搜索区文字
		$.get("json/sousuo.json",function(re){
			$("#search_list").empty();//重新键入时清空数据
			for (var i=0;i<re.length;i++) {
				var myspan="<span>"+ re[i].xq +"</span>"
				$("#search_list").append("<li>"+ re[i].pp + myspan +"</li>");
				//console.log(re[i].kw)
			}
		})
	})
	$(".search-input").blur(function(){
		$("#search_list").empty();//重新键入时清空数据
	})
	
})

