import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AppContext from './AppContext';
// import Navbar from './Navbar.js';
import './RegistrationPage.css';


const LoginPage = () => {

    // These will be assigned values by React
    let emailField;
    let passwordField;

    // Connected to globalState
    const [globalState, setGlobalState] = useContext(AppContext);

    // A local state
    const [state, setState] = useState(
        {
            loading: false
        }
    )

    const LoginUser = () => {

        // Start loading
        setState({...state, loading: true})

        fetch('http://localhost:8080/users/login', 
            {
                method: 'POST',
                body: JSON.stringify({
                    email: emailField.value,
                    password: passwordField.value
                }),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(
            (result) => result.json()
        )
        .then (
            (json) => {
                const { message, jsonwebtoken } = json;
                if(jsonwebtoken) {
                    // update the globalState
                    setGlobalState(
                        {
                            ...globalState,
                            loggedIn: true
                        }
                    )

                    // save the jwt in the browser
                    localStorage.setItem('jwt', jsonwebtoken);

                    setState({...state, loading: false})
                } else {
                    // throw an error
                    alert(message);
                }
            }
        )
    }


    // If the user is loggedIn, redirect them
    if(globalState.loggedIn === true) {
        return(<Redirect to="/"/>)
    }

    // Otherwise, show the login form
    else {
        return(
            <body className="form-v4">
            <div className="page-content">
                <div className="form-v4-content">
                    <div className="form-left">
                        {/* <img className="showcase" 
                        src = {require('./diver.jpg')} /> */}
                        {/* <h2>Information</h2>
                        <p className="text-1">Hello Buddy! Welcome to Kamanda.</p>
                        <p className="text-2"><span>Sign Up Here:</span> And start your journey with us</p> */}
                        <div className="form-left-last">
                            {/* <input type="submit" name="account" className="account" value="Have An Account"/> */}
                        </div>
                    </div>
                    <form className="form-detail" action="#" method="post" id="myform">
                        <h2>Login Form</h2>
                            <div className="form-row">
                            <label for="your_email">Your Email</label>
                            <input
                            ref={(comp)=>emailField = comp}
                            type="text" 
                            name="your_email" 
                            id="your_email" 
                            className="input-text" 
                            required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
                        </div>
                        <div className="form-group">
                            <div className="form-row">
                                <label for="password">Password</label>
                                <input
                                ref={(comp)=>passwordField = comp}
                                type="password" 
                                name="password" 
                                id="password" 
                                className="input-text" required/>
                            </div>
                            {/* <div className="form-row form-row-1">
                                <label for="comfirm-password">Comfirm Password</label>
                                <input type="password" name="comfirm_password" id="comfirm_password" className="input-text" required/>
                            </div> */}
                        </div>
                        {/* <div className="form-checkbox">
                            <label className="container"><p>I agree to the <a href="#" className="text">Terms and Conditions</a></p>
                                <input type="checkbox" name="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                        </div> */}
                        <div className="form-row-last">
                            <input
                            onClick = {LoginUser}
                            type="submit" 
                            name="register" 
                            className="register" 
                            value="Register"/>
                        </div>
                    </form>
                </div>
            </div>
        </body>
        )
    }
}

export default LoginPage;