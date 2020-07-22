import React, { useState, useEffect, useContext } from 'react';
import AppContext from './AppContext';
import { Redirect, Link } from 'react-router-dom';
import AppBar from './AppBar';
import Footer from './Footer';
import './Profile.css';
import ProfileForm from './ProfileForm';


const ProfilePage = () => {

    let firstName;
    let lastName;
    
    const [globalState, setGlobalState] = useContext(AppContext);

    const [state, setState] = useState(
        {
            user: [],
            avatar: []
        }
    )

    useEffect(
        () => {
        
        if(globalState.loggedIn === true) {
            fetch('http://localhost:8080/users/ProfilePage', 
            // {
            //     method: 'GET',
            //     body: JSON.stringify({
            //         firstName: firstName.value,
            //         lastName: lastName.value
            //     }),
            //     headers: {"Content-Type": "application/json"
            //                 // "Authorization": `Bearer ${localStorage.getItem('jwt')}`
            //             }
            //         }
            )
            .then(
            (result)=>result.json()
            )
            .then (
            (json)=> {
                setState(
                {
                    ...state,
                    user: json.user
                }
                )
            }
            );
        }
        },
        [ globalState.loggedIn ]
    )
    

    // *** Fetching avatar *** //

    useEffect(
        () => {
            fetch('http://localhost:8080/users/image-upload')
            .then(
                (result)=>result.json()
            )
            .then (
                (json)=> {
                    setState(
                    {
                        ...state,
                        avatar: json.user
                    }
                    )
                }
            );
        }
    )
    


    // *** Fetching updated user info *** //

    
    useEffect(
        () => {
            if (state.user.length === 0){

            fetch('http://localhost:8080/users/ProfilePage')
            .then(
                (result)=>result.json()
            )
            .then (
                (json)=> {
                    setState(
                    {
                        ...state,
                        user: json.user
                    }
                    )
                }
            );
        }
        }, 
        [state.user]
    )
    

    


    return (

        <div style={{backgroundColor:'white'}}>

            <AppBar/>

            <section className="sectionwave">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
                <div className="content">
                    <h2>WELCOME TO KAMANDA</h2>
                </div>
            </section>

            <div>

                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#userModal">
                    <i className="fas fa-user-edit fa-3x"></i>
                </button>

                <button type="button" className="eventsbtn create btn-info">
                    <Link className='link' to='/CreateEvents' style={{textDecoration:'none'}}>
                        Create Events
                    </Link>  
                </button>

                <button type="button" className="eventsbtn event btn-info">
                    <Link className='link' style={{textDecoration:'none'}}>
                        My Events
                    </Link>  
                </button>

                <button type="button" className="eventsbtn joined btn-info">
                    <Link className='link' style={{textDecoration:'none'}}>
                        Joined Events
                    </Link>  
                </button>


                {/* user updation form */}
                <ProfileForm/>

            </div>


            {/* user Card */}

            <div className="card-container">

                <div className="upper-container">
                    <div className="image-container">
                        <img src = {require('./trekking.jpg')} />
                    </div>
                </div>

                {
                    state.user.map(
                        (user)=>

                        <div className="lower-container">
                            <div>
                                <h3 className="name">
                                    {user.firstName +  user.lastName}
                                </h3>
                                <h4>
                                    {user.occupation}
                                </h4>
                                <h5>
                                    {user.basedIn}
                                </h5>
                            </div>
                            <div>
                                <p>
                                    {user.intersts}
                                </p>
                            </div>
                        </div>
                
                    )
                }
                
                
            </div>

            <Footer/>

        </div>
    
    )
}

export default ProfilePage;