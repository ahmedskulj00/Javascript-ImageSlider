var slider_img = document.getElementById("images");
var images = ["Image1.jpg", "Image2.jpg", "Image3.jpg"];
var titleHL2 = document.getElementsByClassName("title")[0];
var titleMF2 = document.getElementsByClassName("title")[1];
var titleAC2 = document.getElementsByClassName("title")[2];
var i = 0;

titleHL2.style.display = "block"
titleAC2.style.display = "none"
titleMF2.style.display = "none"

function prev() {
  if (i <= 0) i = images.length;
  i--;
  setTitle();
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  setTitle()
  return setImg();
}

function setImg() {
  return slider_img.setAttribute("src", "images/" + images[i]);
}

function setTitle(){
  if (i == 0){
    titleHL2.style.display = "block"
    titleAC2.style.display = "none"
    titleMF2.style.display = "none"
  }
  else if (i == 1){
    titleMF2.style.display = "block"
    titleHL2.style.display = "none"
    titleAC2.style.display = "none"
  }
  else if (i == 2){
    titleAC2.style.display = "block"
    titleHL2.style.display = "none"
    titleMF2.style.display = "none"
  }
}