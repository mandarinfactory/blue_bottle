<section class="ik_main3">
  <ul class="ik_main_list_container">
    <li class="ik_first_list_box">
      <p>Delicious Coffee Makes Life More Blissful</p>
      <button>
        <a href="./coffee.php">shop now</a>
      </button>
    </li><!-- first list -->
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
          <div class="inner">
            <h3 class="ik_main3_title">${v.title}</h3>
            <p class="ik_desc">
              ${v.desc}
            </p>
            <img class="ik_mug" src="${v.cup}">
          </div>
        </div>
      </li>
    `)
  }) 
</script>