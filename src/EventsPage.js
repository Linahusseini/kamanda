import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import CardEvent from './CardEvent.js';
import Jumbotron from './JumbotronEvent.js';
import AppBar from './AppBar';
import Footer from './Footer';
import Background from './parachute.jpg'

const EventsPage = () => {

    const [globalState, setGlobalState] = useContext(AppContext);
    const [state, setState] = useState({ events: []})

    useEffect(
        () => {
        
        if(globalState.loggedIn === true) {
            fetch('http://localhost:8080/events')
            .then(
            (result)=>result.json()
            )
            .then (
            (json)=> {
                setState(
                {
                    ...state,
                    events: json.events
                }
                )
            }
            );
        }
        },
        [ globalState.loggedIn ]
    )

    return (

        <div style={{backgroundImage: `url(${Background})`}}>

        <AppBar></AppBar>

        <Jumbotron 
          title="Featured Events" 
          description="Check out the upcoming events"
        >
        </Jumbotron>

        <div className="row">
          {
            globalState.loggedIn === true &&
            state.events.map(
              (events)=>
              
                <div className="col-lg-6 col-sm-12">
                  <center>
                  <CardEvent
                    title={events.community}
                    date={events.eventdate}
                    city={events.city}
                    description={events.description}
                    buttonLabel="Join"
                    buttonLink="#"
                  />
                  </center>
                </div>
                
            )
          }

          {
            globalState.loggedIn === false &&
            <div className="col-lg-12" style={{backgroundColor:'white'}}>
              <p style={{fontSize:'1.3rem', color:'black', textAlign:'center'}}>Please login to see the exclusive events. </p>
            </div>
          }
          </div>
       

        <Footer></Footer>

        </div>

    )
}

export default EventsPage;