
$(function(){
  
  let fnKettle = () =>{
    var kettle = document.querySelector('.ik_mug img')
    var kettleTop = $('.ik_mug').offset().top
    
    if(scrY >= kettleTop - winH * 0.5){
      kettle.classList.add('active')
    }else{
      kettle.classList.remove('active')
    }
  }

  fnKettle()  
  $(window).scroll(function(){
    fnKettle()  
  }).resize(function(){
    fnKettle()  
  })

})