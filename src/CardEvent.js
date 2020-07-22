import React from 'react';
import './CardEvent.css'

export const CardButton = () => {} 


const CardEvent = (prop) => {

    let cardTitle;

    const joinEvent = () => {
      alert("Joined for " + cardTitle.innerText + " event")
    };

    return (
      <div >
        <div className="cardEvent">
          <div className="card-body">

            <h5 className="eventTitle"
              ref={ (comp)=> cardTitle = comp} >
                  {prop.title}
            </h5>
            <h6>{prop.city}</h6>
            <h7>{prop.date}</h7>
            <p>{prop.description}</p>
            <a 
                onClick={joinEvent}
                href={prop.buttonLink} 
                className="button"
            >{prop.buttonLabel}</a>
            
          </div>
        </div>
        <br></br>
        </div>
    )
}

export default CardEvent;