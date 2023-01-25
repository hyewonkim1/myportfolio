

// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

$(function(){

    $(window).scroll(function(){
      if($(window).scrollTop()>=800) {
        $('.gnb_box').addClass('backcolor')
        $('.top_box').fadeIn(950);
        $('.logo_w').css('display','none')
        $('.logo').css('display','block')
        $('.btn_open i').css('color','#585858')
        $('.login').css('color','black')
        $('.join').css('color','black')
        $('.part').css('color','black')
   


    }else{
        $('.gnb_box').removeClass('backcolor');
        $('.top_box').fadeOut(950)
        $('.logo').css('display','none')
        $('.logo_w').css('display','block')
        $('.btn_open i').css('color','white')
        $('.login').css('color','white')
        $('.join').css('color','white')
        $('.part').css('color','white')
        
    } //scroll_event 


   



    $('.btn_top').click(function(e){
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop:0 
      },1000);

    })//bnt_top click_event

    
    //햄버튼 btn_menu 클릭하면 검정 로고 
    $('.btn_menu').click(function(){
      $('.gnb_box .logo').css('display','block')
    })


    // $('.card_section .reservation_box').mouseover(function(){
    //   $(this).addClass('.gradient-border')
    // })


  })





   //안내 info 메뉴 
   //Toggle
   let btnInfo = $('.info_menu_box>li');
   //let b = false;
    
   btnInfo.click(function(){

     $(this).children('ul').slideToggle('slow').parent('li').css('background-color', '#E21366').css('color','white')

     $(this).siblings('li').children('ul').slideUp('slow').parent('li').css('background-color','white').css('color','black');


    //변수 버튼 다시 눌렀을 때 버튼색상 사라지게 하고 싶을 경우.
    // if(!b) {
    //   $(this).children('ul').slideDown('slow').parent('li').css('background-color', '#E21366');

    //   // $(this).siblings('li').children('ul').slideUp('slow');
    //   b=true;

    // } else if(b) {
    //   $(this).children('ul').slideUp('slow').parent('li').css('background-color', 'white');

    //   // $(this).siblings('li').children('ul').slideUp('slow');
    //   b=false;
    // }


   })



   


   //안내 밑에 부산시보,통합예약,관광,부산시장 박스 스르륵
   //gsap사용
   let cardEls = document.querySelectorAll('.card_section>div')

   window.addEventListener('scroll',()=>{
    if(window.scrollY > 810) {
      gsap.to(cardEls[0],0.8,{
        opacity:1
      })
      gsap.to(cardEls[1],0.8,{
        delay:0.8,
        opacity:1
      })
      gsap.to(cardEls[2],0.8,{
        delay:1.6,
        opacity:1
      })
      gsap.to(cardEls[3],0.8,{
        delay:2.4,
        opacity:1
      })
    }
   })

//알림 밑에 박스 호버 효과






//소통 밑에 작은 메뉴들 호버 효과
$('.comm_box01').mouseover(function(){
  $('.comm_box01 img').attr('src','./images/ico_mic_w.png')
})
$('.comm_box01').mouseleave(function(){
  $('.comm_box01 img').attr('src','./images/ico_mic.png')
})

$('.comm_box02').mouseover(function(){
  $('.comm_box02 img').attr('src','./images/ico_note_w.png')
})
$('.comm_box02').mouseleave(function(){
  $('.comm_box02 img').attr('src','./images/ico_note.png')
})

$('.comm_box03').mouseover(function(){
  $('.comm_box03 img').attr('src','./images/ico_busantube_w.png')
})
$('.comm_box03').mouseleave(function(){
  $('.comm_box03 img').attr('src','./images/ico_busantube.png')
})

$('.comm_box04').mouseover(function(){
  $('.comm_box04 img').attr('src','./images/ico_facebook_w.png')
})
$('.comm_box04').mouseleave(function(){
  $('.comm_box04 img').attr('src','./images/ico_facebook.png')
})

$('.comm_box07').mouseover(function(){
  $('.comm_box07 img').attr('src','./images/ico_expo2030_w.png')
})
$('.comm_box07').mouseleave(function(){
  $('.comm_box07 img').attr('src','./images/ico_expo2030_b.png')
})







// $('.card div img').mouseover(function(){
//   $(this).attr('src',$(this).attr('src').replace('.png','_white.png'))
// },function(){
//   $(this).attr('src',$(this).attr('src').replace('_white.png','.png'))
// })

//부산 시보 안에 동그라미 이미지 호버 효과
  $('.card01').mouseover(function(){
    $('.card01 img').attr('src','./images/ico_dynamic_ko_white.png')
  })
  $('.card01').mouseleave(function(){
    $('.card01 img').attr('src','./images/ico_dynamic_ko.png')
  })

  $('.card02').mouseover(function(){
    $('.card02 img').attr('src','./images/ico_dynamic_en_white.png')
  })

  $('.card02').mouseleave(function(){
      $('.card02 img').attr('src','./images/ico_dynamic_en.png')
  })

  $('.card03').mouseover(function(){
    $('.card03 img').attr('src','./images/ico_dynamic_jp_white.png')
  })

  $('.card03').mouseleave(function(){
      $('.card03 img').attr('src','./images/ico_dynamic_jp.png')
  })

  $('.card04').mouseover(function(){
    $('.card04 img').attr('src','./images/ico_dynamic_cn_white.png')
  })

  $('.card04').mouseleave(function(){
      $('.card04 img').attr('src','./images/ico_dynamic_cn.png')
  })

  

  //관광 안에 동그라미 호버 효과 
  $('.tour01').mouseover(function(){
    $('.tour01 img').attr('src','./images/ico_visitbusan_white.png')
  })

  $('.tour01').mouseleave(function(){
      $('.tour01 img').attr('src','./images/ico_visitbusan.png')
  })

  $('.tour02').mouseover(function(){
    $('.tour02 img').attr('src','./images/ico_dabom_white.png')
  })

  $('.tour02').mouseleave(function(){
      $('.tour02 img').attr('src','./images/ico_dabom.png')
  })

  $('.tour03').mouseover(function(){
    $('.tour03 img').attr('src','./images/ico_galmaet_white.png')
  })

  $('.tour03').mouseleave(function(){
      $('.tour03 img').attr('src','./images/ico_galmaet.png')
  })

  $('.tour04').mouseover(function(){
    $('.tour04 img').attr('src','./images/ico_medicalbusan_white.png')
  })

  $('.tour04').mouseleave(function(){
      $('.tour04 img').attr('src','./images/ico_medicalbusan.png')
  })

  
  
    //알림 notice span 더보기 클릭
    $('.notice_span02').mouseover(function(){
      $(this).css('background-color','#585858');
      $(this).children('a').css('color','white');
    })
    $('.notice_span02').mouseleave(function(){
      $(this).css('background-color','white');
      $(this).children('a').css('color','black');
    })


    let notEls = document.querySelectorAll('.not_box .not li')



    window.addEventListener('scroll',()=>{
      if(window.scrollY > 820) {
    notEls.forEach((notEl,index)=>{
      gsap.to(notEl,1.5,{
        delay:index*0.8,
        opacity:1
      })
    })
  }
  })

    //알림 고시공고, 채용정보, 시험공고 go버튼 클릭
    $('.group_not01_go').click(function(){
      $(this).css('background-color','#585858');
      $(this).children('a').css('color','white');
    })

    $('.group_not02_go').click(function(){
      $(this).css('background-color','#585858');
      $(this).children('a').css('color','white');
    })

    $('.group_not03_go').click(function(){
      $(this).css('background-color','#585858');
      $(this).children('a').css('color','white');
    })


    //scrollTop이용 
    // $(window).scroll(function(){
    //   if(window.scrollY > 800) {
    //     $('.news_card01').fadeIn(500);
    //     $('.news_card02').delay(500).fadeIn(500);
    //     $('.news_card03').delay(1000).fadeIn(500);
    //     $('.news_card04').delay(1500).fadeIn(500);
    //   } else {
    //     $('.news_card_box .news_card>li').fadeOut();
    //   }
    // })


    let newsEls = document.querySelectorAll('.news_card li')

    window.addEventListener('scroll',()=>{
      if(window.scrollY > 830) {
        newsEls.forEach((newsEl,index)=>{
          gsap.to(newsEl,1.5,{
            delay:index*0.8,
            opacity:1
          })
        })
      }
    })



    var swiper = new Swiper(".artSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },


    });
  
    
    var swiper = new Swiper(".banner_Swiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    var swiper = new Swiper(".today_art_Swiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    
  
    $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 330
    });
  
  

    $('.banner_label').click(function(){
      $('.banner_more').slideToggle('slow')
    })//banner 더보기 





  })


  // site txt footer 수정
  $(function(){

    let tab = $('.site>li>label');
    let a = false;

    //Toggle
    tab.click(function(){

      // $(this).siblings('ul').slideToggle('slow');
      // $(this).parent('li').siblings('li').children('ul').slideUp('slow');
      // $(this).children('i').animate({rotate:'180deg'},300)

      if(!a) {
        $(this).siblings('ul').slideDown('slow');
        $(this).parent('li').siblings('li').children('ul').slideUp('slow');
        $(this).children('i').animate({rotate:'180deg'},300)
        a=true;
        
      } else if(a) {
        $(this).siblings('ul').slideUp('slow');
        $(this).parent('li').siblings('li').children('ul').slideUp('slow');
        $(this).children('i').animate({rotate:'360deg'},300)
        a=false;
      }
 
    })//footer site
  

  




    
  })

  



  


  



 
  