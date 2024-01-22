import "../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import TicTacToe from './tictactoe/TicTacToe'
import {Link, useLocation} from 'react-router-dom';
import React from "react";


export default function Play(){
    const location = useLocation();
    const [gamemode_state, set_gamemode_state] = React.useState({gamemode: ''})
    React.useEffect( () => {
        set_gamemode_state(location.state)
    }, [])

    const game_mode = gamemode_state.gamemode;

    const getRules = () => {
        alert("Get three in a row.")
      };
    
    return (
        <div className = "body">
        <div className = "container">
            <div className = "bar">
                <div className = "links">
                    <button data-reveal-id = "Rules" onClick = {getRules}>Rules</button>
                    
                    <Link to = {{
                        pathname: '/home',
                    }}>
                        <button data-reveal-id = "Home">Home</button>
                    </Link>
                    
                </div>
            </div>


            <div className = "middle">
                <TicTacToe game_mode = {game_mode}/>
            </div>

            <div className = "bar">
                <div className = "contact_container">
                    <div>Brought to you by</div>
                    <div>Jason Zhao</div>

                    <div className = "social-icons">
                        <i>
                        <a href="https://github.com/JasonZhao1553" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        </i>
                        <i>
                        <a href="https://linkedin.com/in/Jason--Zhao" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}