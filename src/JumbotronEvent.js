import React from 'react';
import Background from './default.jpg'

const Jumbotron = (prop) => {
    return (
      <div className="jumbotron jumbotron-fluid" style={{backgroundColor:'white', height:'45vh', paddingTop:'0'}}>
        <div className="container">
          <h1 className="display-4" style={{fontWeight:'bold'}}>{prop.title}</h1>
          <h3 className="lead" style={{color: 'black', fontFamily: 'Cabin Sketch', fontSize: '2rem'}}>{prop.description}</h3>
          {prop.children}
        </div>
      </div>
    )
}

export default Jumbotron;