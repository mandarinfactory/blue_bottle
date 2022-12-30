
/* Header Sticky */
var fnHeaderSticky = ()=>{
    if (
      (winW < 1000 && scrY >= 20) /* mobile */ 
      ||
      (winW >= 1000 && scrY >= 30) /* deskTop */
    ) {
      $(`header`).addClass("active");
    } else {
      $(`header`).removeClass("active");
    } //if

    var ikMainTop = $('.ik_main_1');
    var t = (ikMainTop.length)&&ikMainTop.offset().top;

    if(scrY >= t - winH *0.8){
      $('.ik_main_1 .ik_title_box').addClass('active');
    }else{
      $('.ik_main_1 .ik_title_box').removeClass('active');
    }
}

fnHeaderSticky()
$(window).scroll(function(){
  fnHeaderSticky()
}).resize(function(){
  fnHeaderSticky()
})



////////////////////////////////////////////////////////////////

/* breadcrumb */

var currentPageAddr = location.href

$('.gnb>ul>li>a').each(function(){
  var href = $(this).attr('href').slice(1);
  if( currentPageAddr.match( href ) ){
    $('.gnb>ul>li').removeClass('active')
    $(this).parent().addClass('active')
  }
})
