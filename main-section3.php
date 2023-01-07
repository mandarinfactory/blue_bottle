<section class="ik_main3">
  <div class="ik_textbox">
    <h3>BlueBottle's Coffee</h3>
    <ul class="ik_text">
      <li>Whether blend or single origin,</li>
      <li>We treat all our coffees with equal care.</li>
      <li>For every coffee,</li>
      <li>We create a custom roast designed for the best</li>
      <li>expression of that flavor profile.</li>
      <li>with exact flavors to aim for and a scoring</li>
      <li>system to ensure</li>
      <li>we hit the mark every time.</li>
    </ul><!-- ul. text -->
  </div><!-- textbox -->

  <ul class="ik_main_list_container">
    <li class="ik_main_list_box">
      <p>Delicious Coffee Makes Life More Blissful</p>
      <button>
        <a href="./coffee.php">shop now</a>
      </button>
    </li>
  </ul>
</section><!-- ik_main3 slider-->
<script>
  main3Arr.forEach((v, i) => {
    $('.ik_main3>ul.ik_main_list_container').append(`
      <li class="ik_main_list ik_main_list_${i+1}">
        <figure class="ik_left">
          <img src="${v.img}">
          <a href="#">shop now</a>
        </figure>
        <div class="ik_right" data-n="${i+1}">
          <h3 class="ik_main3_title">${v.title}</h3>
          <p class="ik_desc">
            ${v.desc}
          </p>
          <img class="ik_mug" src="${v.cup}">
        </div>
      </li>
    `)
  })
</script>