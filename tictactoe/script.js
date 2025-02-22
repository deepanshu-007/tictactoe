let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgconatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let trunO = true;
let countclick = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    
];

const resetGame =() =>{
    trunO = true;
    enableboxes();
    msgconatiner.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        countclick++;
        console.log("box was clicked",countclick);
        
        if(trunO){    //playerO turn
            box.innerText = "O";
            trunO = false;
        }
        else{    // playerX turn
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations! , Winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    disableboxes();
}
const checkWinner = ()=>{
    if(countclick=== 9){
        msg.innerText = "Game is Drawed";
        msgconatiner.classList.remove("hide");
        disableboxes();
    }
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!= "" && pos2val!= "" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                countclick=0;
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};
newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);