$(function(){
  let pamphlet = document.querySelector('.pamphlet')
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


})//ready