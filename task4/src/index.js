import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


 function Square(props)  {/* 棋盘区域函数组件，调用时的参数为父组件这个实例对象里面用到Square的那一个部分 */
  var i=props.value;
  return (
    
    <button className="square" onClick={props.onClick}>
      {/* 事件：棋盘区域被点击时，调用父组件Board针对Square传下来的onClick函数 */}
      {i}{/* 用现在的状态渲染棋盘区域 */}
    </button>
  );
}

class Board extends React.Component {/* 棋盘组件 */
  constructor(props) {
    super(props);
    this.state = {/* 用数组记录整个棋盘的落子情况 */
      squares: Array(9).fill(null),/* 初始化为null */
      xIsNext:true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();/* 建立一个副本 */
    if (calculateWinner(squares) || squares[i]) {
      return;/* 不做处理 */
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({squares: squares,
      xIsNext: !this.state.xIsNext,});
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}/>;
    /* 利用Square组件，第i个棋盘区域赋值棋盘当前状态的第i个值，并显示 */
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    let change;
    change=this.state.xIsNext ? 'X' : 'O';
    if (winner) {
      status = 'Winner: ' + winner;
      change=null;
    } else {
      status = 'Next player:';
    }
    return (
      <div>
        <div className="status">{status}<div txt="1">{change}</div></div>
        {/* 我把player的名字改成红色了，因为task2也是红色的 */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
