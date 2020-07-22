import React from 'react';
import { Link } from 'react-router-dom';

const NavBar2 = () => {
    return(

        <nav className="container grid-3 center">
            <Link className="services" to="/Events">
                <div>
                    <i className="fas fa-calendar-day fa-3x"></i>
                    <a href="#"><h4>Events</h4></a>
                </div>             
            </Link> 

            <Link className="services" to="/Community">
                <div>
                    <i class="fas fa-address-book fa-3x"></i>
                    <a href="#"><h4>Community</h4></a> 
                </div>
            </Link>

           
            <Link className="services" to="/GearBoutique">
                <div>
                    <i class="fas fa-store fa-3x"></i>
                    <a href="#"><h4>Gear Boutique</h4></a>
                </div>
            </Link>

           
        </nav>

    )
}

export default NavBar2;