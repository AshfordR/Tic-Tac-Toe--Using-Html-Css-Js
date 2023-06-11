console.log("Welcome to Tic Tac Toe")
let turn ="X"
let gameover=false

//Function to change value of turn
const changeTurn=()=>{
  return  turn === "X" ? "O":"X";
}
//Function to check the winner
const chckwin = () => {
    let box=document.getElementsByClassName('boxtext');
    //All possible Winning states
     let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ]
     wins.forEach(e=>{
        if((box[e[0]].innerText === box[e[1]].innerText) && (box[e[1]].innerText === box[e[2]].innerText) && (box[e[0]].innerText !== "") ){
            document.querySelector('.ginfo').innerText=box[e[0]].innerText + " Won";
            gameover=true;
        }
     }) 
}
 
//For game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener('click', () => {
    if (boxtext.innerText === '') {
      boxtext.innerText = turn;
      turn = changeTurn();
      chckwin();
      if (!gameover) {
        document.getElementsByClassName("ginfo")[0].innerText = "Turn For " + turn;
      }
    }
  })
})

//Add Event Listener On Reset Button
reset.addEventListener('click',()=>{
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach(element=>{
    element.innerText= "";
  })
  turn= "X";
  gameover=false;
  document.getElementsByClassName("ginfo")[0].innerText = "Turn For " + turn;

})