$(document).ready(function(){
// 侧边栏响应式后的效果
	$(function(){
		var lis = $("#demo-list_one li");
		lis.hover(function(){
			$(this).find(".submenulist").stop().show();
		},function(){
			$(this).find(".submenulist").stop().hide();
		});
		
	});
			
//导航栏三个li标签隐藏内容效果
	$(function(){
		var lis = $(".nav_collapse_left li");
		lis.hover(function(){
			$(this).find("#menu").stop().show();
		},function(){
			$(this).find("#menu").stop().hide();
		});
		


		$(function(){
			$("#nav_items").click(function(){
				$(".app_search").stop().toggle("slow");
			})
		})
		$(".nav_collapse_right>li:nth-child(2)").click(function(){
			$(".scale_up").toggle("slow");
		});
		 $(".nav_collapse_right>li:nth-child(3)").click(function(){
			$(".dropdown_scale_up").toggle("slow");
		});

	});
       
});
