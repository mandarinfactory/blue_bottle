    </main>
    </body>
    <footer>
      <section class="hj_high_section"></section>
      <section class="hj_low_section">
        <div class="hj_footer_box">
          <div class="hj_footer_menu">
            <ul>
              <li>
                <a href="./about.php">
                  About us
                </a>
              </li><!-- 연혁 -->
              <li>
                <a href="./coffee.php">
                  coffee
                </a>
              </li><!--  상품소개 -->
              <li>
                <a href="./cafes.php">
                  cafes
                </a>
              </li><!-- 가게위치 -->
            </ul>
          </div>
          <script>
            document.querySelector(".hj_footer_menu ul li a").addEventListener("click", e => {
              e.target.parentElement.classList.add("active")
            })//addEventListener
          </script>
          <div class="hj_footer_desc">
            <figure>
              <img src="./HJ/img/logo.png" alt>
            </figure>
            <ul>
              <li>bluebottle coffee company</li>
              <li>Copyright 2022 Bluebottle Team All Right Reserved.</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
    </body>

    </html>