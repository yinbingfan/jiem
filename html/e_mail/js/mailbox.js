$(function () {
    // 点击导航栏
    $(".fuben>i").on("click",function () {
        $(".logo-admin").toggle();
        $(".zhuanyu").toggle();
        $(".ershiw").toggle();
        $(".bodr").toggle();
        $(".arrow").toggle();
        $(".personal>span").toggle();
        $(".persoan>h5").toggle();
        $(".sump").toggle();
    });
	
	
  //点击消息
	$(".xiaoxiyi").click(function(){
		$(".notifications").toggle("2000");
	});
  //点击邮箱
  	$(".youxaing").click(function(){
		$(".newmessages").toggle("2000");
	});
  //点击四方块
  	$(".sifang").click(function(){
		$(".carousel").toggle("2000");
	});
 





    //国旗
  	$(".chian").click(function(){
		$(".guoqi").toggle("2000");
	});
	//搜索
	$(".sou").click(function(){
		$(".sousu").toggle("2000");
	});
	
  //旋转


    $(".persoan>li").on("click",function () {
             //子菜单显示
            $(this).find($(".minimal")).toggle();
             //旋转
            $(this).find($(".arrow")).css({
                transformOrigin: "center",
                transform: "rotate(-270deg)",
                transition: "all 1s"
            });
            //边框变色
            $(this).find(".perr").css("borderLeft", "3px solid #1e88e5");
    });

    if($(".asideLeft")[0].style.width<"60px"){
        $(".perr").mouseenter(function () {
            $(this).css("background","#fff");
        });
    }




    $(".perr").mouseenter(function () {
        $(this).find($(".personal>span")).css("color","#1e88e5");
        $(this).find($(".personal>i")).css("color","#1e88e5");
    });
    $(".perr").mouseleave(function () {
        $(this).css("background","#272c33");


        $(this).find($(".personal>span")).css("color","#607d8b");
        $(this).find($(".personal>i")).css("color","#607d8b");
    });


   //变色
    $(".minimal>li").mouseenter(function () {
         $(this).find($(".minimal>li>a")) .css("color","#1e88e5");
    });
    $(".minimal>li").mouseleave(function () {
        $(this).find($(".minimal>li>a")) .css("color","#607d8b");
    });





    // 内容部分
     $(".contentmailist>li").mouseenter(function () {
            $(this).css({
                background:"#323840",
                borderLeft:"3px soild  #009efb",
                zIndex: "2"
            })
     });
    $(".contentmailist>li").mouseleave(function () {
        $(this).css({
            background:"#272c33",
            borderLeft:"none",
        })
    });

    //当点击check时
    $(".check").click(function () {
      $(this).next($(".chench")).toggle();
    });
    //点击错误消失
    $(".cuo").click(function () {
         $(".sousu").hide("2000");
    });


    
    $(".Imglist span").mouseenter(function () {

        $(this).css({
          background:"rgba(200, 200, 200, 0.3)"
        });
        $(this).find($("i")).css({
            color: "white"
        });
    });
    $(".Imglist span").mouseleave(function () {

        $(this).css({
            background:"#323840"
        });
        $(this).find($("i")).css({
            color: "#747d8a"
        });

    });
    //右侧边栏
    $(".rpanel-title>img").click(function () {
        $(".rightaisde").css("display","none");
    });
    //点击旋转
    $(".xuanzhuan").click(function () {
        $(".rightaisde").css("display","block");
    });
    //换色
    $(".ctr1").click(function () {
        $(".headerRight").css("backgroundColor","#212529");
        $(".ctr1>img").toggle();
    });
    $(".ctr2").click(function () {
        $(".headerRight").css("backgroundColor","#26c6da");
        $(".ctr2>img").toggle();
    });
    $(".ctr3").click(function () {
        $(".headerRight").css("backgroundColor","#fc4b6c");
        $(".ctr3>img").toggle();
    });
    $(".ctr4").click(function () {
        $(".headerRight").css("backgroundColor","#1e88e5");
        $(".ctr4>img").toggle();
    });
    $(".ctr5").click(function () {
        $(".headerRight").css("backgroundColor","#7460ee");
        $(".ctr5>img").toggle();
    });
    $(".ctr6").click(function () {
        $(".headerRight").css("backgroundColor","#00897b");
        $(".ctr6>img").toggle();
    });
    
});


//轮播图
var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical',//是否垂直
    loop: true,//是否可以循环拖动
    autoplay:2000,//是否自动播放
    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 如果需要滚动条

});
