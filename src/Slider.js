import React from 'react';



const Slider = (prop) => {
    return (

     
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{backgroundColor:'white'}}>
        <div class="carousel-inner">

          <div class="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1>Ready for an Adventure?</h1>
                  <p style={{color:'black', margin:'30px 0 50px', fontSize:'1.2rem'}}>“Every man can transform the world from one of monotony and drabness to one of excitement and adventure.”
                  – Irving Wallace</p>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={require('./images/image1.jpg')} className="img1"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Wanna enjoy horse riding?</h2>
                  <p style={{color:'black', margin:'30px 0 50px', fontSize:'1.2rem'}}>“A horse is the projection of peoples dreams about themselves, strong, powerful, beautiful. And it has the capability of giving us escape from our mundane existence." <br></br>
                  - Pam Brown</p>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={require('./images/image8.jpg')} className="img1"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Looking for a bikers gang?</h2>
                  <p style={{color:'black', margin:'30px 0 50px', fontSize:'1.2rem'}}>“You are on your own. You are not protected by two tons of steel, rubber, foam padding and safety glass. Neither are you steering two tons of guided missile toward other cars, people and property. If you are prepared to accept the responsibility of your own actions, then motorcycling can be both safe and thrilling. Riding is an art as well as a craft and no amount of explanation can take the place of experience." <br></br>
                  ― Theresa Wallach, Easy Motorcycle Riding, 1970</p>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={require('./images/image6.jpg')} className="img1"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
          <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Prepared to jump? </h2>
                  <p style={{color:'black', margin:'30px 0 50px', fontSize:'1.2rem'}}>Just standing on the sidelines, clearing your head, taking the plunge and enjoying the free fall… This is the best way to make memories that will remain with you for a long time after your holiday.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={require('./images/image3.jpg')} className="img1"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
          <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1> Let's Explore </h1>
                  <p style={{color:'black', margin:'30px 0 50px', fontSize:'1.2rem'}}><br/>"Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do." <br/> – Mark Twain
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={require('./images/image4.jpg')} className="img1"/>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="carousel-item">
          <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1> Join Us</h1>
                  <p style={{color:'black', margin:'30px 0 50px', fontSize:'1.5rem'}}><br/>
                    Stop thinking! <br/> Take the step! <br/> Let's go adventuring! </p>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={require('./images/image5.jpg')} className="img1"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="carousel-item">
            
          </div> */}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
          <span class="carousel-control-prev-icon" aria-hidden="true"  style={{backgroundColor:'black'}}></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


    )
}

export default Slider;