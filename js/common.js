$(document).ready(function(){
  var indexP=0
  var moveTop=0;
  var sectionHeight=0;
  var winWidth=null;
  var winHeight=null;
  var autoNum=0;
  var lastTop=$("#s3").offset().top;
  function winSize(){
    winWidth=$(window).width();
    winHeight=$(window).height();
    $(".section").css({
      height:winHeight
    });
    lastTop=$("#s3").offset().top;
  };
  winSize();
  $(window).resize(function(){
    winSize();
    scrollEvent();
  });
  function page(indexP){
    $(".pn a").removeClass("v-active");
    $(".line").removeClass("v-active");
    $(".pn a").eq(indexP).addClass("v-active");
    $(".pn a").eq(indexP).find(".line").addClass("v-active");
  }
  $(".pn a").each(function(indexP){
    $(this).click(function(){
      var $hash=$(this.hash).offset().top;
      $(".pn a").removeClass("v-active");
      $(".line").removeClass("v-active");
      $(this).addClass("v-active");
      if($hash==lastTop){
        $("header").addClass("back")
      }else{
        $("header").removeClass("back")
      }
      $(this).find(".line").addClass("v-active");
      $("html,body").stop().animate(
        {
          scrollTop:$hash
      });
      console.log("index : "+indexP)
      autoNum=indexP+1;
      return false;
    });
  });
  function wheel(){
    winSize(); 
    $(".section").each(function(index){
      $(this).on('DOMMouseScroll mousewheel', function(e){
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
          console.log("올렸어요");
          if($(this).prev()!=undefined){
            moveTop=$(this).prev().offset().top;
            indexP=index-1;
            page(indexP)
          }
        }else{
          console.log("내렸어요")
          if($(this).next()!=undefined){
            moveTop=$(this).next().offset().top;
            indexP=index+1;
            page(indexP)
          }
        }
        autoNum=indexP;
        $("html,body").stop().animate({
          scrollTop:moveTop
        },700);
        console.log("indexP : "+indexP)
        if(moveTop==lastTop){
          $("header").addClass("back")
        }else{
          $("header").removeClass("back")
        }
        $(window).resize(function(){
          var winHeight=$(window).height();
          $(".section").css({
            height:winHeight
          });
          $("html,body").stop().animate({
            scrollTop:winHeight*indexP 
          },0);
        });
      });
    });
  }
  wheel();
  function scrollEvent(){
    $(".section").each(function(indexP){
      $(window).scroll(function(){
        var winScrollTop=$(window).scrollTop();
        if(winScrollTop+$(window).height()/2 > $(".section").eq(indexP).offset().top){
          page(indexP);
        }
      });
    });
  }
  scrollEvent();
  // function autoPlayv(){
  //   autoV=setInterval(function(){    
  //     if(autoNum<5){

  //       $("html,body").stop().animate({
  //         scrollTop:$(".section").eq(autoNum).offset().top
  //       },700);
  //       page(autoNum);
  //       autoNum++;
  //     }else{
  //       autoNum=0;
  //     }
  //   },5000);
  // }
  // autoPlayv();
  $(window).resize(function(){
      wheel();
  });
});