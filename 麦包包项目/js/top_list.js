$(function(){//购物车
	$(".my-cart").hover(function(){
		//$(this).find(".t-d-menu").show();
		$(this).find(".min-cart").css({"border": "1px solid #ddd","borderBottom":"none","background":"white","height":"28px"});
		$(this).find(".arrow").css({"top":"6px","border-color": "#f2f2f2 #f2f2f2 #ca234f"});
	},function(){
		//$(this).find(".t-d-menu").hide();
		$(this).find(".min-cart").css({"border": "none","background":"#f2f2f2","height":"22px"});
		$(this).find(".arrow").css({"top":"9px","border-color": "#666 #f2f2f2 #f2f2f2"});
	})
})

$(function(){//右上角网站导航
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

$(function(){//二级菜单列表中hover事件
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

