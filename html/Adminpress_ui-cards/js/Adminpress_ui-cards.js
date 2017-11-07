
function $(id){
	return document.getElementById(id);
}


//左边菜单的切换：
$("menu_cut").onclick=function(){
	if($("nav_l").style.width=="60px"){
		$("nav_l").style.width="240px";
		$("logo-light-text").style.display="inline-block";
		$("menu_l").style.display="block";
		$("occupy").style.width="240px";
	}else{
		$("nav_l").style.width="60px";
		$("logo-light-text").style.display="none";
		$("menu_l").style.display="none";
		$("occupy").style.width="60px";

	}
}

//带轮播图的盒子：
$("menu_cut_041").style.display="none";
$("menu_cut_04").onclick=function(){
		$("nav_r04").style.width="100%";
		$("nav_r04").style.height="395px";
		$("nav_r04").style.padding="30px 0 30px 30px";
		$("nav_r04").style.transition="0.5s";
		$("menu_cut_04").style.display="none";
		$("menu_cut_041").style.display="inline-block";
}
$("menu_cut_041").onclick=function(){
		$("nav_r04").style.width="0";
		$("nav_r04").style.height="0";
		$("nav_r04").style.padding="0";
		$("nav_r04").style.transition="0.5s";
		$("menu_cut_04").style.display="inline-block";
		$("menu_cut_041").style.display="none";
}

//上面弹出的第一个小盒子:
$("menu_cut_021").style.display="none";
$("menu_cut_02").onclick=function(){
		$("nav_r031").style.width="298px";
		$("nav_r031").style.height="365px";
		$("nav_r031").style.padding="0";
		$("nav_r031").style.transition="0.5s";
		$("menu_cut_02").style.display="none";
		$("menu_cut_021").style.display="inline-block";
}
$("menu_cut_021").onclick=function(){
		$("nav_r031").style.width="0";
		$("nav_r031").style.height="0";
		$("nav_r031").style.padding="0";
		$("nav_r031").style.transition="0.5s";
		$("menu_cut_02").style.display="inline-block";
		$("menu_cut_021").style.display="none";
}

//上面弹出的第二个小盒子:
$("menu_cut_031").style.display="none";
$("menu_cut_03").onclick=function(){
		$("nav_r032").style.width="298px";
		$("nav_r032").style.height="365px";
		$("nav_r032").style.padding="0";
		$("nav_r032").style.transition="0.5s";
		$("menu_cut_03").style.display="none";
		$("menu_cut_031").style.display="inline-block";
}
$("menu_cut_031").onclick=function(){
		$("nav_r032").style.width="0";
		$("nav_r032").style.height="0";
		$("nav_r032").style.padding="0";
		$("nav_r032").style.transition="0.5s";
		$("menu_cut_03").style.display="inline-block";
		$("menu_cut_031").style.display="none";
}

//上面弹出的第三个小盒子---美国国旗:            图 nav_r034       
$("menu_cut_061").style.display="none";
$("nav_r033").style.border="none";
$("menu_cut_06").onclick=function(){       //   按钮 menu_cut_07 头
		$("nav_r033").style.width="158px";
		$("nav_r033").style.height="160px";
		$("nav_r033").style.transition="0.5s";
		$("nav_r033").style.border="1px solid #3f464e";
		$("menu_cut_06").style.display="none";
		$("menu_cut_061").style.display="inline-block";
}
$("menu_cut_061").onclick=function(){
		$("nav_r033").style.width="0";
		$("nav_r033").style.height="0";
		$("nav_r033").style.padding="0";
		$("nav_r033").style.transition="0.5s";
		$("nav_r033").style.border="none";
		$("menu_cut_06").style.display="inline-block";
		$("menu_cut_061").style.display="none";
}

//上面弹出的第四个小盒子---头像:                
$("menu_cut_071").style.display="none";
$("menu_cut_07").onclick=function(){
		$("nav_r034").style.width="270px";
		$("nav_r034").style.height="357px";
		$("nav_r034").style.transition="0.5s";
		$("menu_cut_07").style.display="none";
		$("menu_cut_071").style.display="inline-block";
}
$("menu_cut_071").onclick=function(){
		$("nav_r034").style.width="0";
		$("nav_r034").style.height="0";
		$("nav_r034").style.padding="0";
		$("nav_r034").style.transition="0.5s";
		$("menu_cut_07").style.display="inline-block";
		$("menu_cut_071").style.display="none";
}
               
$("menu_cut_071").style.display="none";
$("menu_cut_07").onclick=function(){
		$("nav_r034").style.width="270px";
		$("nav_r034").style.height="357px";
		$("nav_r034").style.transition="0.5s";
		$("menu_cut_07").style.display="none";
		$("menu_cut_071").style.display="inline-block";
}
$("menu_cut_071").onclick=function(){
		$("nav_r034").style.width="0";
		$("nav_r034").style.height="0";
		$("nav_r034").style.padding="0";
		$("nav_r034").style.transition="0.5s";
		$("menu_cut_07").style.display="inline-block";
		$("menu_cut_071").style.display="none";
}
//menu_cut_05 放大镜
//nav_ss  搜索栏
//nav_scha 叉

$("nav_ss").style.display="none";
$("nav_scha").style.display="none";
$("menu_cut_05").onclick=function(){
		$("nav_ss").style.display="inline-block";
		$("nav_scha").style.display="inline-block";
}
$("nav_scha").onclick=function(){
		$("nav_ss").style.display="none";
		$("nav_scha").style.display="none";
}

//有边的大菜单：
$("bigbox").onclick=function(){
		$("menu_right").style.width="240px";
		$("menu_right").style.transition="0.5s";
}
$("ddd").onclick=function(){
		$("menu_right").style.width="0px";
		$("menu_right").style.transition="0.5s";
}
