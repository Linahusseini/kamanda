import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './RegistrationPage.css';
// import { validEmail, validPassword } from './utils'; 


const RegistrationPage = () => {

    const [state, setState] = useState(
        {
            registered: false,
            loading: false,
            errors: 0,
            messages: []
        }
    );

    // These will be assigned values by React
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;

    

    const registerUser = () => {
        fetch('http://localhost:8080/users/register', {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                email: emailField.value,
                password: passwordField.value
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (json)=> {
                const { message } = json;
                if(message === "User has been saved") {
                    //
                    setState(
                        {
                            ...state,
                            registered: true,
                            loading: false
                        }
                    )
                } else {
                    //alert("Please check all the fields");
                    setState(
                        {
                            loading: false
                        }
                    )
                }
            }
        )

        console.log(firstNameField.value, lastNameField.value, emailField.value, passwordField.value)
    }

    // If the user is registered, redirect them
    if(state.registered === true) {
        return (<Redirect to="/login"/>)
    }

    // Otherwise, show the registration form
    else {
    
        return(
        <body className="form-v4">
            <div className="page-content">
                <div className="form-v4-content">
                    <div className="form-left">
                        
                        <h2>Information</h2>
                        
                        <p className="text-1">Hello Buddy! Welcome to Kamanda.</p>
                        <p className="text-2"><span>Sign Up Here:</span> And start your journey with us</p>
                        <div className="form-left-last">
                            {/* <input type="submit" name="account" className="account" value="Have An Account"/> */}
                        </div>
                    </div>
                    <form className="form-detail" action="#" method="post" id="myform">
                        <h2>Registration Form</h2>
                        <div className="form-group">
                            <div className="form-row form-row-1">
                                <label for="first_name">First Name</label>
                                <input
                                ref={(comp)=>firstNameField = comp}
                                type="text" 
                                name="first_name" 
                                id="first_name" 
                                className="input-text"/>
                            </div>
                            <div className="form-row form-row-1">
                                <label for="last_name">Last Name</label>
                                <input
                                ref={(comp)=>lastNameField = comp}
                                type="text" 
                                name="last_name" 
                                id="last_name" 
                                className="input-text"/>
                            </div>
                        </div>
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
                            onClick = {registerUser}
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


export default RegistrationPage;