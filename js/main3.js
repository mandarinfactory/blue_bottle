$(function () {
  var selectNum = null;
  var prevNum = undefined;
  clickCnt = 0
  $(".ik_main3>ul.ik_main_list_container>li>.ik_right").click(function () {
    selectNum = parseInt($(this).attr("data-n"));
   
    if (selectNum !== prevNum  ) {
      $(this).parent().nextAll().removeClass("active");
      $(this).parent().addClass("active");
      $(this).parent().prevAll("li").addClass("active");
      console.log('열기');

    } else if(selectNum === prevNum && clickCnt === 0) {
      //같은 번호를 두번 클릭하면 모두 들어감
      clickCnt = 1
      $(".ik_main3>ul.ik_main_list_container>li").removeClass("active");

      console.log('같은번호클릭닫기');
    }else if(selectNum === prevNum && clickCnt === 1){
      clickCnt = 0
      $(this).parent().nextAll().removeClass("active");
      $(this).parent().addClass("active");
      $(this).parent().prevAll("li").addClass("active");
      console.log('같은번호클릭열기');

    }

    
    $('.ik_main3>ul.ik_main_list_container>li').not($(this).parent()).removeClass('active2')
    $(this).parent().toggleClass('active2')
    
    prevNum = selectNum
  })
  
})