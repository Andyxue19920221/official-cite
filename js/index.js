    //   index.html的js
    $(function () {

    /*头部*/
    $("#head").load("header.html"); //底层用的AJAX, 要用服务器方式打开 //如果不想用服务器,只能用火狐

    // banner
    (function(){
        var i=1;

        //自动播放功能
        function banner_auto(){
          
           $(".box>ul>li").eq(i).fadeIn(500).siblings().fadeOut(300);

          $(".banner_sub>.ellispe>div").eq(i).addClass("active").siblings().removeClass("active");
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
      })

      //下一张图片按钮
      $(".banner_next").click(function(){

        $(".box>ul>li").eq(i).fadeIn(500).siblings().fadeOut(300);
        $(".banner_sub>.ellispe>div").eq(i).addClass("active").siblings().removeClass("active");
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
       })
       
     })();


      // 主要产品
      !(function(){
        var i=0;
        var $prev=$(".products_sub>.products_prev");
        var $next=$(".products_sub>.products_next");
        var $lines=$(".point_left>.line");
        var $products=$(".products_box>ul>li");
        $prev.click(function(){
          i--;
          if (i<0) {
            i=5;
          }
          fadeInFn("fadeInRight");
        })

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

                var direction= i>num?"fadeInRight":"fadeInLeft";

                i=num;

                fadeInFn(direction);

            })
        })
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
          
        $(".spread").each(function(i,ele){
          $(this).click(function(){
            slide(i)
          })
        })
        
        $(".business>ul>li>img").each(function(i,ele){
          $(this).click(function(){
            slide(i)
          })
        })


         function slide(i){
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
         
         function toleft(){
           i--;
          if (i<0) {
          i=3;
          }
          $(".team_box>ul>div").eq(i-1).fadeIn(500).siblings().fadeOut(300);
          $(".team_sub>.ellispe>div").eq(i-1).addClass("active").siblings().removeClass("active");
         }


        var i=0;
        $(".team_sub>.team_next").click(function(){
           toright();
        })

        $(".team_sub>.team_prev").click(function(){
          toleft()
        })


         function toright(){
           i++;
           $(".team_box>ul>div").eq(i).fadeIn(500).siblings().fadeOut(300);
           $(".team_sub>.ellispe>div").eq(i).addClass("active").siblings().removeClass("active");
           
           if (i>2) {
            i=-1;
           }
         }
        $(".team_sub>.ellispe>div").each(function(i){
         $(this).click(function(){
          $(".team_box>ul>div").eq(i).fadeIn(500).siblings().fadeOut(300);
          $(".team_sub>.ellispe>div").eq(i).addClass("active").siblings().removeClass("active");
           })
        })
        
        
        function fnRun() {
            timeOut = setInterval(function () {
                toright();
            }, 3000)
        }

        fnRun()

         $(".team_box>ul li").hover(function(){
             clearInterval(timeOut);
         },function(){
            fnRun()
          
         })
      })()


      //百度地图代码
      !(function(){
         //创建和初始化地图函数：
    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){ 
      map = new BMap.Map("map"); 
      map.centerAndZoom(new BMap.Point(117.19602,39.146205),15);
    }
    function setMapEvent(){
      // map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
    }
    //向地图添加控件
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }
    var map;
      initMap();
      })()
        
 })