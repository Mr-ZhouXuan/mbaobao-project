$(function(){
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