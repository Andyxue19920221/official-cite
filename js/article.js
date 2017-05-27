$(function () {
	   
	$("#head").load("header.html"); //底层用的AJAX, 要用服务器方式打开 //如果不想用服务器,只能用火狐
    

    /*footer part*/
    $("#footer").load("footer.html");

    !(function(){


     var text=["娘娘威武","皇上万岁，万万岁","爱死你啦、MUA~","再点一下试试~"];
     var like=false;
     $(".article_like").click(function(){
      if(!like){
        like=true;
        //随机点赞文字
        $(".article_like_madam").text(text[Math.floor(Math.random()*text.length)]);
        $(".article_like").css("cursor","auto");
        move();
      }
      else if(like && $(".article_like_madam").text()=="再点一下试试~" ){
               $(".article_like_madam").text("播播点点,点点播播")
               move();
           }
     })

     //点赞文字动画
      function move() {
            $(".article_like_madam").animate({"top":"130px", "opacity": 1},2000,"elasticOut",function () {
                $(".article_like_madam").delay(500).animate({"left":"-422px","opacity": "0"},1000,function () {
                    $(".article_like").animate({"backgroundPositionY":"-72px"})
                    $(".article_like_madam").css({"left":"0px","top":"-200px"})
                })
            })
        }

      //笔刷动画
      $(".pen").click(function(){
       $(".pen").animate({left:"0px"},1,function(){
            $(".pen").animate({left:"1040px"},1000)
       }).siblings(".pen_line").animate({width:"100px"},1,function(){
            $(".pen_line").animate({width:"1045px"},1000) 
       })
      })
    })()
    //动态获取article页面
    !(function(){
       
       var GLOBAL = GLOBAL || {};


       function getUrl(name){
        //正则匹配url中的文字
          var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          if(r!=null)return decodeURI(r[2]);return "";
       }
        GLOBAL.articletype=getUrl("type");
        GLOBAL.articleID=getUrl("ArticleID");

        //取得article动态数据
        function getarticledata(){
        var articledata=articleData[GLOBAL.articletype+GLOBAL.articleID].data;
        //判断编辑日期
        var updateTime=articledata.updateAt?articledata.updateAt:articledata.creatAt;
        //判断编辑人员姓名
        var author=articledata.updateByFullName?articledata.updateByFullName:creatByFullName;
        if (articledata!=null) {
            $("#typeTitle").text(articledata.typeTitle);
                $("#typeEntitle").text(articledata.typeEntitle);
                $("#articleTitle").text(articledata.title);
                $("#updateTime").text(updateTime+" "+author);
                $("#cover").attr("src",articledata.coverImg);
                $("#content").html(articledata.content);

        }
       } 
       getarticledata();
    })()
    

})