//import './App.css';
import React, { Suspense } from 'react';
import LukeNav from './components/LukeNav';
import HomePage from './components/home/HomePage';
import LukeFooter from './components/LukeFooter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container, Spinner } from 'reactstrap';

const LukePortfolio = React.lazy(() => import('./components/portfolio/portfolio'));
const LukeSkills = React.lazy(() => import('./components/skills/LukeSkills'));
const OrdKrig = React.lazy(() => import('./components/projects/ordkrig'));

function App() {
  return (
    <div>    
      <Router>         
        <LukeNav />   
        <Container>
        <p></p>
        <p></p>
        <Suspense fallback={<div className="text-center"><Spinner color="info" /></div>}>
          <Switch>
            <Route path="/" exact><HomePage /></Route>
            <Route path="/portfolio"><LukePortfolio /></Route> 
            <Route path="/skills"><LukeSkills /></Route> 
            <Route path="/projects/ordkrig"><OrdKrig /></Route>       
          </Switch>
        </Suspense>
        <hr className="my-2" /> 
        <LukeFooter /> 
        </Container>
      </Router> 
      <br/>     
    </div>    
  );
}

export default App;
