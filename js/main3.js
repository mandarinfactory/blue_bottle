$(function () {
  var selectNumLg = null;
  var prevNumLg = undefined;
  clickCntLg = 0
  $(".ik_main3>ul.ik_main_list_container_lg>li>.ik_right").click(function () {
    selectNumLg = parseInt($(this).attr("data-n"));
    
    let list = $(this).parent() 
   
    if (selectNumLg !== prevNumLg) {
      list.nextAll().removeClass("active");
      list.addClass("active");
      list.prevAll("li").addClass("active");
      clickCntLg = 1
      console.log('열기');
    } else if(selectNumLg === prevNumLg && clickCntLg === 1) {
      clickCntLg = 0
      //같은 번호를 두번 클릭하면 모두 들어감
      $(".ik_main3>ul.ik_main_list_container_lg>li").removeClass("active");
      console.log('같은번호클릭닫기');
    }else if(selectNumLg === prevNumLg && clickCntLg === 0){
      clickCntLg = 1
      list.nextAll().removeClass("active");
      list.addClass("active");
      list.prevAll("li").addClass("active");
      console.log('같은번호클릭열기');
    }
    
    $('.ik_main3>ul.ik_main_list_container_lg>li').not(list).removeClass('active2')
    list.toggleClass('active2')
    
    prevNumLg = selectNumLg
  })


  $(".ik_main3>ul.ik_main_list_container_sm>li.ik_btn_box>button").click(function () {
    let selectNumSm = parseInt($(this).attr("data-n"));
    let selectList = $(`.ik_main_list_container_sm li.ik_main_list_${selectNumSm}`)

    $(`.ik_main_list_container_sm li.ik_main_list`).not(selectList).removeClass('active')
    selectList.toggleClass('active')

  })
})