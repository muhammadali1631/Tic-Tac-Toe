let boxes = document.querySelectorAll('.box');
let resetB = document.querySelector('#reset')
let newGame = document.querySelector('#new-game')
let msgBox = document.querySelector('.msg-box')
let msg = document.querySelector('#msg')

msgBox.style.display = 'none'

let patterns = [[0,1,2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [1, 4, 7], [0, 3,6], [2, 5, 8], [2, 4, 6]];
let turn = true;
let count = 0;

let resetGame = ()=>{
    turn = true;
    count = 0;
    enableBoxes();
    msgBox.style.display = 'none';
}
boxes.forEach(box=>{
    box.addEventListener("click", function(){
        if(turn){
            box.innerText = "X";
            turn = false;
        }else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        count++
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
})
let gameDraw = () => {
    msg.innerHTML = `Game was a Draw.`;
    msgBox.style.display = 'grid';
    disableBoxes();
  };
let showWinner = (winner)=> {
    msg.innerHTML = `Congratulations Winner is ${winner}`
    msgBox.style.display = "grid"
    disableBoxes();
} 

let disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
let enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
    };

let checkWinner = ()=>{
    for(let pattern of patterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log(pos1);
            showWinner(pos1);
        }
    }
    }
}
resetB.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)