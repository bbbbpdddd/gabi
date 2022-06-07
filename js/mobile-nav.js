$(function(){
  //현재 기기의 운영체제의 값을 가져옮 
  var myAgent=navigator.userAgent.toLowerCase();
  
      var mobile=["iphone","ipod","android","blackberry","window ce","nokia","webos","opera mine","sonyericsson","opera mobi","iemobile"];
  
      console.log("운영체제 확인 : "+myAgent) 
      for(i=0; i<mobile.length; i++){
  
          if(myAgent.indexOf(mobile[i])>=0){ 
              var bool=true; 
              break; 
          }
          
      }
      console.log("운영체제 값 "+myAgent.indexOf()); //확인
      if(bool){
  
          mo(); 
      }else{
  
          pc();
      } 
    function mo(){
      $(".gnb-nav>li").click(function(){
        if($(this).find(".m-drop-down").is(":hidden")){ 
          // 현재 li이의 자손 중에서 m-drop-down이 닫혀있니?
          // 닫혀 있으면 처리
          $(".m-drop-down").slideUp(); //모든 서브메뉴 닫힘
          $(this).find(".m-drop-down").slideDown(); //현재 li에 속한 서브메뉴만 보임
          $(".gnb-nav li i").attr("class","fa fa-chevron-right") //모든 li a의 아이콘 변경
          $(this).find("i").attr("class","fa fa-chevron-down") // 현재 li a의 아이콘 변경
        }else{
          //열려 있을 때 처리
          $(".m-drop-down").slideUp(); //모든 서브메뉴가 닫힘, 현재 서브메뉴가 열려 있을 때도 닫힘
          $(".gnb-nav li i").attr("class","fa fa-chevron-right"); //모든 li의 a의 아이콘 복귀 변경
        } 
      });
  
      var bool=true;
      $(".m-open").click(function(){
        if(bool){
          $(".gnb-content-wrap").addClass("move");
          $("html,body").css({
            overflow:"hidden"
          })
          bool=false;
        }else{
          $(".gnb-content-wrap").removeClass("move");
          $("html,body").css({
            overflow:"auto"
          })
          bool=true;
        }
        
      });
  
      $(".m-close").click(function(){
        $(".gnb-content-wrap").removeClass("move");
        $("html,body").css({
          overflow:"auto"
        })
        bool=true;
      })
    }
    
    
    function pc(){
      $(".gnb-nav>li").hover(
        function(){
          
          $(this).find(".m-drop-down").stop().slideDown(); //현재 li에 속한 서브메뉴만 보임
          
          $(this).find("i").attr("class","fa fa-chevron-down") // 현재 li a의 아이콘 변경
        },
        function(){
          $(".m-drop-down").stop().slideUp(); //모든 서브메뉴가 닫힘, 현재 서브메뉴가 열려 있을 때도 닫힘
          $(".gnb-nav li i").attr("class","fa fa-chevron-right"); //모든 li의 a의 아이콘 복귀 변경
  
        }
      );
      $(".mobile-nav").hover(
        function(){
          $(".gnb-content-wrap").addClass("move");
        },
        function(){
          $(".gnb-content-wrap").removeClass("move");
        }
      );
  
      $(".m-close").click(function(){
        $(".gnb-content-wrap").removeClass("move");
        bool=true;
      })
    }

    // var $circle=$(".circle").width();
    // $(".circle").css({
    //   height:$circle
    // })
    // $(window).resize(function(){
    //   var $circle=$(".circle").width();
    //   $(".circle").css({
    //     height:$circle
    //   })
    // });
  });