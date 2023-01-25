 //모바일 아코디언 
$(function(){
  $('#accordion').accordion({});
})

//loyal 테블릿,웹

$(function(){
  const tab = $('.loyal_web .tab li');
  const sheet = $('.loyal_web .sheet div');

  tab.click(function(){
    let target = $(this);
    //내가 지금 누른 li가 target변수에 들어간다.
    let i = target.index();
    //인덱스 번호가 필요하다. 
    //let i = $(this).index();라고 적어도 된다. 

    tab.removeClass('on');
    tab.eq(i).addClass('on');
    //내가 찾은 i와 인덱스 값이 같은거에 클래스 on을 시켜라.

    sheet.removeClass('on_sheet');
    sheet.eq(i).addClass('on_sheet');
  })//tab click_event

})


//댓글창

document.querySelector('.btn_reply').addEventListener('click',()=>{

  let reply = document.querySelector('.reply')
  let newP = document.createElement('p')
  let newText = document.createTextNode(reply.value)

  newP.appendChild(newText)

  let newSpan = document.createElement('span')
  let spanText = document.createTextNode('X')

  newSpan.appendChild(spanText)
  newSpan.setAttribute('class','delete')
  newP.appendChild(newSpan)
  document.body.appendChild(newP)

  let replyList = document.querySelector('.reply_list')

  replyList.insertBefore(newP,replyList.childNodes[0])

  reply.value = ''
  reply.focus()

  let delBtn = document.querySelectorAll('.delete')

  for(let i=0; i<delBtn.length; i++) {
    delBtn[i].addEventListener('click',function(){
      if(this.parentNode.parentNode) {
        this.parentNode.parentNode.removeChild(this.parentNode)
      }
    })
  }
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


    $('.btn_top').click(function(e){
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop:0 
      },1000);

    })//bnt_top click_event


