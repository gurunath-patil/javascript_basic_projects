
const submitbtn=document.querySelector('#subbtn');
const result_print=document.querySelector('.result-span');

submitbtn.addEventListener('click',function(e){
    const weight=parseInt(document.querySelector('#weight').value);
    const height=parseFloat(document.querySelector('#height').value);
    calculation(weight,height);
})
function calculation(w,h){
    let result=w/(h*h);
    const result_fix=result.toFixed(2);
    if(result_fix<18.5){
        result_print.style.color="red";
        result_print.style.fontWeight ="bold";
        result_print.innerHTML=`${result_fix} &nbsp&nbsp under Weight`;

    }else if(result_fix>=18.5 && result_fix<=24.9){
        result_print.style.color="green";
        result_print.style.fontWeight ="bold";
        result_print.innerHTML=`${result_fix}   &nbsp&nbsp Normal Weight`;
    }
    else if(result_fix>=25 && result_fix<=29.9){
        result_print.style.color="yellow";
        result_print.style.fontWeight ="bold";
        result_print.innerHTML=`${result_fix}  &nbsp&nbsp OverWeight`;
    }
    else if(result_fix>=30){
        result_print.style.color="red";
        result_print.style.fontWeight ="bold";
        result_print.innerHTML=`${result_fix}   Obses`;
    }
    
}






