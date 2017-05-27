/**
 * Created by Administrator on 2017/5/18/018.
 */

$(function () {

    !(function () {

        $(window).scroll(function () {
            //当页面高度大于500时候 scroll显示
            if($(window).scrollTop()>500){
                $(".scroll_top").fadeIn();
            }else {
                $(".scroll_top").fadeOut();
            }

        })
        var  $top=$(".scroll_top .top");
        var  $bottom=$(".scroll_top .bottom")
        $top.click(function () {

            $top.parent().animate({"bottom":"1000px"},1000,function () {
                $top.parent().css({"bottom":"158px","display":"none"})
            })

            $("body,html").scrollTop(0)

        })
        $bottom.click(function(){
            window.location.href="aboutxiaoniao.html#4";
        })


    })()


})