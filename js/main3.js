$('.ik_main3>ul.ik_main_list_container>li>.ik_right').click(function(){
  
  var selectNum = parseInt($(this).attr('data-n'))
  
  $('.ik_main3>ul.ik_main_list_container>li>.ik_right').each(function(){
    var rightNum = parseInt($(this).attr('data-n'))
    
    if(selectNum < rightNum){
      $(this).parent().removeClass('active')
    }else{
      $(this).parent().toggleClass('active')
    }
  })
  
  $('.ik_main3>ul.ik_main_list_container>li').not($(this).parent()).removeClass('active2')
  $(this).parent().toggleClass('active2')
})