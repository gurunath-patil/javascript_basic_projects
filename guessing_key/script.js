const display=document.querySelector(".display");



document.addEventListener('keydown',function(element){
    let keyname=display.children[0];
    let keyvalue=display.children[1];
    if(element.key==' ')
    {
        keyname.innerHTML='Space';
        keyvalue.innerHTML=element.keyCode;
    }
    else{
        keyname.innerHTML=element.key;
        keyvalue.innerHTML=element.keyCode;
    }
});