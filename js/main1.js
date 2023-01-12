$(function(){
  let pamphlet = document.querySelector('.ik_pamphlet')
  let isClick = true

  pamphlet.addEventListener('click',(e)=>{
    
    if(isClick){
      pamphlet.classList.add('active')
      
      isClick = false
    }else{
      pamphlet.classList.remove('active')
      isClick = true
    }
  })

  /////////////////////////////////////////////////////////
  // coffee rain----
  /////////////////////////////////////////////////////////

  coffee('#coffee-container','./img/object/')

  /////////////////////////////////////////////////////////



})//ready