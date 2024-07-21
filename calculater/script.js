let emptystr="";
function getitems(item)
{
    emptystr+=item;
    document.getElementById('display').value=emptystr;
}


function calresult(){
    try{
            const result=eval(emptystr);
            document.getElementById('display').value=result;
        }
    catch(error)
    {
        document.getElementById('display').value="error";
        emptystr="";
    }
}

function erase(){
    emptystr="";
    document.getElementById('display').value=emptystr;
}





// let obj={
//     name:"guru",
//     rollno:106,
//     address:"chuye",
//     msg: function(){
//         console.log(this.name);
//     }
// };


console.log(this);