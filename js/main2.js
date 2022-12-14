
$(function(){

/* ---------------------kettle------------------------- */
let fnKettle = () =>{
  var kettle = document.querySelector('.ik_kettle img')
  var back = document.querySelector('main>.ik_back')
  var kettleTop = $('.ik_kettle').offset().top

    
    if(scrY >= kettleTop - winH * 0.7){
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
  let scrollY = window.scrollY + (window.innerHeight*0.6)
  path.style.strokeDashoffset = fnCalcDashoffset(scrollY, middle, pathLength)
}

path.style.strokeDasharray = pathLength // path가 나타난 경우
path.style.strokeDashoffset = fnCalcDashoffset(window.innerHeight*0.6,middle,pathLength) // path가 사라진경우

window.addEventListener('scroll',fnSvgScroll)
window.addEventListener('resize',fnSvgScroll)

/* ---------------scroll section2----------------------- */
var bg1 = document.querySelector('.ik_motion_img1_lg')
var cup1 = document.querySelector('.ik_motion_img2_lg')
var table1 = document.querySelector('.ik_motion_img3_lg')
var topImg1 = document.querySelector('.ik_motion_text1_lg')
var middleImg1 = document.querySelector('.ik_motion_text2_lg')
var bottomImg1 = document.querySelector('.ik_motion_text3_lg')

var bg2 = document.querySelector('.ik_motion_img1_sm')
var cup2 = document.querySelector('.ik_motion_img2_sm')
var table2 = document.querySelector('.ik_motion_img3_sm')
var topImg2 = document.querySelector('.ik_motion_text1_sm')
var middleImg2 = document.querySelector('.ik_motion_text2_sm')
var bottomImg2 = document.querySelector('.ik_motion_text3_sm')

window.addEventListener('scroll', function() {
  var motionValue = window.scrollY;

  if (motionValue <= 400) {
    cup1.style.left = (motionValue * 0.03) - 30 + '%';
    table1.style.left = (-motionValue * 0.008) + 8 + '%';
    topImg1.style.left = (motionValue * 0.08) - 80 + '%';
    middleImg1.style.top = (-motionValue * 0.04) + 40 + '%';
    bottomImg1.style.top = (-motionValue * 0.02) + 20 + '%';
    /////////////////////   lg   sm
    cup2.style.left = (motionValue * 0.03) - 30 + '%';
    table2.style.left = (-motionValue * 0.008) + 8 + '%';
    topImg2.style.left = (motionValue * 0.08) - 80 + '%';
    middleImg2.style.top = (-motionValue * 0.04) + 40 + '%';
    bottomImg2.style.top = (-motionValue * 0.04) + 40 + '%';
  } else {
    cup1.style.left = 0 + '%';
    table1.style.left = 0 + '%';
    topImg1.style.left = 0 + '%';
    middleImg1.style.top = 0 + '%';
    bottomImg1.style.top = 0 + '%';
    /////////////////////   lg   sm
    cup2.style.left = 0 + '%';
    table2.style.left = 0 + '%';
    topImg2.style.left = 0 + '%';
    middleImg2.style.top = 0 + '%';
    bottomImg2.style.top = 0 + '%';

  }
  document.querySelectorAll('.ik_motion_box img').forEach(v => {
    let opa = motionValue * 0.0015
    v.style.opacity = opa
  }) //forEach

}) //scroll

/* --------------middle text box-------------------------------- */

const fnActiveText = () => {
  let scrY = window.scrollY
  let winH = window.innerHeight
  let textBox = document.querySelector('.ik_middle>.ik_textbox') 
  let t = textBox.offsetTop
  return (scrY > t - winH * 0.2)? textBox.classList.add('active') : textBox.classList.remove('active')
}

fnActiveText()
window.addEventListener('scroll', ()=>{fnActiveText()})
window.addEventListener('resize', ()=>{fnActiveText()})

})//ready