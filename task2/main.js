const container = document.getElementById('container');
 const playerOne='X';
 const playerTwo='O';
 var origBoard;
 var playerNext=document.getElementById('player');
 var playerWinner=document.getElementById('winner');
const cells = document.querySelectorAll(".cell");

//startGame();
window.onload=startGame();

function startGame(){
    origBoard = Array.from(Array(9).keys());
    for(var i=0;i<cells.length;i++){
       cells[i].addEventListener('click',turnClick,false);
      }
}

function turnClick(square){
        if(!choose()){
            turn(square.target.id,playerTwo,playerOne);
        }
        else if(choose()){
            turn(square.target.id,playerOne,playerTwo);
        }
}

function choose(){
    if(playerNext.innerText==='X'){return 1;}
    else if(playerNext.innerText==='O'){return 0;}
}

//玩家下棋
function turn(squareId,player,playerThen){
    var stop;
    if(document.getElementById(squareId).innerText ==''){
    origBoard[squareId]=player;
    document.getElementById(squareId).innerHTML=player;
    playerNext.innerText=playerThen;
    stop=checkWin(origBoard,player);
    if(stop){gameOver();}
    }
    else{}
}

function checkWin(board,player){
    if(board[1]=='X'&&board[2]=='X'){playerWinner.innerText="winner:"+player;return 1;}
    else if(board[3]==player&&board[4]==player&&board[5]==player){playerWinner.innerText="winner:"+player;return 1;}
    else if(board[6]==player&&board[7]==player&&board[8]==player){playerWinner.innerText="winner:"+player;return 1;}
    else if(board[3]=='X'&&board[6]=='X'){playerWinner.innerText="winner:"+player;return 1;}
    else if(board[1]==player&&board[4]==player&&board[7]==player){playerWinner.innerText="winner:"+player;return 1;}
    else if(board[2]==player&&board[5]==player&&board[8]==player){playerWinner.innerText="winner:"+player;return 1;}
    else if(board[4]=='X'&&board[8]=='X'){playerWinner.innerText="winner:"+player;return 1;}
    else if(board[2]==player&&board[4]==player&&board[6]==player){playerWinner.innerText="winner:"+player;return 1;}
    else{}
}

function gameOver(){
    //事件监听器结束，不能再点击
    for(var i=0;i<cells.length;i++){
        cells[i].removeEventListener('click',turnClick,false);
    }
}