// Your code here
let dodger = document.getElementById('dodger');
let game = document.getElementById('game');
dodger.style.backgroundColor = "#FF69B4";
console.log(dodger.style.left);
console.log(dodger.style.bottom);
dodger.style.bottom = "0px";
function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers, 10);
    if (left<360) {
      dodger.style.left =`${left+1}px`;
    }
}
document.addEventListener("keydown", function(e){
  if(e.key === "ArrowRight"){
    moveDodgerRight();
  }
})

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers, 10);
    if (left>0) {
      dodger.style.left =`${left - 1}px`;
    }
}
document.addEventListener("keydown", function(e){
  if(e.key === "ArrowLeft"){
    moveDodgerLeft();
  }
})
