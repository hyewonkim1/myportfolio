
    $(function(){
      
       $('.top_icon').click(function(e){
        e.preventDefault();
        /*$('html, body').stop().animate({
          scrollTop:0 //화면의 제일 위 좌표.
        },1000);*/

        //1.좌표로 이용
        // $(window).scrollTo({top:0,left:0}, 500);

        //2.플러그인
        //hash 이용.
        $(window).scrollTo(this.hash || 0, 500);


      })//bnt_top click_event

  
        $(".openPopup").on("click", function(event) {  //팝업오픈 버튼 누르면
        $(".login_popup").show(); 
        $('#user_id').focus();  
        //로그인창 오픈
        $("body").append('<div class="backon"></div>'); //뒷배경 생성
        });
        
        $("body").on("click", function(event) { 
            if(event.target.className == 'login_close' || event.target.className == 'backon'){
                $(".login_popup").hide(); 
                  $(".backon").hide();
            }
          });//로그인 화면 뜨는거 

          let id = 'green';
          let pw = 'abc';
          let userId;
          let userPw;
    
    
          $('#user_id').change(function(){
            userId = $('#user_id').val();
          $('#user_pw').change(function(){
            userPw = $('#user_pw').val();
          })
    
            $('.button_login').click(function(){
    
              // userId = $('#user_id').val();
              // userId = $('#user_id').val();
    
    
            if(id == userId) {
             if(pw == userPw) {
                  alert(userId + '님 방문을 환영합니다!');
                  $('#login').click();
                  //팝업창 x버튼 라벨을 login버튼과 id 같이 쓴다. 
                }else {
                  alert('비밀번호가 틀렸습니다.')
                }
              } else {
                alert('아이디가 틀렸습니다.')
            }
            });
    
    
        });// 로그인 과정
              
        $('#user_id').val('').focus();
        $('#user_pw').val('');
        // 기존에 있는 글자 clear하는 효과.
      
    })
  





    // 회원가입 창 
    function openWindow(){
      let newWin = window.open('join.html')
    }


    // popup
    // window.onload = function() {
 
    //   function offClick() {
    //       document.querySelector('.popup_wrap').style.display ='none';
    //   }
    
    //   document.querySelector('.popup_close').addEventListener('click', offClick);
    
    // };

    // 팝업창 
    $(function(){
      function offClick() {
        document.querySelector('.popup_wrap').style.display = 'none';
      }

      document.querySelector('.popup_close').addEventListener('click',offClick);
    })
