import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AppContext from './AppContext';
import Navbar from './Navbar.js';

const ProfilePage = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const [state, setState] = useState(
        {
            loading: false
        }
    )

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
        <div>
            <Navbar />
            <h1>Profile Page</h1>
            {
        globalState.loggedIn === true && 
        <Link to= "/">
        <button onClick={logOut}
         id = "modalBtn" className="button">
            Log Out
        </button>
        </Link>
   
   }
        </div>
    

    
    )
}

export default ProfilePage;