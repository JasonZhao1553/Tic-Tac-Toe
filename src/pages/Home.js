import "../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

export default function Home(){
    const getRules = () => {
        alert("Get three in a row.")
      };
    
    return (
        <>
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
                <div className = "buttons" >
                    <Link to = '/play' state = {{gamemode: 'singleplayer'}}>
                        <button className = "button-54">Single Player</button>
                    </Link>

                    <Link to = '/play' state = {{gamemode: 'multiplayer'}}>
                        <button className = "button-54">Multiplayer</button>
                    </Link>
                </div>
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
    </>
    );
}