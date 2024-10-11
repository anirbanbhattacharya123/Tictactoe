let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new");
let msgCon=document.querySelector(".msgcon");
let msg=document.querySelector("#msg");

let turn0=true;

const winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if (turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgCon.classList.add("hide");
}

const disableBoxes=()=>{
    for (let box of boxes) {
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(win)=>{
    msg.innerText=`Congratulations winner is ${win}`;
    msgCon.classList.remove("hide"); 
}

const checkwinner=()=>{
    for (let ptrns of winpatterns) {
        //console.log(boxes[ptrns[0]],boxes[ptrns[1]],boxes[ptrns[2]]);
        //console.log(boxes[ptrns[0]].innerText,boxes[ptrns[1]].innerText,boxes[ptrns[2]].innerText);
        let pos1=boxes[ptrns[0]].innerText;
        let pos2=boxes[ptrns[1]].innerText;
        let pos3=boxes[ptrns[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("Winner",pos1);
                disableBoxes();
                showWinner(pos1);
            }
        }
    }
}

resetbtn.addEventListener("click",resetGame);
newGamebtn.addEventListener("click",resetGame);