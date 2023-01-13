$(function () {
  var selectNum = null;
  var prevNum = undefined;
  clickCnt = 0
  $(".ik_main3>ul.ik_main_list_container>li>.ik_right").click(function () {
    selectNum = parseInt($(this).attr("data-n"));
    
    let list = $(this).parent() 
   
    if (selectNum !== prevNum) {
      list.nextAll().removeClass("active");
      list.addClass("active");
      list.prevAll("li").addClass("active");
      clickCnt = 1
      console.log('열기');
    } else if(selectNum === prevNum && clickCnt === 1) {
      clickCnt = 0
      //같은 번호를 두번 클릭하면 모두 들어감
      $(".ik_main3>ul.ik_main_list_container>li").removeClass("active");
      console.log('같은번호클릭닫기');
    }else if(selectNum === prevNum && clickCnt === 0){
      clickCnt = 1
      list.nextAll().removeClass("active");
      list.addClass("active");
      list.prevAll("li").addClass("active");
      console.log('같은번호클릭열기');
    }
    
    $('.ik_main3>ul.ik_main_list_container>li').not(list).removeClass('active2')
    list.toggleClass('active2')
    
    prevNum = selectNum
  })
})