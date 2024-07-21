const display=document.querySelector("#display");
const submitbtn=document.querySelector("#submit");
const userNumber=document.querySelector("#enter-number");
const attempDisplay=document.querySelector("#attempt-text");
const displayResult=document.querySelector("#result-text");

let usernumberText=userNumber.textContent;      //user no. display text featch
let attempText=attempDisplay.textContent;
const createValue=parseInt(Math.random()*20);
let flag=5;
let attemp=attempText+flag;
 attempDisplay.innerHTML=attemp;

console.log(createValue);

submitbtn.addEventListener('click',function(e){
    console.log(e);
    let displayValue=parseInt(display.value);
    let addUserNumber=usernumberText+displayValue;
    userNumber.innerHTML=addUserNumber;
        if(createValue===displayValue){
            displayResult.innerHTML="you are correct 🤩 🫡"+"please press reset button to play again";
        }
        if(displayValue<createValue){
            displayResult.innerHTML="Your Guess is to Low 🥹 🤔";
        }
        if(displayValue>createValue)
        {
            displayResult.innerHTML="Your Guess is to High 😨";
        }
        flag-=1;
        let attemp=attempText+flag;
        attempDisplay.innerHTML=attemp;
        if(flag==0)
        {
            displayResult.innerHTML=`your are fail value is :${createValue} <br>play again then press reset`;
            flag=10;
        }
})

const resetbtn=document.querySelector("#reset");

resetbtn.addEventListener('click',function(){
    document.location.reload();
})


