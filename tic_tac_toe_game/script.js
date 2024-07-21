const mainContainer = document.querySelector(".main-container");
const winPlyaerName = document.getElementById("player-name");
const winText = document.getElementById("win-text");
const circleSymbol = "⭕";
const crossSymbol = "❌";
function accessId(element) {
    let ele = element.target;
    let boxContainer = document.getElementById(ele.id);
    setSymbol(boxContainer);
    wineerDecide();
}

let temp;
let arr = [];
function setSymbol(box) {
    let flag = 0;
    arr.forEach(element => {
        if (element == box.id) {
            flag = 1;
        }
    });
    if (flag == 0) {
        if (temp != crossSymbol) {
            temp = crossSymbol;
            arr.push(box.id);
            box.innerHTML = crossSymbol;
        } else {
            temp = circleSymbol;
            arr.push(box.id);
            box.innerHTML = circleSymbol;
        }
    }
}
const boxidList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 6, 8],
    [6, 4, 2]
];
function wineerDecide() {

    for (let i = 0; i < 8; i++) {
        let flag = 0;
        for (let j = 0; j < 3; j++) {
            if (mainContainer.children[boxidList[i][j]].innerHTML != "") {
                flag += 1;
            }
        }
        if (flag == 3) {
            if (mainContainer.children[boxidList[i][0]].innerHTML == mainContainer.children[boxidList[i][1]].innerHTML
                && mainContainer.children[boxidList[i][1]].innerHTML == mainContainer.children[boxidList[i][2]].innerHTML
                && mainContainer.children[boxidList[i][2]].innerHTML == mainContainer.children[boxidList[i][0]].innerHTML) {
                winPlyaerName.innerHTML = mainContainer.children[boxidList[i][1]].innerHTML;
                winText.innerHTML = "you are win!";
            }
        }
    }
}



mainContainer.addEventListener('click', accessId)



