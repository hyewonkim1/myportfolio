import bottomList from "./data.js";

const section = document.querySelector('.bottom_list')


for(let i=0; i<bottomList.length; i++) {

// 이미지 넣기
let bestDiv = document.createElement('div')
bestDiv.setAttribute('class','best_box')

let bestImg = document.createElement('img')
bestImg.setAttribute('src',bottomList[i].src)

bestDiv.appendChild(bestImg)


bestImg.addEventListener('mouseover',function(){
  bestImg.setAttribute('src',bottomList[i].hoversrc)
})
bestImg.addEventListener('mouseout',function(){
  bestImg.setAttribute('src',bottomList[i].src)
})

// 컬러 넣기
let colorDiv = document.createElement('div')
colorDiv.setAttribute('class','color_box')

let color01Div = document.createElement('div')
color01Div.setAttribute('class','color01')

let color02Div = document.createElement('div')
color02Div.setAttribute('class','color02')

let color03Div = document.createElement('div')
color03Div.setAttribute('class','color03')

let color04Div = document.createElement('div')
color04Div.setAttribute('class','color04')

let color05Div = document.createElement('div')
color05Div.setAttribute('class','color05')

let color06Div = document.createElement('div')
color06Div.setAttribute('class','color06')

let color07Div = document.createElement('div')
color07Div.setAttribute('class','color07')

let color08Div = document.createElement('div')
color08Div.setAttribute('class','color08')

let color09Div = document.createElement('div')
color09Div.setAttribute('class','color09')

let color10Div = document.createElement('div')
color10Div.setAttribute('class','color10')

colorDiv.appendChild(color01Div)
colorDiv.appendChild(color02Div)
colorDiv.appendChild(color03Div)
colorDiv.appendChild(color04Div)
colorDiv.appendChild(color05Div)
colorDiv.appendChild(color06Div)
colorDiv.appendChild(color07Div)
colorDiv.appendChild(color08Div)
colorDiv.appendChild(color09Div)
colorDiv.appendChild(color10Div)

bestDiv.appendChild(colorDiv)

// 리뷰 넣기
let reviewDiv = document.createElement('div')
reviewDiv.setAttribute('class','review')
let reviewText = document.createTextNode(bottomList[i].review)
reviewDiv.appendChild(reviewText)
bestDiv.appendChild(reviewDiv)

// 상품 이름
let bestNameDiv = document.createElement('div')
bestNameDiv.setAttribute('class','name')

let bestNameText = document.createTextNode(bottomList[i].name)

bestNameDiv.appendChild(bestNameText)
bestDiv.appendChild(bestNameDiv)

// 상품 가격
let bestPriceDiv = document.createElement('div')
bestPriceDiv.setAttribute('class','bestprice')

let salePriceDiv = document.createElement('div')
salePriceDiv.setAttribute('class','saleprice')
let salePriceText = document.createTextNode(bottomList[i].saleprice)

let priceDiv = document.createElement('div')
priceDiv.setAttribute('class','price')
let priceText = document.createTextNode(bottomList[i].price)

salePriceDiv.appendChild(salePriceText)
priceDiv.appendChild(priceText)

bestPriceDiv.appendChild(salePriceDiv)
bestPriceDiv.appendChild(priceDiv)

bestDiv.appendChild(bestPriceDiv)

// 코멘트
let commentDiv = document.createElement('div')
commentDiv.setAttribute('class','comment')

let com01 = document.createElement('div')
com01.setAttribute('class','com01')
let com01Text = document.createTextNode(bottomList[i].comment01)

let com02 = document.createElement('div')
com02.setAttribute('class','com02')
let com02Text = document.createTextNode(bottomList[i].comment02)

let com03 = document.createElement('div')
com03.setAttribute('class','com03')
let com03Text = document.createTextNode(bottomList[i].comment03)

let com04 = document.createElement('div')
com04.setAttribute('class','com04')
let com04Text = document.createTextNode(bottomList[i].comment04)

com01.appendChild(com01Text)
com02.appendChild(com02Text)
com03.appendChild(com03Text)
com04.appendChild(com04Text)

commentDiv.appendChild(com01)
commentDiv.appendChild(com02)
commentDiv.appendChild(com03)
commentDiv.appendChild(com04)

bestDiv.appendChild(commentDiv)


section.appendChild(bestDiv)
// 최종

}
 // 회원가입 창 
  function openWindow(){
  let newWin = window.open('join.html')
  }

// sub page 아무거나 클릭하면 detail_page로 이동 
$('.bottom_list>div>img').click(function(){
  location.href = '../detail_page/detail_index.html';
});

// sub_page에 swiper사용 
var swiper = new Swiper(".subSwiper", {
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


//bnt_top click_event
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




 $(".openPopup").on("click", function(event) {  
  //팝업오픈 버튼 누르면
  $(".login_popup").show(); 
  $('#user_id').focus();  
  //로그인창 오픈
  $("body").append('<div class="backon"></div>'); 
  //뒷배경 생성
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
