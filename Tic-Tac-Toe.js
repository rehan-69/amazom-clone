let boxes = document.querySelectorAll(".box");
let newBtn= document.querySelector("#newbtn");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
]

boxes.forEach((box) => {
   box.addEventListener("click", () => {
      if (turnO) {
         box.innerText = "O";
         turnO = false;
      } else {
         box.innerText = "X";
         turnO = true;
      }
      box.disabled = true;
      checkWinner();
   });
});


const resetGame = () =>{
   turnO = true;
   enAbled();
   msgContainer.classList.add("hide");
}


const disAbled = () =>{
   for(let box of boxes ){
      box.disabled = true;
   }
}

const enAbled = () =>{
   for(let box of boxes ){
      box.disabled = false;
      box.innerText = "";
   }
}


const showWinner  = (Winner) =>{
   msg.innerText = `Congratulations, Winner is ${Winner}`;
   msgContainer.classList.remove("hide");
   disAbled();
}

const checkWinner = () => {
   for (let pattern of winPatterns) {
      // console.log(pattern[0],pattern[1],pattern[2]);

      // console.log(boxes[pattern[0]].innerText,
      //             boxes[pattern[1]].innerText,
      //             boxes[pattern[2]].innerText
      //          );

      let posVal1 = boxes[pattern[0]].innerText;
      let posVal2 = boxes[pattern[1]].innerText;
      let posVal3 = boxes[pattern[2]].innerText;

      if(posVal1 != "" && posVal2 !="", posVal3 !=""){
         if(posVal1 === posVal2 && posVal2 === posVal3){
            console.log("Winner",posVal1);
            showWinner(posVal1);
         }
      }
   }
}


newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
