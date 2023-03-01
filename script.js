let imgCarr = document.querySelector("#firt")
let avanco = 0
let menu = document.querySelector("#menu")
let close = document.querySelector(".close")
let imgMain= document.querySelector(".imgMain")
let number= 1

function next() {
  if (avanco != -1000) {
    avanco -= 500
    number += 1
  }
  imgCarr.style.marginTop = avanco + "px"

  imgMain.setAttribute("src", "images/desktop-image-hero-"+ number +".jpg")
}

function prev() {
  if (avanco != 0) {
    avanco += 500
    number -= 1
  }
  imgCarr.style.marginTop = avanco + "px"

  imgMain.setAttribute("src", "images/desktop-image-hero-"+ number +".jpg")
}

function hambur() {
  menu.style.zIndex = "1"
}

function fecha(){
  menu.style.zIndex = "-1"
}