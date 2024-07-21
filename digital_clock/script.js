const display=document.querySelector(".display");
let datee= new Date();
let newdate=datee.toDateString();
console.log(typeof newdate,"\t",newdate);


setInterval(function(){
    let date= new Date();
    display.innerHTML=date.toLocaleTimeString();
},1000)