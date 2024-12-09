
function hide(id){
    let third=document.getElementById(id)
    third.style.transform='scale(0)'
}

function like(id){
    let like=document.getElementById(id)
    let x= like.innerText
    if(x<10){
        x++
        like.innerText=x
    }
    else{
        like.innerText='maxed'
    }

    
}
let m=9
let s=60
let min=document.getElementById('min')
let sec=document.getElementById('sec')

const timer= setInterval(()=>{
    if(s>0){
        s--
        sec.innerText=s
        min.innerText=m
    }
    else{
      
        if(m>0){
            s=60
        m--
        min.innerText=m
        }
        else{
            // s=0
            // sec.innerText=s
            setTimeout(()=>{
                clearInterval(timer)
            },600)
            
        }
    }

},10)
$(window).scroll(function(){
    if($(this).scrollTop() > 300){
      $('header').addClass('bg-dark')
    }
    else{
      $('header').removeClass('bg-dark')
    }
    
  })