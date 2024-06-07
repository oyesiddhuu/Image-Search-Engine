
let button = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    turnO = true;
    enabledbtn();
}

reset.addEventListener("click", resetGame);

const disabledbtn = () =>{
    for(let box of button){
        box.disabled = true;
    }
}

const enabledbtn = () =>{
    for(let box of button){
        box.disabled = false;
        box.innerText = "";
    }
}



button.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
            
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) =>{
    alert(`Congratulation, Winner is ${winner}`);    
    disabledbtn();
}

const checkWinner = () =>{
    for(let pattern of winpatterns){
        let posval1 = button[pattern[0]].innerText;
        let posval2 = button[pattern[1]].innerText;
        let posval3 = button[pattern[2]].innerText;     
        
        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("winner", posval1);
                
                showWinner(posval1);
            }
        }
        
    };
};