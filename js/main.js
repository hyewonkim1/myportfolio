$(function(){

  $('.wrap section').mousewheel(function(e,delta){
    if(delta > 0) { 
      // mousewhell up
      let prev = $(this).prev().offset().top;
      $('html, body').stop().animate({scrollTop:prev},1000);
    } else if(delta < 0) {
      let next = $(this).next().offset().top;
      $('html, body').stop().animate({scrollTop:next},1000);
    }
  }) //mousewheel event

  $('.lnb>a').click(function(e){
    e.preventDefault();
    $(window).scrollTo(this.hash || 0, 1000); 
  }) // lnb 


  $(window).scroll(function(){
    $('.wrap>section').each(function(){
      let sectionPoint = $(window).scrollTop();
      let target = $(this);
      let i = target.index();
      let lnbLi = $('.lnb>li');

      if(sectionPoint >= $(this).offset().top) {
        lnbLi.removeClass('on');
        lnbLi.eq(i).addClass('on');
      }
    })
  })


  $(window).scroll(function(){

    if($(this).scrollTop() == $('.page02').offset().top) {
      $('.sub_box02').fadeIn(500);
    } else {
      $('.sub_box02').fadeOut();

    }

    if($(this).scrollTop() == $('.page03').offset().top) {
      $('.page03 .sub_box03').fadeIn(500);
    } else {
      $('.page03 .sub_box03').fadeOut();
    }

    if($(this).scrollTop() == $('.page04').offset().top) {
      $('.page04-1').fadeIn(500);
      $('.page04-2').delay(500).fadeIn(500);
    } else {
      $('.page04-1').fadeOut();
      $('.page04-2').fadeOut();
    }

    if($(this).scrollTop() == $('.page05').offset().top) {
      $('.page05-1').fadeIn(500);
      $('.page05-2').delay(500).fadeIn(500);
    } else {
      $('.page05-1').fadeOut();
      $('.page05-2').fadeOut();
    }

    if($(this).scrollTop() == $('.page06').offset().top) {
      $('.page06 .sub_box06').fadeIn(500);
    } else {
      $('.page06 .sub_box06').fadeOut();
    }

    if($(this).scrollTop() == $('.page07').offset().top) {
      $('.page07-1').fadeIn(500);
      $('.page07-2').delay(500).fadeIn(500);
    } else {
      $('.page07-1').fadeOut();
      $('.page07-2').fadeOut();
    }

    if($(this).scrollTop() == $('.page08').offset().top) {
      $('.page08 .sub_box08').fadeIn(500);
    } 

  }) // window scroll event

  $('.top_btn').click(function(e){
    e.preventDefault();
    $(window).scrollTo(this.hash||0, 1000);
  }) // top버튼 event


  $(window).scroll(function(){

    if($(this).scrollTop() >= $('.page02').offset().top) {
      $('.top_btn').fadeIn();
      $('.lnb').fadeIn();
    } else {
      $('.top_btn').fadeOut();
      $('.lnb').fadeOut();
    }
  })









  
})


// 타이핑 효과
// 텍스트 요소 
const $text = document.querySelector(".text");
// 글자 모음 - 개행문자(\n)로 줄바꿈
const letters = [
  "HYEWON \n PORTFOLIO!"
];
// 글자 입력 속도
const speed = 100;
// 현재 지정된 글자 
let i = 0;
// 줄바꿈을 위한 <br> 
const changeLineBreak = (letter) => {
  return letter.map(text => text === "\n" ? "<br>" : text);
}
// 타이핑 기능 ( wait 기능을 위한 async, await )
const typing = async () => {  
  // 기존코드에서 개행치환코드 추가
  const letter = changeLineBreak(letters[i].split(""));
  
  while (letter.length) {
    // 글자 작성 속도 조절 
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  // 작성 된 후 잠시 멈추기 
  await wait(1000);
}

// 딜레이 기능 ( 마이크로초 )
// 텍스트가 작성되는 속도나 작성되고 텍스트가 멈추는 시간을 구현하기 위해 setTimeout함수로 딜레이를 주고, promise를 이용해서 딜레이 기능을 주는 함수 구현. 

function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
  // reslove 
}

// 초기 실행
setTimeout(typing, 500);


document.addEventListener('DOMContentLoaded',() => {

   // github icon mouseover event 
   let img01 = document.querySelector('.page04 .txt01-01 img')

   img01.addEventListener('mouseover', function() {
     this.setAttribute('src', './images/Github_on.png')
 
   },5000)
 
   img01.addEventListener('mouseout', () => {
     img01.setAttribute('src','./images/Github_off.png')
   },5000)


     
    // github icon mouseover event 
    let img04 = document.querySelector('.page07 .txt01-01 img')

    img04.addEventListener('mouseover', function() {
      this.setAttribute('src', './images/Github_on.png')
  
    },5000)
  
    img04.addEventListener('mouseout', () => {
      img04.setAttribute('src','./images/Github_off.png')
    },5000)
  
  
})

