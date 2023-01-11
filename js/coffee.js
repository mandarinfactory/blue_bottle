$(function(){
 $('.jey_prd1 .jey_left ul li:not(.jey_li4)').mouseenter(function(){
  $('.jey_prd1 .jey_right figure .jey_icon2').css({'animation':' icon 0.5s infinite'})
 }).mouseleave(function(){
  $('.jey_prd1 .jey_right figure .jey_icon2').css({'animation':'none'})
 })
 function jey_fnPrd1(){
  if(winW < 1200){
  $(`.jey_prd1 .jey_left .jey_li4`).addClass('active')
 }else{
  $(`.jey_prd1 .jey_left .jey_li4`).removeClass('active')
 } 
 }//fn
 jey_fnPrd1()
 $(window).resize(function(){
  jey_fnPrd1()
 })
 

/* prd 1 end----------------------------------------------------- */
$('.jey_prd2 .jey_top .jey_li2, .jey_prd2 .jey_top .jey_li3').mouseenter(function(){
  $('.jey_prd2 .jey_li1 .j_waviy').addClass('active')
 }).mouseleave(function(){
  $('.jey_prd2 .jey_li1 .j_waviy').removeClass('active')
 })

/* prd 2 end----------------------------------------------------- */
$('.jey_prd2 .jey_bottom .jey_li2').mouseenter(function(){
  $('.jey_prd2 .jey_li3 .j_waviy2').addClass('active')
 }).mouseleave(function(){
  $('.jey_prd2 .jey_li3 .j_waviy2').removeClass('active')
 })
/* prd 3 end----------------------------------------------------- */

})//ready