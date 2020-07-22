import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppContext from './AppContext';
import LandingPage from './LandingPage';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import ProfilePage from './Profile';
import GearBoutique from './GearBoutique'
import EventsPage from './EventsPage'
import './App.css';
import CommunityPage from './CommunityPage';
import EventCreation from './EventsCreation';

const PrivateRoute = ({ component: Component, ...otherProps }) => {

  const [globalState, setGlobalState] = useContext(AppContext);

  if(globalState.loggedIn) {
    return(<Route component={Component} {...otherProps} />);
  } else {
    return(<Redirect to="/ProfilePage" />);
  }
}

const App = () => {

  const [globalState, setGlobalState] = useState({
    loggedIn: localStorage.getItem('jwt') ? true : false,
    user: null
  });

  return (

    <AppContext.Provider value={[globalState, setGlobalState]}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LandingPage}/>
          <Route path="/login" exact={true} component={LoginPage}/>
          <Route path="/register" exact={true} component={RegistrationPage}/>
          <Route path="/gearboutique" exact={true} component={GearBoutique}/>
          <Route path="/events" exact={true} component={EventsPage}/>
          <Route path="/community" exact={true} component={CommunityPage}/>
          <Route path="/CreateEvents" exact={true} component={EventCreation}/>
          <PrivateRoute path="/ProfilePage" exact={true} component={ProfilePage}/>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}


export default App;