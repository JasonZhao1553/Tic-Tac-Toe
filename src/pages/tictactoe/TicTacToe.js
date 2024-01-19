import React from 'react'
import '../../index.css'
import './TicTacToe.css'
import cross_icon from '../Assets/cross.png'
import circle_icon from '../Assets/circle.png'
function Square(){
    
}


function Board({game_mode}){
    let score1 = 0;
    let score2 = 0;
    const opp = (game_mode === "singleplayer") ? 'CPU' : 'Player2';

    return(
        <div>
            <div className = 'scoreboard'>
                <div className = "score">
                    Player1:{score1}
                </div>
                <div className = "score opp-score">
                    {opp}:{score2}
                </div>
            </div>

            <div className='board'>
            <div className = "row1">
                <div className = "boxes"></div>
                <div className = "boxes"></div>
                <div className = "boxes"></div>
            </div>

            <div className = "row2">
                <div className = "boxes"></div>
                <div className = "boxes"></div>
                <div className = "boxes"></div>
            </div>

            <div className = "row3">
                <div className = "boxes"></div>
                <div className = "boxes"></div>
                <div className = "boxes"></div>
            </div>
        </div>
            <button style={{ fontSize: "25px", padding: "0", width: "50%" }} className='button-54'>Reset Board</button>
        </div>
    
    )
}

export default function TicTacToe({game_mode}){
    return (
        <div className = 'ttt-container'>
            <h1 className='title'>Tic-Tac-Toe</h1>
            <Board game_mode = {game_mode}/>
        </div>
    )
};