<?php include 'header.php' ?>
<script src="./js/sub.js" defer></script>

<!-- main  아래 본문시작 -->

<section class="ik_sub_visual">

</section>
<script>
  backgroundArr.forEach((v, i) => {
    $(`.ik_sub_visual`).append(`
    <div class="ik_sub_visual_inner ik_sub_visual_inner${i}">
      <img src='./img/sub_visual/${v.img}.jpg'>
      <h2 class="ik_sub_title">
        ${v.title}
      </h2>
      <p class="ik_sub_desc">
        ${v.desc}
      </p>    
    </div>
    `)
  })
</script>

<hr>

<body>
  <main>