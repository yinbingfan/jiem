


//邮箱验证

function checkEmail(){

	//邮政编码：六位数字，第一位不是0，
	var str=document.getElementById("email").value;
	
	//var reg = /^\w{3,}@\w+.\w$/i;
	//var reg = /^\w{3,}@\w+.com$/i;
	//var reg = /^\w{3,}@\w+.(com|net)$/i;
	var reg = /^\w{3,}@\w+\.(com|net|cn)$/i;
	
	if(reg.test(str)){
		document.getElementById("emailmsg").innerHTML = "";
	}else{
		document.getElementById("emailmsg").innerHTML = "请输入正确的邮箱格式";
	}
}




//日期验证

function checkRiqi(){
	var str = document.getElementById("riqi").value;
	 //(xxxx-xx-xx| xxxx/xx/xx | xxxx.xx.xx)
	//var reg = /^\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}$/;
	
	var reg = /^\d{2}(-|\/|\.)(0[1-9]|1[0-2])(-|\/|\.)\d{2}$/;

	
	if(reg.test(str)){
		document.getElementById("riqimsg").innerHTML="";
	}else{
		document.getElementById("riqimsg").innerHTML="请输入正确的日期格式";
	}
	
}



//最大长度是10

function checkMaxLength(){
	var str = document.getElementById("maxlength").value;
	 //(xxxx-xx-xx| xxxx/xx/xx | xxxx.xx.xx)
	//var reg = /^\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}$/;
	
	var reg = /^.{1,10}$/;

	
	if(reg.test(str)){
		document.getElementById("maxlengthmsg").innerHTML="";
	}else{
		document.getElementById("maxlengthmsg").innerHTML="最大长度不能超过10";
	}
	
}




//只有数字
function checkNum(){
	var str = document.getElementById("onlynum").value;
	 //(xxxx-xx-xx| xxxx/xx/xx | xxxx.xx.xx)
	//var reg = /^\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}$/;
	
	var reg = /^([0-9.]+)$/;

	
	if(reg.test(str)){
		document.getElementById("onlynummsg").innerHTML="";
	}else{
		document.getElementById("onlynummsg").innerHTML="只允许输入数字";
	}
	
}








