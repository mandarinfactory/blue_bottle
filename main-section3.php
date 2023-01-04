<section class="ik_main3">
  <ul class="ik_main_list_container">

  </ul>
</section><!-- ik_main3 slider-->
<script>
  
  main3Arr.forEach((v,i)=>{
    $('.ik_main3 ul').append(`
      <li class="ik_main_list_${i+1}">
        <div class="ik_right">
          <h3 class="ik_main3_title">${v.title}</h3>
          <p class="ik_desc">
            ${v.desc}
          </p>
          <button>커피보러가기</button>
          <img class="ik_mug" src="${v.cup}">
        </div>
        <figure class="ik_left">
          <img src="${v.img}">
        </figure>
      </li>
    `)
  })

</script>