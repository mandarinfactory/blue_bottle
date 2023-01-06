$(function () {
  var selectNum = null;
  var prevNum = undefined;
  $(".ik_main3>ul.ik_main_list_container>li>.ik_right").click(function () {
    selectNum = parseInt($(this).attr("data-n"));

    if (selectNum !== prevNum) {
      $(this).parent().nextAll().removeClass("active");
      $(this).parent().addClass("active");
      $(this).parent().prevAll("li").addClass("active");
    } else {
      //같은 번호를 두번 클릭하면 모두 들어감

      $(".ik_main3>ul.ik_main_list_container>li").removeClass("active");
    }

    prevNum = selectNum;

    $(".ik_main3>ul.ik_main_list_container>li").not($(this).parent()).removeClass("active2");
    $(this).parent().toggleClass("active2");
  });
});