function coffee(container,imgFolder){
  var container = container
  var imgFolder = imgFolder
  function makeCoffee(){
    $(container).empty()
    var w = $(container).width()
    var h = $(container).height()
    var coffeeCnt = w * 0.02
    for(i=1;i<=coffeeCnt;i++){
      var n = Math.ceil(Math.random() * 6)
      $(container).append('<img src='+imgFolder+'/bean0'+n+'.png>');
      var w = Math.floor(Math.random()*20) + 20
      var o = Math.random()*0.6 + 0.4
      var l = Math.ceil(Math.random()*100) 
      var s = Math.ceil(Math.random()*100) + 10
      var r = Math.floor(Math.random()*361)
      $(container).children('img:last-child').css({
        'width': w,
        'opacity': o,
        'left' : l + '%',
        'transform':'rotate('+r+'deg)',
        'animation-duration' : s + 's',
      })
    }  
  }
  makeCoffee()
  $(window).resize(function(){
    makeCoffee(container,imgFolder)
  })
}//fn

