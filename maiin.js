
const submit=document.getElementById("submit");
const parent=document.getElementById("parent");
let RandomNo=parseInt(Math.random()*100+1);
let previousGuess=[];
let guessRemaining=10;

let pg=document.getElementById("pg");
let isNEWGame=false;
if(!isNEWGame){
    gameFinishes();
}
let infoTag=document.createElement("h5");
infoTag.className="font-medium text-black";
parent.appendChild(infoTag);
infoTag.innerText="";

newGame();
submit.addEventListener("click",()=>{
    if(!isNEWGame){
        newGame();
    }else{
        logic();
    }

    
})
function logic(){

    const guess=document.getElementById("guess");
    
    const gr=document.getElementById("gr");
    if(guess.value<0||guess.value===""||guess.value>100){
        infoTag.innerText="Enter valid Guess"

        
    }else{
        
        if(guess.value==RandomNo){
            //win
            console.log("jj")
            infoTag.innerText="YOU WIN";
            gameFinishes();

        }else{
            checkguess(guess.value);
            guessRemaining--;
            //wrong guess
            previousGuess.push(guess.value);
            pg.innerText="Previous Guesses : "+previousGuess;
        }
        if(guessRemaining<=0){
            infoTag.innerText="YOU LOOSE Right Guess Was : "+RandomNo;
            gameFinishes();
        }
        gr.innerText="Guess Remaining : "+guessRemaining ;
        


    }
}
function checkguess(guess){
    let calculated_value=Math.abs(RandomNo-guess);
    
        if (calculated_value<=1){
            infoTag.innerText="Damn Close...";
         
        }else if(calculated_value<=3){
            infoTag.innerText="OMG SOOOOO Close...";
        }
        else if(calculated_value<=5){
            infoTag.innerText="Very close...";
        }else if(calculated_value<=10){
            infoTag.innerText="a bit closer...";
        }else if(calculated_value<=20){
            infoTag.innerText="20 digit distance far...";
        }else if(calculated_value<=30){
            infoTag.innerText="Far...";
        }else if(calculated_value<=50){
            infoTag.innerText="very Far";
        }else
        
            infoTag.innerText="Believe me You are Very Far...";
          
        
    
}
function refressALL(){
    guess.value="";
    previousGuess=[];
    pg.innerText="";
    guessRemaining=10;
}

function gameFinishes(){
    isNEWGame=false;
    submit.innerText="New Game";
    refressALL();
}

function newGame(){
    RandomNo=parseInt(Math.random()*100+1);
    refressALL();
    infoTag.innerText=""
    isNEWGame=true;
    submit.innerText="Submit";
}
