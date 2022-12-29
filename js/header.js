
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
  var href = $(this).attr('href').slice(1)
  if( currentPageAddr.match( href ) ){
    $('.gnb>ul>li').removeClass('active')
    $(this).parent().addClass('active')
  }
})
