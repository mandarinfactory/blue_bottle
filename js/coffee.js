$(function () {
  $('.jey_prd1 .jey_left ul li:not(.jey_li4)').mouseenter(function () {
    $('.jey_prd1 .jey_right figure .jey_icon2').css({ 'animation': ' icon 0.5s infinite' })
  }).mouseleave(function () {
    $('.jey_prd1 .jey_right figure .jey_icon2').css({ 'animation': 'none' })
  })
  function jey_fnPrd1() {
    if (winW < 1200) {
      $(`.jey_prd1 .jey_left .jey_li4`).addClass('active')
    } else {
      $(`.jey_prd1 .jey_left .jey_li4`).removeClass('active')
    }
  }//fn
  jey_fnPrd1()
  $(window).resize(function () {
    jey_fnPrd1()
  })


  /* prd 1 end----------------------------------------------------- */
  $('.jey_prd2 .jey_top .jey_li2, .jey_prd2 .jey_top .jey_li3').mouseenter(function () {
    $('.jey_prd2 .jey_li1 .j_waviy').addClass('active')
  }).mouseleave(function () {
    $('.jey_prd2 .jey_li1 .j_waviy').removeClass('active')
  })

  /* prd 2-1 end----------------------------------------------------- */
  $('.jey_prd2 .jey_bottom .jey_li2').mouseenter(function () {
    $('.jey_prd2 .jey_li3 .j_waviy2').addClass('active')
  }).mouseleave(function () {
    $('.jey_prd2 .jey_li3 .j_waviy2').removeClass('active')
  })

  /* prd 2-2 end----------------------------------------------------- */
  $('.jey_prd3 .jey_right .jey_li2,.jey_prd3, .jey_right .jey_li3').mouseenter(function () {
    $('.jey_prd3 .jey_left .j_text').addClass('active')
  }).mouseleave(function () {
    $('.jey_prd3 .jey_left .j_text').removeClass('active')
  })
  /* menu ------------------------------------------------------ */
  
  Prd_MenuArr.forEach(function (v) {
   $('.jey_prd_menu .jey_menu3 .menubox ul').append(`  
           
   <li class="${v.class}"> 
           
   <figure>
   <h5>You can try <b>${v.roast}</b> roast coffee</h5> 
   <img src = "${v.img}">
   <figcaption>${v.menu}</figcaption>
   </figure>
   </li>
   `)
  })//forEach
  var j_str    
  var j_liNum
  $('.jey_prd_menu .jey_menu2 .jey_li3 .jey_btns button').click(function(){
     j_liNum = $(this).attr('data-n')  
    
    $('.jey_prd_menu .jey_menu3 .menubox ul li').removeClass('active')
    $(`.jey_prd_menu .jey_menu3 .menubox ul .jey_li${j_liNum}`).addClass('active')
    $(this).siblings('button').css({'background':'#999'}) 
    $(this).css({'background':'#00a9e0'})  
        
  })//click
  /*btn -------------------------------------- */



  /* prd 3 end----------------------------------------------------- */

})//ready