$(function () {
	
	// $("#head").load("header.html"); //底层用的AJAX, 要用服务器方式打开 //如果不想用服务器,只能用火狐
    

 //    /*footer part*/
 //    $("#footer").load("footer.html");

    !(function(){
      
      //点击笔执行动画
      $(".pen").click(function(){

        //笔
       $(".pen").animate({left:"0px"},1,function(){
            $(".pen").animate({left:"1050px"},1000,"easeIn")

            //线
       }).siblings(".pen_line").animate({width:"0px"},1,function(){
       	    $(".pen_line").animate({width:"1040px"},1000,"easeIn") 
       })
      })
      
       
    })()
     //设定一个全局的独享
    var  GLOBAL=GLOBAL||{};
    !(function(){
      
      /*获取当前文章类型*/
    function getUrl() {
        var type=window.location.search.split("=")

        if(type){
            return type[1];
        }else {   //如果获取到的是一个空的,我们返回"";
            return "";
        }

    }

   

      var $more=$(".load_more>span") 
      getlist();

      //为每个文章添加点击跳转
      //on方法为事件委托
     $("#list_content").on("click",".list",function () {
    
               window.open("article.html?type="+getUrl()+"&ArticleID="+$(this).attr("ArticleID"))
    })

        // 获取listData中的数据方法
      function getlist(){
        if(GLOBAL.pageStart==null){//GLOBAL.pageStart表示当前页面上渲染的是第几页的数据
            GLOBAL.pageStart=0;
            //清空html
            $("#list_content").html("");
          }
        //找到listData里的data
        var listdata=listData["listData0"+GLOBAL.pageStart].data
        //找到list
        var lists=listdata.list;

        //当没有数据时
         if(lists.length==0){
                $("#content").html("<h1 style='text-align: center'>暂无数据,持续更新中</h1>");
        }else{
        
        //在模板中添加html元素
        var itemHtml=$("#list_model").html();

        var listnum=lists.length
        for(var i=0;i<listnum;i++){
            var list=lists[i];
            // 将模板中的html中的关键字替换
           var itemHTML =itemHtml.replace("$img$",list.coverImg)
               .replace("$title$",list.title)
               .replace("$creatAt$",list.creatAt)
               .replace("$describe$",list.describe)
               .replace("$sysID$",list.sysId)

          //在需要添加li的ul中添加模板中的html
            $("#list_content").append(itemHTML);
          }
           GLOBAL.pageStart++;
           if (GLOBAL.pageStart>2) {

           //当用img时,使用attr来改变图片src  或siblings().get(0) 转变为源生js 使用src
           //$(".load_more>span").css("display","none").siblings().attr("src","image/list_gomore_bg_nomore.jpg");
           $(".load_more>span").css("display","none").siblings().css("background","url(image/list_gomore_bg_nomore.jpg)");
           
         }
        }
         
      }

      $more.click(function(){
        
         
         getlist() 
       })


    })()
})