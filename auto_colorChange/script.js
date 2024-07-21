const startbtn=document.querySelector('#start');
const stopbtn=document.querySelector('#stop');
const hexcolors="123456789ABCDEF";
let intervalclear;

alert("press start to change page color & if you press the stop then stop the colors");
function changeColorfunction(){
    let changeColor="#";
    for(let i=1;i<=6;i++){
        let changenumber=parseInt(Math.random()*15);
        changeColor+=hexcolors[changenumber];
    }
    document.body.style.backgroundColor=changeColor;
}

function startcolors(){
    intervalclear=setInterval(changeColorfunction,1000);
    // console.log("start colors");
}


function stopcolors(){
    clearInterval(intervalclear);
    // console.log("stopcolors");
}

startbtn.addEventListener('click',startcolors);
stopbtn.addEventListener('click',stopcolors);
