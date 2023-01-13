<?php include 'dummy-sub-header.php' ?>
<link rel="stylesheet" href="./css/about/j_about_brand.css">
<link rel="stylesheet" href="./css/about/j_about_coffee.css">
<link rel="stylesheet" href="./css/about/j_sliderstyle.css">

<script src="./js/j_store.js"></script>
<script src="./js/type_effect.js"></script>
<script src="./js/responsive_carousel_horz.js"></script>
<script src="./js/j_about.js"></script>

<!-- main  아래 본문시작 -->
<section class="j_section_brand">
  <h3>our Brand</h3>
  <p>Whether you lean toward bold coffee blends or bright, more lightly roasted single origins, we want to help you find your favorites, whatever your coffee mood.</p>
</section>
<script>
  $('.j_section_brand').append('<ul class="j_brand_container"></ul>')
  jBrandArr.forEach(function(v, i) {
    $('.j_brand_container').append(`
      <li class="j_row j_row_${i}">
        <div class="j_brand_inner">
          <div class="type_container${i}"><h4>${v.title}</h4></div>
          <em>${v.year}</em>
          <div class="j_box">
            <figure>
              <img src="${v.src}" alt="">
            </figure>
            <div class="j_desc">
              <p>${v.desc}</p>
            </div>
          </div>
          <img class="j_sub_img1" src="${v.img1}" alt="">
          <img class="j_sub_img2" src="${v.img2}" alt="">
        </div>
      </li>
     `)
  })
  $('.j_brand_container .j_row_2 .j_brand_inner').append(`
      <figure class="j_last_pic">
        <img src="./img/brand/korea_bb_02.jpg" alt="">
      </figure>
    `)
</script>

<!-- j_brand_coffee scss에서 설정함  -->
<section class="j_section_coffee">
  <div class="j_circle">
    <div class="j_circle_bg"></div>
    <b>our COFFEE</b>
  </div>

  <div class="j_slider">
    <div class="j_overflow">
      <div class="col_width">
        <ul class="img_container"></ul>
        <script>
          jSliderArr.forEach(function(v){
            $('.j_slider .img_container').append(`
              <li>
                <div class="inner">
                  <img src="./img/brand/${v.img}">
                  <div class="j_textbox">
                    <h3>${v.no}</h3>
                    <p>${v.desc}</p>
                  </div>
                </div>
              </li>
            `)
          })
        </script>
      </div>
    </div>
    <button class="next">next</button>
    <button class="prev">prev</button>
    <div class="indicator"><!-- 클래스 이름 변경하지 말것 -->
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
    </div>
    <div class="progress"><!-- 클래스 이름 변경하지 말것 -->
      <div class="bar"></div>
    </div><!-- progress -->
  </div>

</section>
<!-- main  위 본문 끝 -->

<?php include 'dummy-footer.php' ?>