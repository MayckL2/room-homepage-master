let imgCarr= document.querySelector("#firt")
let avanco = 0

function next(){
  if(avanco != -1000){
    avanco -= 500
  }
  imgCarr.style.marginTop= avanco +"px"
}

function prev(){
  if(avanco != 0){
    avanco += 500
  }
  imgCarr.style.marginTop= avanco +"px"
}
