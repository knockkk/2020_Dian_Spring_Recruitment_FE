var round = 1;  // 表示下一步下棋的顺序，1/-1分别表示X/O，0表示游戏结束
var board = [0,0,0,0,0,0,0,0,0];  // 表示棋盘内两种棋子的状态，1/-1分别表示X/O，0表示没有棋子
var e0 = document.getElementById("0");
var e1 = document.getElementById("1");
var e2 = document.getElementById("2");
var e3 = document.getElementById("3");
var e4 = document.getElementById("4");
var e5 = document.getElementById("5");
var e6 = document.getElementById("6");
var e7 = document.getElementById("7");
var e8 = document.getElementById("8");

function checkBoard() { 
    /**
     * #@ description: 检查游戏是否结束
     * #@ param: none
     * #@ return: 1表示X赢，-1表示O赢，0表示游戏继续
     */
    if (board[0] === board[1] && board[0] === board[2] && board[0] != 0) { return board[0]; }
    else if (board[3] === board[4] && board[3] === board[5] && board[3] != 0) { return board[3]; }
    else if (board[6] === board[7] && board[6] === board[8] && board[6] != 0) { return board[6]; }
    else if (board[0] === board[3] && board[0] === board[6] && board[0] != 0) { return board[0]; }
    else if (board[1] === board[4] && board[1] === board[7] && board[1] != 0) { return board[1]; }
    else if (board[2] === board[5] && board[2] === board[8] && board[2] != 0) { return board[2]; }
    else if (board[0] === board[4] && board[0] === board[8] && board[0] != 0) { return board[0]; }
    else if (board[2] === board[4] && board[2] === board[6] && board[2] != 0) { return board[2]; }
    else { return 0; }
}

function sendAnnouncement(result) {
    /**
     * #@ description: 广播结果，显示在棋盘上方
     * #@ param {result：棋盘检查后的结果} 
     * #@ return: 改变HTML
     */
    var bulletin = document.getElementById("bulletin");
    if (result === 0) {
        if (round === 1) {
            bulletin.innerHTML = "Next Player: <span class=\"player\">X</span>";
        } else if (round === -1) {
            bulletin.innerHTML = "Next Player: <span class=\"player\">O</span>";
        } else {
            location.reload();
        }
    } else if (result === 1) {
        bulletin.innerHTML = "Winner: <span class=\"player\">X</span>";
    } else if(result === -1) {
        bulletin.innerHTML = "Winner: <span class=\"player\">O</span>";
    }
}

function playChess(element, position) {
    /**
     * #@ description: 响应鼠标的点击
     * #@ param {element：一个元素对象  position：该元素对象对应的棋盘位置} 
     * #@ return: none
     */
    if (element.innerHTML === "" && round != 0) {
        if (round === 1) {
            element.innerHTML = "X";
        } else {
            element.innerHTML = "O";
        }
        board[position] = round;
        result = checkBoard();
        if (result === 0){
            round = -round;
            sendAnnouncement(result);
        } else {
            sendAnnouncement(result);
            round = 0;
        }
    }
}

e0.addEventListener("click", function(){playChess(e0, 0);});
e1.addEventListener("click", function(){playChess(e1, 1);});
e2.addEventListener("click", function(){playChess(e2, 2);});
e3.addEventListener("click", function(){playChess(e3, 3);});
e4.addEventListener("click", function(){playChess(e4, 4);});
e5.addEventListener("click", function(){playChess(e5, 5);});
e6.addEventListener("click", function(){playChess(e6, 6);});
e7.addEventListener("click", function(){playChess(e7, 7);});
e8.addEventListener("click", function(){playChess(e8, 8);});