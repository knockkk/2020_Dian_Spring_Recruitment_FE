var origBoard;
var Player="X";
var flag=1;
const winCombos=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cells=document.querySelectorAll('.c');

startGame();
function startGame(){
    origBoard=Array.from(Array(9).keys());
    for(var i=0;i<cells.length;i++){
        cells[i].addEventListener('click',turn);
    }
}
function turn(square){//原来它传进来一个square参数啊，我以为它传不了参数，也不知道target，人都整疯了都点击不出来...
    squareId=square.target.id;
    player=Player;
    if(document.getElementById(squareId).innerText!="X"&&document.getElementById(squareId).innerText!="O"&&flag){
        origBoard[squareId]=player;
        document.getElementById(squareId).innerText=player;
        if(checkWin(origBoard,player)){
            document.getElementById("out").innerHTML="Winner:"+player;
        };
        if(Player=="X")Player="O";
        else Player="X";
    }
}
function checkWin(b,p){//太智能了，有return就有返回值，没有就没返回值
    winner=0;
    for(let win of winCombos.values()){
        if(b[win[0]]==p&&b[win[1]]==p&&b[win[2]]==p)
        {
            winner=1;
            flag=0;
            break;
        }
    }
    return winner;
}
