import {React, useState, useEffect } from 'react'
import '../../index.css'
import './TicTacToe.css'
import cross_icon from '../Assets/cross.png'
import circle_icon from '../Assets/circle.png'
function Square({value, onSquareClick}){
    return(
        <button className = "boxes" onClick = {onSquareClick}>
            {value}
        </button>
    )
}

function Board({game_mode, board, turn, onPlay, players}){    
    const opp = (game_mode === "singleplayer") ? 'CPU' : 'Player2';

    let winner = calculateWinner(board);
    useEffect(() => {
        if (game_mode === 'singleplayer' && turn === 'O') {
            cpuMove();
        }
    }, [game_mode, turn]);

    function cpuMove(){
        let emptyIndicies = [];
        for (let i = 0; board.length > i ; i++){
            if (board[i] == null){
                emptyIndicies.push(i);
            }  
        }
        let rnd = Math.floor(Math.random() * (emptyIndicies.length));
        console.log(rnd);
        console.log(emptyIndicies);
        
        handleClickSquare(emptyIndicies[rnd]);
    }

    function handleClickSquare(i){
        if (board[i] || winner){
            return;
        }

        const nextSquares = board.slice();
        nextSquares[i] = turn;
        onPlay(nextSquares);
        return;
    }

    if (winner){
        winner = "Winner is " + winner + "! Please click on reset board button.";
    }
    return(
        <div>
            <div className = 'scoreboard'>
                <div className = "score">Turn: {turn}</div>
            </div>

            <div>{winner}</div>
            <div className='board'>
            <div className = "c1">
                <Square value = {board[0]} onSquareClick={() => handleClickSquare(0)} />
                <Square value = {board[3]} onSquareClick={() => handleClickSquare(3)}/>
                <Square value = {board[6]} onSquareClick={() => handleClickSquare(6)}/>
            </div>

            <div className = "c2">
                <Square value = {board[1]} onSquareClick={() => handleClickSquare(1)}/>
                <Square value = {board[4]} onSquareClick={() => handleClickSquare(4)}/>
                <Square value = {board[7]} onSquareClick={() => handleClickSquare(7)}/>
            </div>

            <div className = "c3">
                <Square value = {board[2]} onSquareClick={() => handleClickSquare(2)}/>
                <Square value = {board[5]} onSquareClick={() => handleClickSquare(5)}/>
                <Square value = {board[8]} onSquareClick={() => handleClickSquare(8)}/>
            </div>
        </div>
            
        </div>
    
    )
}


export default function TicTacToe({game_mode}){
    const [board, setBoard] = useState(Array(9).fill(null));
    const[turn, setTurn] = useState("X");
    const[wins, setWins] = useState([0, 0]);
    const[players, setPlayers] = useState(["X", "O"]);
    const[moves, setMoves] = useState(0);

    function onPlay(nextSquares){
        if (turn == "X"){
            setTurn("O");
        }

        else{
            setTurn("X");
        }
        setBoard(nextSquares)
    }

    function reset(){
        setBoard(Array(9).fill(null))
        setMoves(0);
        setTurn("X");
    }

    function resetScore(){
        reset();
        setWins([0, 0]);
        setPlayers(["X", "O"]);
    }

    return (
        <div className = 'ttt-container'>
            <h1 className='title'>Tic-Tac-Toe</h1>
            <Board game_mode = {game_mode} board = {board} turn = {turn} onPlay = {onPlay}/>

            <button style={{ fontSize: "25px", padding: "0", width: "50%" }} className='button-54' onClick={reset}>Reset Board</button>
        </div>
    )
};

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