//整屏滚动
 !(function(){
   $li=$(".nav_wrap ul>li");
   windowResize();
    //获取window的高度赋值给main_warp和slider
    function windowResize() {
        $(".main,.slide,.welcome_animation").css("height",$(window).height()-50+"px")
    }

    //当页面发生改变的时候获取window的高度赋值给main_warp和slider
    $(window).resize(function () {
        windowResize();
    })
    
    /*给window绑定鼠标滚轮事件*/
    if(document.addEventListener){
        document.addEventListener("DOMMouseScroll",scroll,false)
    }

    window.onmousewheel=document.onmousewheel=scroll;

    function scroll(e){
       var e=e||window.event;
        //判断滚轮滚动方向
        if(e.wheelDelta){  //谷歌和ie
            if(e.wheelDelta>0){
                //console.log("//鼠标网上滚");
                scrollUp();
            }else if(e.wheelDelta<0){
              //  console.log("//鼠标往下滚");
                scrollDown();
            }
        }else if (e.detail){   //火狐

            if(e.detail>0){
               // console.log("//鼠标往下滚");
               scrollDown();
            }else if(e.detail<0){
               // console.log("//鼠标网上滚");
               scrollUp();
            }
        }
    }
    
    var scrollindex=0;//当前显示的第几屏
    //不能合scrollindex交换顺序
    hash_move();
    var scrollnum=0; //鼠标滚动的次数
    var ifscroll=false; //节流阀
    var scrollTimeout //声明计时器变量
    //向上滚函数
    function scrollUp() {

        if(scrollnum<1){
            clearTimeout(scrollTimeout)
            scrollTimeout=setTimeout(function () {
                scrollnum++;
            },100)
        }else if(!ifscroll){
          //可以开始滚动了
            ifscroll=true;
            scrollindex--

            if(scrollindex<=0){
                scrollindex=0;
            }
            move();
        }

    }
    //向下滚函数
    function scrollDown() {

        if(scrollnum<1){
          //清除定时器
            clearTimeout(scrollTimeout)
            scrollTimeout=setTimeout(function () {
                scrollnum++;
            },100)
        }else if(!ifscroll){
           //可以开始滚动了
            ifscroll=true;
            scrollindex++

            if(scrollindex>4){
                scrollindex=4;
            }
            move();
        }

    }
     //控制box滚动函数
    function move(){
       $(".box").animate({"top":-($(window).height()-49)*scrollindex+"px"},1000,function () {
            ifscroll=false;
            scrollnum=0;
        //第一个页面对应第一个点
       if(scrollindex==0){
          $li.removeClass("now").eq(0).addClass("now");
          return;
       }
       //第五个页面对应第4第5两个点
       if(scrollindex==4){
          $li.removeClass("now").eq(3).addClass("now");
          $li.eq(4).addClass("now");
       }
       else{
       	  $li.removeClass("now").eq(scrollindex-1).addClass("now");
        }
      })
    }
      //导航点击函数
         $li.click(function(){
            scrollindex=$(this).index()+1;
            if(scrollindex==5){
              scrollindex=4
            }
            move();
            
         })

       $(".downarrow").click(function(){
         $(".box").animate({"top":-($(window).height()-49)*1+"px"},1000)
       })

    //入口动画
    function welcome(){

      $(".welcome_animation>img").delay(5000).animate({"marginTop":"-0px"},2000,function () {
                $(".welcome_animation>.text").each(function (i) {
                    $(this).delay(i*1000).fadeIn(500);
                })
            })
      setTimeout(function(){
         $(".welcome_animation").slideUp()
      },13000)
    };
    welcome();
    //地址栏哈希滚动
    function hash_move(){
      var  hash=window.location.hash.slice(1);
        if(hash===0||hash==1||hash==2||hash==3||hash==4){
            scrollindex=hash;
            move();
            if(hash!=0){
                $(".welcome_animation").css("display","none");

            }
        }else {
            window.location.hash="";
            welcome();
        }
    }
     
})()

       //轮播图
  !(function(){
    var i=0;
    var $prev=$(".navigation_left");
    var $next=$(".navigation_right");
    var $banner=$(".slide_banner");
    //点击向右按钮
    $next.click(function(){
       
       i++;
       if (i>=2) {
        i=2;
        //按钮此时透明度变低,且指针变为普通
        $next.addClass("end").siblings().removeClass("end");
       }
       //重置按钮
       if (i==1) {
        $next.removeClass("end");
        $prev.removeClass("end");
       }
       fadeInFn("fadeInLeft");
    })
    //点击向右按钮
    $prev.click(function(){
      i--;
      if (i<=0) {
        i=0;
        $prev.addClass("end").siblings().removeClass("end");
      }
      if(i==1){
        $next.removeClass("end");
        $prev.removeClass("end");
      }
      fadeInFn("fadeInRight");
    })
    // 轮播滚动函数
    function fadeInFn(a){
       $banner.eq(i).removeClass().addClass("current animated "+a).siblings().removeClass("current animated "+a).addClass("hidden");
       $(".navigation").fadeIn();
    }

    //呼吸灯效果
    function LED(){
      $(".breath").delay(300).fadeOut(1500,function(){
        $(".breath").fadeIn(1500)
      })
    }
    setInterval(LED,2000);
  })()

   //蓝灰小鸟掌云轮播图
  !(function(){
     
     var ifslide=false; //定义节流阀
     var $banner=$(".slide>.description>div")
     //点击右边按钮
     $(".slide_right").click(function(){
      if (ifslide) {
        return;
      }
      else{
      $(".slide_left>span").animate({"left":"78px"},1000);
      $(".slide_right>span").animate({"left":"0px"},1000);
      $banner.eq(0).removeClass();
      $banner.eq(1).addClass("now animated fadeInLeft");
      ifslide=true;
        }
     })
     //点击左边按钮
      $(".slide_left").click(function(){
        if (!ifslide) {
        return;
      }
      else{
      $(".slide_left>span").animate({"left":"0px"},1000);
      $(".slide_right>span").animate({"left":"-78px"},1000);
      $banner.eq(1).removeClass();
      $banner.eq(0).addClass("now animated fadeInRight");
      ifslide=false;
       }
     })
  })()

    