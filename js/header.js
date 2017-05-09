//给类名为with_arrow的标签绑定鼠标移入事件
//让下面的子元素ul拉下来和拉上去
$(function () {
	$(".with_arrow").hover(function(){
        $(this).find("ul").stop(true,true).slideDown(600,"elasticOut");
	},function(){
        $(this).find("ul").stop(true,true).slideUp(600);
	})
})