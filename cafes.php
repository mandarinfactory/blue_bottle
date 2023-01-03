<?php include 'sub-header.php' ?>
<!-- main  아래 본문시작 -->
<link rel="stylesheet" href="./css/cafes/cafes.css">
<script src="https://kit.fontawesome.com/7d1f9ca95d.js" crossorigin="anonymous"></script>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ia4i567onk"></script>
<section class="hj_cafes_high_section">
  <h3><b>블루</b>보틀 커피</h3>
  <ul>
    <li>맛있는 커피를 만나기 위한 여정,</li>
    <li>커피 나무에서 꽃이 피는 순간부터 카페에서 한잔의 커피로 탄생까지,</li>
    <li>일관되고 정확한 공정을 통한 끊임없는 노력이 필요합니다.</li>
    <li>블루보틀 카페에서는 맛있는 커피를 즐길 수 있는 공간 그리고 따뜻한 환대가</li>
    <li>조화롭게 더해져 블루보틀의 커피를 보다 편안하게 즐기실 수 있습니다.</li>
  </ul>
</section>
<section class="hj_cafes_map_section">
  <div class="hj_photo">
    <span></span>
    <figure>
      <img src="./HJ/img/coffee.jpg" alt />
      <figcaption>
        <p>
          맛있는 커피로 세상을 연결한다는 믿음으로
          항상 방문하시는 손님들에게 접대하는 마음을 담아
          커피를 만들고 있습니다.
          여러분이 원하는 카페 매장을 눌러보세요.
        </p>
      </figcaption>
    </figure>
    <p class="button">
      <button onclick="panTo1()" data-num="0">여의도</button>
      <button onclick="panTo2()" data-num="1">명동</button>
      <button onclick="panTo3()" data-num="2">광화문</button>
      <button onclick="panTo4()" data-num="3">삼청</button>
      <button onclick="panTo5()" data-num="4">삼청한옥</button>
      <button onclick="panTo6()" data-num="5">한남</button>
      <button onclick="panTo7()" data-num="6">성수</button>
      <button onclick="panTo8()" data-num="7">역삼</button>
      <button onclick="panTo9()" data-num="8">압구정</button>
      <button onclick="panTo10()" data-num="9">제주</button>
    </p>
  </div>
  <div id="map" style="width: 50%; height: 100%"></div>
</section>

<script src="./js/cafes/map.js"></script>
<script src="./js/cafes/store.js"></script>
<!-- main  위 본문 끝 -->

<?php include 'footer.php' ?>