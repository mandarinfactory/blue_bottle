
$(function(){

/* ---------------------kettle------------------------- */
let fnKettle = () =>{
  var kettle = document.querySelector('.ik_mug img')
    var kettleTop = $('.ik_mug').offset().top
    
    if(scrY >= kettleTop - winH * 0.8){
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
  
/* ---------------------scroll SVG------------------------- */

var middle = document.querySelector('.ik_middle')
var path = document.querySelector('.ik_onePath path') 
var pathLength = path.getTotalLength()


const fnCalcDashoffset = (scrollY, el, length) => {
  let ratio = (scrollY - el.offsetTop) / el.offsetHeight
  let value = (length * ratio)-length 
  
  return (((value < 0) ? 0 : value )> length )? length : value
  // value 가 0  보다 작을경우 0 ,  value 가 0보다 크거나 같으면 value return
  // return한 value가 length보다 클 경우 length, 보다 작거나 같은경우 value return
  
}// 최초의 length값 -> 0으로 가도록 계산하고 strokeDashOffset에 대입해준다

const fnSvgScroll = ()=>{
  let scrollY = window.scrollY + (window.innerHeight *0.8)
  path.style.strokeDashoffset = fnCalcDashoffset(scrollY, middle, pathLength)
}

path.style.strokeDasharray = pathLength // path가 나타난 경우
path.style.strokeDashoffset = fnCalcDashoffset(window.innerHeight *0.8,middle,pathLength) // path가 사라진경우

window.addEventListener('scroll',fnSvgScroll)

/* ---------------scroll section2----------------------- */
var bg = document.querySelector('.ik_motion_img1')
var cup = document.querySelector('.ik_motion_img2')
var table = document.querySelector('.ik_motion_img3')
var topImg = document.querySelector('.ik_motion_text1')
var middleImg = document.querySelector('.ik_motion_text2')
var bottomImg = document.querySelector('.ik_motion_text3')

window.addEventListener('scroll', function() {
  var motionValue = window.scrollY;

  if (motionValue <= 700) {
    bg.style.top = (motionValue * 0.003) + '%'
    cup.style.left = (motionValue * 0.03) - 30 + '%';
    table.style.top = (-motionValue * 0.008) + 8 + '%';
    topImg.style.left = (motionValue * 0.08) - 80 + '%';
    middleImg.style.top = (-motionValue * 0.04) + 40 + '%';
    bottomImg.style.top = (-motionValue * 0.02) + 20 + '%';
  } else {
    bg.style.top = 0 + '%'
    cup.style.left = 0 + '%';
    table.style.top = 0 + '%';
    topImg.style.left = 0 + '%';
    middleImg.style.top = 0 + '%';
    bottomImg.style.top = 0 + '%';

  }
  document.querySelectorAll('.ik_motion_box img').forEach(v => {
    let opa = motionValue * 0.0015
    v.style.opacity = opa
  }) //forEach
}) //scroll

/* ----------------------------------------------------- */
})