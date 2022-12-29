var currentPageAddr = location.href.slice(0,-4)

$(`.ik_sub_visual>div`).each(function(v,i){
  var classNum = parseInt($(this).attr('class').slice(-1))
  var subTitle  
  if(classNum === 0){subTitle = 'about'}
  else if(classNum === 1){subTitle = 'coffee'}
  else{subTitle = 'cafes'}

  if( !currentPageAddr.match( subTitle ) ){
    $(`.ik_sub_visual_inner${classNum}`).hide()
  }
})

let fnActive = ()=>{
  var t = $('.ik_sub_visual').offset().top
  
  if(scrY >= t - winH * 0.5){
    $('.ik_sub_visual_inner').addClass('active')
  }else{
    $('.ik_sub_visual_inner').removeClass('active')
  }
}

fnActive()
$(window).scroll(function(){
  fnActive()
}).resize(function(){
  fnActive()
})