$(function(){//主页全部商品分类     下面二级菜单显示
	$(".g-menu .all-btn").hover(function(){
		$(this).next(".catalog-list").css({"display": "block"});
	})
	$(".catalog-list").mouseleave(function(){
		$(this).css({"display": "none"});
	})
})


$(function(){//表单
	$(".post_error").hide();
	$(".r_input").focus(function(){
		$(this).next(".post_error").show();
	})
	
	var zhuce=1;
	
	$("#js_tel_reg_username").change(function(){
		var tx1=$(this).val()
		var reg1=/^[1]\d{10}$/;
		var result1=reg1.test(tx1);
		if (result1&(tx1!=null)) {
			$(".r_input").blur(function(){
				$(this).next(".post_error").hide();
				return zhuce=1;
			})
		}else{
			return zhuce=0;
		}
	})
	
	$("#js_tel_reg_password").change(function(){
		var tx2=$(this).val();//tx2.length判断字符串长度  控制密码安全级别
		var reg2=/^\S{6,20}$/;
		var result2=reg2.test(tx2);
		if (result2&(tx2!=null)) {
			$(this).next(".post_error").hide();
			return zhuce=1;
		}else{
			return zhuce=0;
		}
	})
	
	$("#js_tel_reg_password_confirm").change(function(){
		var tx3=$(this).val();
		var mima=$("#js_tel_reg_password").val();
		if (tx3==mima) {
			$(this).next(".post_error").hide();
			return zhuce=1;
		}else{
			return zhuce=0;
		}
	})
	
	$("#js_sms_verifycode").click(function(){
		var new_code = Math.floor(Math.random()*10000);//Math.floor向下取整
		if (new_code<1000&new_code>100) {
		new_code="0"+new_code;
		}
		if (new_code<100&new_code>10) {
		new_code="00"+new_code;
		}
		if (new_code<10&new_code>0) {
		new_code="000"+new_code;
		}
		$("#js_tel_verifycode").val(new_code);
		$("#js_tel_verifycode").blur(function(){
			$(this).next(".post_error").hide();
		})
	})
	$("#btn_submit").click(function(){
		if (zhuce==1) {
			alert("恭喜您注册成功!")
			var d = new Date();
			d.setDate(d.getDate()+1);
			document.cookie= $("#js_tel_reg_username").val() +","+$("#js_tel_reg_password").val()+ "; expires=" + d;
		}else{
			var d = new Date();
			document.cookie= $("#js_tel_reg_username").val() +","+$("#js_tel_reg_password").val()+ "; expires=" + d;
			return
		}
	})
	if (document.cookie!=null) {//当有
		var cookies=document.cookie;
		var txt1=cookies.split(",")[0]
		$("#js_tel_reg_username").val(txt1);
		var txt2=cookies.split(",")[1];
		$("#js_tel_reg_password").val(txt2);
	}
})