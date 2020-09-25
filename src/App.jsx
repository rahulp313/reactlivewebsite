import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch ,Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Foter from './Foter';

const App = () => {
  return (
      <>
     
      <Navbar /> 
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/about" component = {About} />
          <Route exact path="/contact" component = {Contact}/>
          <Route exact path="/service" component = {Service}/>
          <Redirect to = '/' />           
        </Switch>
      <Foter />
      
      </>

  )
}

export default App;