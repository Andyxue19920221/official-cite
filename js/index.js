    //   index.html的js
    $(function () {

    /*头部*/
    $("#head").load("header.html"); //底层用的AJAX, 要用服务器方式打开 //如果不想用服务器,只能用火狐
    

    /*footer part*/
    $("#footer").load("footer.html");
    // banner
    (function(){
        var i=1;

        //图片上文字动画效果
        function imgEasing() {
            $(".box>ul>li").eq(i).siblings().find("img").eq(0).removeClass("animated fadeInLeft")
            $(".box>ul>li").eq(i).siblings().find("img").eq(1).removeClass("animated fadeInRight")
            $(".box>ul>li").eq(i).siblings().find("img").eq(2).removeClass("animated fadeInUp")

            $(".box>ul>li").eq(i).find("img").eq(0).addClass("animated fadeInLeft")
            $(".box>ul>li").eq(i).find("img").eq(1).addClass("animated fadeInRight")
            $(".box>ul>li").eq(i).find("img").eq(2).addClass("animated fadeInUp")

        }

        //自动播放功能
        function banner_auto(){
          
           $(".box>ul>li").eq(i).fadeIn(500).siblings().fadeOut(300);

          $(".banner_sub>.ellispe>div").eq(i).addClass("active").siblings().removeClass("active");
          imgEasing();
           i++;
           if (i>=3) {
            i=0;
           }
           
        }
        //两秒一次
       setInterval(banner_auto,2000)

       //三个小按钮
      $(".banner_sub>.ellispe>div").click(function(){
        i=$(this).attr("id");
        $(".box>ul>li").eq(i).fadeIn(500).siblings().fadeOut(300);
        $(".banner_sub>.ellispe>div").eq(i).addClass("active").siblings().removeClass("active");
        imgEasing();
      })

      //下一张图片按钮
      $(".banner_next").click(function(){

        $(".box>ul>li").eq(i).fadeIn(500).siblings().fadeOut(300);
        $(".banner_sub>.ellispe>div").eq(i).addClass("active").siblings().removeClass("active");
        imgEasing();
        i++;
           if (i>=3) {
            i=0;
           }

      })
      //上一张图片按钮
      $(".banner_prev").click(function(){
        i--;
        if (i<=0) {
          i=3;
        }
        $(".box>ul>li").eq(i-1).fadeIn(500).siblings().fadeOut(300);
        $(".banner_sub>.ellispe>div").eq(i-1).addClass("active").siblings().removeClass("active");
        imgEasing();
       })
       
     })();

      // 主要产品
      !(function(){
        var i=0;
        var $prev=$(".products_sub>.products_prev");
        var $next=$(".products_sub>.products_next");
        var $lines=$(".point_left>.line");
        var $products=$(".products_box>ul>li");

        //上一张图片按钮
        $prev.click(function(){
          i--;
          if (i<0) {
            i=5;
          }
          fadeInFn("fadeInRight");
        })
         // 下一张图片按钮
         $next.click(function () {
            i++;
            if(i>5){
               i=0;
            }
            fadeInFn("fadeInLeft");
        })
         $lines.each(function (j) {
            var  num=j;
            $(this).click(function () {

                var direction= i>num?"fadeInRight":"fadeInLeft"; //三元表达式选择是往左播还是往右播
                                                                 //如果i大于num 说明选择的图片在当前图片前面
                                                                 //如果i小于num 说明选择的图片在当前图片后面
                i=num;                  

                fadeInFn(direction);

            })
        })

        //a为参数 选择从左淡入还是从右淡入
        function fadeInFn (a) {

            $lines.eq(i).addClass("now").siblings().removeClass("now");
            $products.eq(i).addClass("now animated "+a).siblings().removeClass("now animated "+a);
        }
      })()
      

      //业务范围下拉
      !(function(){

        $(".business>ul>li>img").add($(".spread")).hover(function () {

            $(this).addClass("animated tada")
        },function () {
            $(this).removeClass("animated tada")
        })
        
        //右边图片按钮
        $(".spread").each(function(i,ele){
          $(this).click(function(){
            slide(i)
          })
        })
        
        //中间图片按钮
        $(".business>ul>li>img").each(function(i,ele){
          $(this).click(function(){
            slide(i)
          })
        })

        //slide方法 在上面的两个按钮中引用
         function slide(i){

          //判断当前是否有打开的business_detail
          if ($(".spread").eq(i).hasClass("now")) {
            $(".spread").eq(i).removeClass("now");
            $(".business_detail").eq(i).slideUp()
          }else{
            $(".spread").removeClass("now").eq(i).addClass("now");
            $(".business_detail").slideUp().delay(100).eq(i).slideDown()
          }
         }

      })()
       

      //团队介绍
      !(function(){
         var i=0;
         var run=false;
         //向左移动的方法
         
         function toleft(){
           if(run){
            return
           }
           run=true;
           i--;
          if (i<0) {
          i=3;
          }
          $(".team_box>ul>div").eq(i-1).fadeIn(500).siblings().fadeOut(300);
          $(".team_sub>.ellispe>div").eq(i-1).addClass("active").siblings().removeClass("active");
          run=false;
         }


        //向下个div移动
        $(".team_sub>.team_next").click(function(){
           toright();
        })
       //向上一个div移动
        $(".team_sub>.team_prev").click(function(){
          toleft()
        })

         // 向右移动的方法
         function toright(){
           if(run){
            return
           }
           run=true;
           i++;
           $(".team_box>ul>div").eq(i).fadeIn(500).siblings().fadeOut(300);
           $(".team_sub>.ellispe>div").eq(i).addClass("active").siblings().removeClass("active");
           run=false;
           if (i>2) {
            i=-1;
           }
         }
         //点击中间的按钮 选择div
         
        $(".team_sub>.ellispe>div").each(function(i){
         $(this).click(function(){
          $(".team_box>ul>div").eq(i).fadeIn(500).siblings().fadeOut(300);
          $(".team_sub>.ellispe>div").eq(i).addClass("active").siblings().removeClass("active");
           })
        })
        
        //定时播放 定时器
        function fnRun() {
            timeOut = setInterval(function () {
                toright();
            }, 2000)
        }

        fnRun()
       // 当每个员工被选中时,清除定时器 防止div转换
         $(".team_box>ul li").hover(function(){
             clearInterval(timeOut);
         },function(){
            fnRun()
          
         })
      })()


      //百度地图代码
      !(function(){
         // 百度地图API功能
        var map = new BMap.Map('map');
        var poi = new BMap.Point(117.195144,39.146633);
        map.centerAndZoom(poi, 17);
        // map.enableScrollWheelZoom();

        var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
            '<img src="image/xiaoniao_icon.png" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
            '地址：天津市南开区 东南角 新世界大厦'+
            '</div>';

        //创建检索信息窗口对象
        var searchInfoWindow = null;
        searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
            title  : "卓运天成",      //标题
            width  : 290,             //宽度
            height : 105,              //高度
            panel  : "panel",         //检索结果面板
            enableAutoPan : true,     //自动平移
            searchTypes   :[
                BMAPLIB_TAB_SEARCH,   //周边检索
                BMAPLIB_TAB_TO_HERE,  //到这里去
                BMAPLIB_TAB_FROM_HERE //从这里出发
            ]
        });
        var marker = new BMap.Marker(poi); //创建marker对象
        marker.enableDragging(); //marker可拖拽
        marker.addEventListener("click", function(e){
            searchInfoWindow.open(marker);
        })
        map.addOverlay(marker); //在地图中添加marker

        /*添加地图控件*/
        function addMapControl(){
            var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
            scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
            map.addControl(scaleControl);
            var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
            map.addControl(navControl);
            var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
            map.addControl(overviewControl);
        }
        addMapControl()
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
     
      })()


      !(function () {

        $(window).scroll(function () {

            if($(window).scrollTop()>500){
                $(".scroll_top").fadeIn();
            }else {
                $(".scroll_top").fadeOut();
            }

        })
        var  $top=$(".scroll_top .top");
        $top.click(function () {

            $top.parent().animate({"bottom":"1000px"},1000,function () {
                $top.parent().css({"bottom":"158px","display":"none"})
            })

            $("body,html").scrollTop(0);

        })

    })()
        
 })