$(function(){


  $('.lnb a').click(function(e){
    e.preventDefault();
    $(window).scrollTo(this.hash || 0, 1000); 
  }) // lnb 


  $(window).scroll(function(){
    $('.wrap section').each(function(){
      let sectionPoint = $(window).scrollTop();
      let target = $(this);
      let i = target.index();
      let lnbLi = $('.lnb li');

      if(sectionPoint >= $(this).offset().top) {
        lnbLi.removeClass('on');
        lnbLi.eq(i).addClass('on');
      }
    })
  }) //lnb on 



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









  



// 타이핑 효과

const $text = document.querySelector(".text");
const letters = [
  "HYEWON \n PORTFOLIO!"
];
const speed = 100;
let i = 0; 
const changeLineBreak = (letter) => {
  return letter.map(text => text === "\n" ? "<br>" : text);
}

const typing = async () => {  

  const letter = changeLineBreak(letters[i].split(""));
  
  while (letter.length) {

    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }

  await wait(1000);
}



function wait(ms) {
  return new Promise(res => setTimeout(res, ms))

}


setTimeout(typing, 500);


document.addEventListener('DOMContentLoaded',() => {

   // github icon mouseover event 
   let img01 = document.querySelector('.page04 .txt01-01 img')

   img01.addEventListener('mouseover', function() {
     this.setAttribute('src', './images/Github_on.png')
 
   })
 
   img01.addEventListener('mouseout', () => {
     img01.setAttribute('src','./images/Github_off.png')
   })



    let img03 = document.querySelector('.page06 .txt01-01 img')

    img03.addEventListener('mouseover', function() {
      this.setAttribute('src', './images/Github_on.png')
  
    })
  
    img03.addEventListener('mouseout', () => {
      img03.setAttribute('src','./images/Github_off.png')
    })


     
 
    let img04 = document.querySelector('.page07 .txt01-01 img')

    img04.addEventListener('mouseover', function() {
      this.setAttribute('src', './images/Github_on.png')
  
    })
  
    img04.addEventListener('mouseout', () => {
      img04.setAttribute('src','./images/Github_off.png')
    })
  
  
})
})
