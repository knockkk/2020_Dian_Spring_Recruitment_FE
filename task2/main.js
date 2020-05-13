 const container = document.getElementById('container');
 var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 const playerOne='X';
 const playerTwo='O';
 var origBoard;
 var mark;
 var playerNext=document.getElementById('player');
 var playerWinner=document.getElementById('winner');
// container.addEventListener('click', function () { alert('Hello') })
const cells = document.querySelectorAll(".cell");

//startGame();
window.onload=startGame();

//开始游戏监听点击事件
function startGame(){
    origBoard = Array.from(Array(9).keys());
    // console.log(origBoard);
    for(var i=0;i<cells.length;i++){
       cells[i].addEventListener('click',turnClick,false);
      }
}

function turnClick(square){
      //点击日志
    //console.log(square.target.id);
        
       
        if(!choose()){
            turnTwo(square.target.id,playerTwo);
        }
        else if(choose()){
            turnOne(square.target.id,playerOne);
        }
}

function choose(){
    if(playerNext.innerText==='X')
    {
        return 1;
    }
    else if(playerNext.innerText==='O'){
        return 0;
    }
}

//X玩家下棋
function turnOne(squareId,player){
    //属于X的数组
    var stop;
    if(document.getElementById(squareId).innerText ==''){
    origBoard[squareId]=player;
    document.getElementById(squareId).innerHTML=player;
    playerNext.innerText="O";
    stop=checkWin(origBoard,player);
    if(stop){
        gameOver();
    }
    }
    else{}
}

//O玩家下棋
function turnTwo(squareId,player){
    //属于O的数组
    var stop;
    if(document.getElementById(squareId).innerText ==''){
    origBoard[squareId]=player;
    document.getElementById(squareId).innerHTML=player;
    playerNext.innerText="X";
    stop=checkWin(origBoard,player);
    if(stop){
        gameOver();
    }
    }
    else{}
}

/*function countStep(square){
    var count=square.target.childElementCount;
    return count;
}*/


function checkWin(board,player){
    //穷举法判断胜利
    if(board[1]=='X'&&board[2]=='X'){
        playerWinner.innerText="winner:X";
        return 1;
    }
    else if(board[3]=='X'&&board[4]=='X'&&board[5]=='X'){
        playerWinner.innerText="winner:X";
        return 1;
    }
    else if(board[6]=='X'&&board[7]=='X'&&board[8]=='X'){
        playerWinner.innerText="winner:X";
        return 1;
    }
    else if(board[3]=='X'&&board[6]=='X'){
        playerWinner.innerText="winner:X";
        return 1;
    }
    else if(board[1]=='X'&&board[4]=='X'&&board[7]=='X'){
        playerWinner.innerText="winner:X";
    }
    else if(board[2]=='X'&&board[5]=='X'&&board[8]=='X'){
        playerWinner.innerText="winner:X";
        return 1;
    }
    else if(board[4]=='X'&&board[8]=='X'){
        playerWinner.innerText="winner:X";
        return 1;
    }
    else if(board[2]=='X'&&board[4]=='X'&&board[6]=='X'){
        playerWinner.innerText="winner:X";
        return 1;
    }
    else if(board[0]=='O'&&board[1]=='O'&&board[2]=='O'){
        playerWinner.innerText="winner:O";
    }
    else if(board[3]=='O'&&board[4]=='O'&&board[5]=='O'){
        playerWinner.innerText="winner:O";
        return 1;
    }
    else if(board[6]=='O'&&board[7]=='O'&&board[8]=='O'){
        playerWinner.innerText="winner:O";
    }
    else if(board[0]=='O'&&board[3]=='O'&&board[6]=='O'){
        playerWinner.innerText="winner:O";
        return 1;
    }
    else if(board[1]=='O'&&board[4]=='O'&&board[7]=='O'){
        playerWinner.innerText="winner:O";
        return 1;
    }
    else if(board[2]=='O'&&board[5]=='O'&&board[8]=='O'){
        playerWinner.innerText="winner:O";
        return 1;
    }
    else if(board[0]=='O'&&board[4]=='O'&&board[8]=='O'){
        playerWinner.innerText="winner:O";
        return 1;
    }
    else if(board[2]=='O'&&board[4]=='O'&&board[6]=='O'){
        playerWinner.innerText="winner:O";
        return 1;
    }
    else{
    }
}

function gameOver(){
    //事件监听器结束，不能再点击
    for(var i=0;i<cells.length;i++){
        cells[i].removeEventListener('click',turnClick,false);
    }
}
