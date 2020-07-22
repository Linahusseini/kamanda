import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppBar from './AppBar';
import Footer from './Footer';
import Background from './oceanblue.jpg'
import './Body.css'

const EventCreation = () => {
    // A local state
    const [state, setState] = useState(
        {
            created: false,
            loading: false,
            errors: 0,
            messages: []
        }
    );

    // These will be assigned values by React
    let community;
    let description;
    let city;
    let eventdate;
    let members;

    
    const createEvent = () => {

        setState(
            {
                ...state,
                loading: true
            }
        )

        //To ensure users enter the details properly
        let errors = 0;
        let messages = [];

        if(community.value.length < 1) {
            errors++;
            messages.push('Please enter an event title')
        }
        if(eventdate.value.length < 1) {
            errors++;
            messages.push('Please enter the date of the event')
        }
        if(city.value == "Choose...") {
            errors++;
            messages.push('Please select the city')
        }
        if(members.value) {
            if (members.value < 1){
                errors++;
                messages.push('Please enter a valid number')
        }}
        if(description.value.length < 1) {
            errors++;
            messages.push('Please give a description of the event')
        }
       

        // If user makes any mistake
        if(errors > 0) {
            setState(
                {
                    ...state,
                    errors: errors,
                    messages: messages,
                }
            )
            return;
        } 
        // If no mistake occurs, reset the errors
        else {
            setState(
                {
                    ...state,
                    errors: 0,
                    messages: [],
                    loading: true
                }
            )
        }
        

        fetch('http://localhost:8080/events', 
            {
                method: 'POST',
                body: JSON.stringify({
                    community: community.value,
                    description: description.value,
                    city: city.value,
                    eventdate: eventdate.value,
                    members: members.value
                }),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(
            (response)=>response.json()
        )
        .then (
            (json) => {
                const { message } = json;
                
                if(message === "Event has been saved!") {
                    // update the local state
                    setState(
                        {
                            ...state,
                            created: true,
                            loading: false
                        }
                    )
                    
                } else {
                    
                    setState(
                        {
                            ...state,
                            loading: false
                        }
                    )
                }
            }
        )
    }

    // If the event is created, redirect them
    if(state.created === true) {
        return (<Redirect to="/events"/>)
    }

    // Otherwise, show the form to create an event
    else {
        return(
            <div style={{backgroundImage:`url(${Background})`}}>
                <AppBar/>

                <div className="container" >

                <h2 style={{textAlign: 'center'}}>Create a new Event now!</h2>
                <br></br>
                
                    <div className="row">
                        <div className="col-sm">
                            <div>


                                <div className="form-group">
                                    <label>
                                        Event Title
                                    </label>

                                    <input
                                    ref={ (comp)=> community = comp} 
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="community"/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Date
                                    </label>

                                    <input 
                                    ref={ (comp)=> eventdate = comp}
                                    type="date" 
                                    className="form-control" 
                                    aria-describedby="eventdate"/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        City
                                    </label>

                                    <select 
                                    ref={ (comp)=> city = comp}
                                    className="custom-select mr-sm-2"
                                    aria-describedby="city">
                                        <option selected>Choose...</option>
                                        <option>Abu Dhabi</option>
                                        <option>Dubai</option>
                                        <option>Sharjah</option>
                                        <option>Ajman</option>
                                        <option>Ras al Khaimah</option>
                                        <option>Umm al Quwain</option>
                                        <option>Fujeirah</option>
                                        <option>Al Ain</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>
                                        No. of members 
                                    </label>

                                    <input 
                                    ref={ (comp)=> members = comp}
                                    type="number" 
                                    className="form-control" 
                                    aria-describedby="members"
                                    placeholder="optional"/>
                                </div>

                                <div class="mb-3">
                                    <label>
                                        Description
                                    </label>
                                    <textarea
                                    ref={ (comp)=> description = comp} 
                                    className="form-control " 
                                    placeholder="Enter event description here.">
                                    </textarea>
                                </div>

                                <br></br>
                                <center>
                                <button
                                onClick={createEvent}
                                type="button"
                                className="button">
                                    Submit
                                </button>
                                </center>

                                {
                                    state.loading && 
                                    <div className="loader">
                                        <svg className="circular" viewBox="25 25 50 50">
                                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                                        </svg>
                                    </div>
                                }

                                {
                                    state.errors > 0 &&
                                    <div class="alert alert-info" role="alert">
                                        {
                                            state.messages.map(
                                                (message)=><p>{message}</p>
                                            )
                                        }
                                    </div>
                                }

                        </div>
                    </div>
                </div>
              </div>

              <Footer/>

            </div>


        )
        
    }
  }
  
  export default EventCreation;