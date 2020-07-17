import React, { useContext } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import logo from './logo.svg';


const Navbar = () => {

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
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/>
                Bootstrap
            </Link>

            <div style={{display: 'flex'}}>
                {
                    globalState.loggedIn === false && <Link
                    to="/login"
                    className="btn btn-primary">
                        Log In / Register
                    </Link>
                }

                <div style={{display: 'flex'}}>
                {
                    globalState.loggedIn === true && 
                    <button>
                    <Link
                    to="/Settings"
                    className="btn btn-danger">
                        Settings
                    </Link>
                    </button>
                }

                {
                    globalState.loggedIn === true && 
                    <button 
                    onClick={logOut}
                    className="btn btn-primary">
                        Log Out
                        <Link to="/">Log Out </Link>
                    </button>
                }

              
            </div>
            </div>
        </nav>
    )
}

export default Navbar;