<section class="ik_main_2">
  <figure class="ik_mug">
    <img src="./img/object/kettle.png" alt="">
  </figure>
  <div class="ik_motion_box">
    <img class="ik_motion_img ik_motion_img1" src="./img/main_section/1_1.png" alt="">
    <img class="ik_motion_img ik_motion_img2" src="./img/main_section/1_2.png" alt="">
    <img class="ik_motion_img ik_motion_img3" src="./img/main_section/1_3.png" alt="">
    <img class="ik_motion_text ik_motion_text1" src="./img/main_section/text_1.png" alt="">
    <img class="ik_motion_text ik_motion_text2" src="./img/main_section/text_2.png" alt="">
    <img class="ik_motion_text ik_motion_text3" src="./img/main_section/text_3.png" alt="">
  </div><!-- ik_motion_box -->
</section><!-- ik_main2 parallax-->

<script>
  var bg = document.querySelector('.ik_motion_img1')
  var cup = document.querySelector('.ik_motion_img2')
  var table = document.querySelector('.ik_motion_img3')
  var topImg = document.querySelector('.ik_motion_text1')
  var middleImg = document.querySelector('.ik_motion_text2')
  var bottomImg = document.querySelector('.ik_motion_text3')

  window.addEventListener('scroll',function(){
    var motionValue = window.scrollY;
    
    cup.style.left = (-motionValue *0.03)+30 +'%';
    table.style.top = (motionValue*0.008)-8+'%';
    topImg.style.top = (motionValue*0.05)-50+'%';
    middleImg.style.top = (-motionValue*0.05)+50+'%';
    bottomImg.style.top = (-motionValue*0.02)+20+'%';
    
    document.querySelectorAll('.ik_motion_box img').forEach(v=>{
      let opa = motionValue * 0.002

      v.style.opacity = opa
    })//forEach
  })//scroll

</script>