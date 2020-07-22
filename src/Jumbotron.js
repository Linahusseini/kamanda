import React from 'react';

const Jumbotron = (prop) => {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4" style={{fontWeight:'bold'}}>
            {prop.title}
          </h1>
          <p className="lead" style={{color:'black', fontFamily:'Cabin Sketch',  fontSize: '2rem'}}>
            {prop.description}
          </p>
          {prop.children}
        </div>
      </div>
    )
}

export default Jumbotron;