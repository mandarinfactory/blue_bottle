$(function(){
  
  var type1 = new Type_effect('.type_container0', 100)
  var type2 = new Type_effect('.type_container1', 100)
  var type3 = new Type_effect('.type_container2', 100)
  var offset1 = $('.j_section_brand .j_row_0').offset().top
  var offset2 = $('.j_section_brand .j_row_1').offset().top
  var offset3 = $('.j_section_brand .j_row_2').offset().top

  function j_fnText(){
    if(scrY >= offset1 - winH*0.5){type1.play()}
    else{type1.reverse()}
    if(scrY >= offset2 - winH*0.5){type2.play()}
    else{type2.reverse()}
    if(scrY >= offset3 - winH*0.5){type3.play()}
    else{type3.reverse()}
  }

  j_fnText()
  $(window).scroll(function(){
    j_fnText()
  }).resize(function(){
    j_fnText()
  })
 
   
  function j_fnParallax(){
    $('.j_section_brand .j_row').each(function(){
      var offsetT = $(this).offset().top
      var h = $(this).innerHeight()
      var meta = 0 + (scrY - (offsetT - winH*0.5 + h*0.5)) * -0.15

      
      $(this).find('em').css({'transform':`translateY(${meta}px)`})
      $(this).find('.j_box').css({'transform':`translateY(${meta * 1.3}px)`})
      $(this).find('.j_sub_img1').css({'transform':`translateY(${meta}px)`})
      $(this).find('.j_sub_img2').css({'transform':`translateY(${meta*1.2}px)`})
      $(this).find('.j_last_pic').css({'transform':`translateY(${meta*1.5}px)`})

      if(scrY >= offsetT - winH * 0.5){
        $(this).addClass('active')

      } else{
        $(this).removeClass('active')

      }
    })


    
    
  }
  j_fnParallax()
  $(window).scroll(function(){
    j_fnParallax()
  }).resize(function(){
    j_fnParallax()
  })

  responsive_carousel_horz(".j_slider", false, 5000, 10000)
  

 




})