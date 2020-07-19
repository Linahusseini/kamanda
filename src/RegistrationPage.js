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
    let usernameField;

    

    const registerUser = (e) => {

        // since you are using form you should use below statement, because every time you submit the form, will
        // reload and causing the state to go to its initial values
        e.preventDefault()
        ///////////////////////
       
        fetch('http://localhost:8080/users/register', {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                email: emailField.value,
                password: passwordField.value,
                username: usernameField.value
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (json)=> {
               // you were checking {message} = json....which is wrong because your backend is responding with a string called json = "User has been saved".....and not an object like json={message: "User has been saved"}
                // const { message } = json;
                if(json === "User has been saved") {
                    console.log('the message is true')
                    //
                    setState(
                        {
                            ...state,
                            registered: true,
                            loading: false,
                        }
                    )

                } else {
                    alert("Please check all the fields");
                    setState(
                        {
                            loading: false
                        }
                    )
                }
            }
        )

     }


    //If the user is registered, redirect them
    if(state.registered === true) {
        return (<Redirect to="/login"/>)
    }

    //Otherwise, show the registration form
    else {
     //   console.log('registration state',state.registered)
        return(
        // <body className="form-v4">
            <div className="page-content">
                <div className="form-v4-content">
                    <div className="form-left">
                        
                        <h2>Information</h2>
                        
                        <p className="text-1">Hello Buddy! Welcome to Kamanda.</p>
                        <p className="text-2"><span>Sign Up Here:</span> And start your journey with us</p>
                        <div className="form-left-last">
                          
                        </div> 
                    </div>
                    
                    <form className="form-detail"  onSubmit={registerUser} method="" id="myform">
                        <h2>Registration Form</h2>
                        <div className="form-group">
                            <div className="form-row form-row-1">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                ref={(comp)=>firstNameField = comp}
                                type="text" 
                                name="first_name" 
                                id="first_name" 
                                className="input-text"/>
                            </div>
                            <div className="form-row form-row-1">
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                ref={(comp)=>lastNameField = comp}
                                type="text" 
                                name="last_name" 
                                id="last_name" 
                                className="input-text"/>
                            </div>
                        </div>
                     
                        <div className="form-row">
                            <label htmlFor="your_email">Your Email</label>
                            <input
                            ref={(comp)=>emailField = comp}
                            type="text" 
                            name="your_email" 
                            id="your_email" 
                            className="input-text" />
                            
                        </div>
                        <div className="form-row form-row-1">
                                <label htmlFor="username">UserName</label>
                                <input
                                ref={(comp)=>usernameField = comp}
                                type="text" 
                                name="username" 
                                id="username" 
                                className="input-text"/>
                            </div>
                        <div className="form-group">
                            <div className="form-row">
                                <label htmlFor="password">Password</label>
                                <input
                                ref={(comp)=>passwordField = comp}
                                type="password" 
                                name="password" 
                                id="password" 
                                className="input-text" required/>
                            </div>
                          
                        </div>
                       
                        <div className="form-row-last">
                            <button
                            type="submit" 
                            name="register" 
                            className="register" 
                            value="Register"> Submit </button> 
                        </div>
                    </form>
                    
                </div>
            </div>
        // </body>  
        
        
        )
   }
}


export default RegistrationPage;