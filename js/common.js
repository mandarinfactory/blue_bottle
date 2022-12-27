/* 윈도우 information--------------------------------------------------------------------------- */

/* var 선언을 안하면 전역변수가 됨 */

function fnWinInfo() {
  window.scrY = $(window).scrollTop();
  window.scrX = $(window).scrollLeft();
  window.winH = $(window).innerHeight();
  window.winW = $(window).innerWidth();
} //fnWinInfo

fnWinInfo();
$(window)
  .scroll(function () {
    fnWinInfo();
  })
  .resize(function () {
    fnWinInfo();
  }); //windowEvt

/* ----------------------------------------------------------------------------- */
