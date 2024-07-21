
function clickevent(el)
{
    const boxtr=el.target;
    const boxid=boxtr.id;
    const box=document.getElementById(boxid);
    colorChange(box);
}


function colorChange(ev){
    let cssproperty=getComputedStyle(ev,null).getPropertyValue("background-color");
    const body=document.getElementById("bodyy");
    document.body.style.backgroundColor=cssproperty;
    const head=document.querySelector("#text");
    head.style.border="5px solid blue";
    head.style.color= "white";
}

const parent= document.querySelector(".main-box-container");
parent.addEventListener('click',clickevent);

//it can used to disable right click on browser site  
document.addEventListener('contextmenu',(element)=>{
    element.preventDefault();
})