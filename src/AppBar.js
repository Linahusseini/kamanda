import React, { useContext } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import './AppBar.css';


const AppBar = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

        const logOut = () => {
            setGlobalState(
                {
                    ...globalState,
                    loggedIn: false
                }
            );

            localStorage.clear();
        }

    return (

        <nav style={{height:'8vh', backgroundColor: ' #333', opacity:'.9'}}>

            <span className="kamanda">k<span style={{fontSize : "2.75rem"}}>a</span>m<span style={{fontSize : "2.4rem"}}>a</span>nda</span>


            <div style={{display: 'flex'}}>
                {
                    globalState.loggedIn === false && 
                    <Link className= 'button log'
                        to="/login" style={{textDecoration:'none'}}>
                        Login
                    </Link>
                }

                {
                    globalState.loggedIn === true && 
                    <div>
                        <Link 
                        to="/ProfilePage">
                            <i class="fas fa-user-circle fa-2x"></i>
                        </Link>
                        <button onClick={logOut}
                            className='button log'>
                            Log Out
                        </button>
                    </div>
                }
            </div> 
        </nav>
    
    )
}

export default AppBar;