//给类名为with_arrow的标签绑定鼠标移入事件
//让下面的子元素ul拉下来和拉上去
$(function () {
	$(".with_arrow").hover(function(){
        $(this).find("ul").stop(true,true).slideDown(600);
	},function(){
        $(this).find("ul").stop(true,true).slideUp(600);
	})


	 // 导航页跳转
    !(function(){

      //logo跳转
      $(".logo").click(function(){
        window.location.href="index.html";
      })
      $("#bird_1st li").click(function(){
        var i=$(this).index();
        if (i==0) {
        	window.open("aboutxiaoniao.html");
        }
        if(i==5){
        	 window.open("aboutxiaoniao.html#4")
        }
 
        else{
            window.open("aboutxiaoniao.html"+"#"+(i))
        }

      })

      $(".article1 li").click(function(){
        window.open("article.html?type="+$(this).attr("id"))
      })
    })()
})