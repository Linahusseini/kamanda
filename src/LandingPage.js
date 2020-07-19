import React, { useContext, useState } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import  './App.css';
import water from './water.jpg';



const LandingPage = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const [state, setState] = useState(
        {
            loading: false
        }
    )

    return (
          
        <body>
            <span className="kamanda">k<span style={{fontSize : "2.75rem"}}>a</span>m<span style={{fontSize : "2.4rem"}}>a</span>nda</span>
            
            {
                    globalState.loggedIn === false && 
                    <Link
                    to="/login"
                    className="buttonLeft">
                        Login
                    </Link>
                }


        <header className="showcase">

        <img className="showcase" 
                        src = {require('./water.jpg')} />
            
            <div className="content">

           
                
                                   
                   <h1>MEET OTHER ADVENTURE BUDDIES</h1>

                    
                    
                {
                    globalState.loggedIn === false && 
                    <Link
                    to="/register"
                    className="button">
                        Join
                    </Link>
                }

              
            </div>
                    {/* <button id="modalBtn" className="button">
                
                    <a className="login" href="login.html">JOIN</a></button> */}
                

        </header>
            
        <nav className="container grid-3 center">
            <Link className="services" to="/">
                {/* <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/> */}
                <div>
                <i className="fas fa-calendar-day fa-3x"></i>
                <a href="#"><h3>Events</h3></a>
            </div>             
            </Link> 

            <Link className="services" to="/Community">
                {/* <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/> */}
                <div>
                <i class="fas fa-address-book fa-3x"></i>
                <a href="#"><h3>Community</h3></a> 
                </div>
            </Link>

           
            <Link className="services" to="/GearBoutique">
                {/* <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/> */}
                 <div>
                    <i class="fas fa-store fa-3x"></i>
                    <a href="#"><h3>Gear Boutique</h3></a>
                </div>
            </Link>

           
                </nav>
                <section className="about bg-light">
                    <div className="container">
                    <div className="grid-2">
                        <div className="center" style={{height: "100%"}}>
                        <img className="adventure" 
                        src = {require('./adventures.jpg')} />
                        </div>
                        <div>
                        <h2>We are the Adventurists!</h2>
                        <p>
                            We're fighting to make the world less boring. Our planet used to slap us about the face-cheeks with iron fists to adventure every day. Maps had edges to walk off. Men feared the monsters that lurked in the deep. Whole continents lay undiscovered. <br/> <br/> But now, the entire surface of the Earth has been scanned by satellites and shovelled into your phone, tagged with twattery about which restaurant serves the best mocha-latte-frappeshite.
                            Getting lost and in trouble is no longer an occupational hazard of walking to the market. It is an art-form. One we strive to perfect. <br/> <br/> We live to find ways to make the world a bit more difficult. To bring chaos into our over-sanistized lives. To create adventures where you don't know what will happen tomorrow or if you'll even make it. Because we think there is no greater moment than those seconds as you leap into an abyss of uncertainty and disaster.
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                <footer className="center bg-dark">
                    <p>Kamanda &copy; 2020</p>
                </footer>
        </body>
    )
}

export default LandingPage;


