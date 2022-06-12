var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
var likebtn = document.querySelectorAll(".likeButton");
likebtn.forEach(like => {
    like.addEventListener("click", (event) => {
        if (event.target.src.match("like.png")) {
            event.target.src = "../image/clothes-asset/liked.png";
        }
        else {
            event.target.src = "../image/clothes-asset/like.png";
        }
    })
    })
var btn = document.getElementsByClassName("load-btn");
var x;
var loadCheck = true;
function load(){
    var rCol = document.getElementById("right-col");
    var pro = document.getElementById("product");
    if (loadCheck){
        rCol.style.height = '270vh';
        pro.style.height = '240vh';
        loadCheck = false;
    } else {
        rCol.style.height = '150vh';
        pro.style.height = '120vh';
        loadCheck = true;
    } 
}
