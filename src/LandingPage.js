import React, { useContext } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import logo from './logo.svg';



const LandingPage = () => {

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

    <body>
        <span className="kamanda">k<span style={{fontSize : "2.75rem"}}>a</span>m<span style={{fontSize : "2.4rem"}}>a</span>nda</span>
        <header className="showcase">
        <div className="content">
        <div className="title">
        <h1>MEET OTHER ADVENTURE BUDDIES</h1>
        <button id="modalBtn" className="button"><a className="login" href="login.html">JOIN</a></button>
        </div>
        </div>
        </header>
        <nav className="services">
            <Link className="navbar-brand" to="/">
                <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/>
                Kamanda
            </Link> 

            <Link className="navbar-brand" to="/WhatsHappenin">
                <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/>
                Whats Happenin'
            </Link>

           
            <Link className="navbar-brand" to="/GearBoutique">
                <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/>
                Gear Boutique
            </Link>

           
            <Link className="navbar-brand" to="/Academies">
                <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/>
                Coaches/Academies
            </Link>


            <div style={{display: 'flex'}}>
                {
                    globalState.loggedIn === false && <Link
                    to="/login"
                    className="btn btn-primary">
                        Log In
                    </Link>
                }

                {
                    globalState.loggedIn === true && 
                    <button onClick={logOut}
                    className="btn btn-primary">
                        Log Out
                    </button>
                }
            </div>
                </nav>
                <section className="about bg-light">
                    <div className="container">
                    <div className="grid-2">
                        <div className="center" style={{height: "100%"}}>
                        <img className="adventure" src = "images/adventures.jpg" />
                        </div>
                        <div>
                        <h2>We are the Adventurists!</h2>
                        <p>
                            We're fighting to make the world less boring. Our planet used to slap us about the face-cheeks with iron fists to adventure every day. Maps had edges to walk off. Men feared the monsters that lurked in the deep. Whole continents lay undiscovered. But now, the entire surface of the Earth has been scanned by satellites and shovelled into your phone, tagged with twattery about which restaurant serves the best mocha-latte-frappeshite. Getting lost and in trouble is no longer an occupational hazard of walking to the market. It is an art-form. One we strive to perfect. We live to find ways to make the world a bit more difficult. To bring charos into our over-sanistized lives. To create adventures where you don't know what will happen tomorrow or if you'll even make it. Because we think there is no greater moment than those seconds as you leap into an abyss of uncertainty and disaster.
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

{/* /*</nav>
<section class="services">
    <div class="container grid-3 center">
      <div>
        <i class="fas fa-calendar-day fa-3x"></i>
        <a href="#"><h3>What's Happenin'</h3></a>
      </div>
      <div>
        <i class="fas fa-store fa-3x"></i>
        <a href="#"><h3>Gear Boutique</h3></a>
      </div>
      <div>
        <i class="fas fa-chalkboard-teacher fa-3x"></i>
        <a href="#"><h3>Coach/ Academies</h3></a>
      </div>
      <div>
        <i class="fas fa-address-book fa-3x"></i>
        <a href="#"><h3>Community</h3></a>
      </div>
    </div>
  </section> */}
