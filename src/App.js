//import './App.css';
import LukeNav from './components/LukeNav';
import LukePortfolio from './components/portfolio/portfolio';
import HomePage from './components/home/HomePage';
import LukeSkills from './components/skills/LukeSkills';
import OrdKrig from './components/projects/ordkrig';
import LukeFooter from './components/LukeFooter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Container } from 'reactstrap';

function App() {
  return (
    <div>    
      <Router>         
        <LukeNav />   
        <Container>
        <p></p>
        <p></p>
        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/portfolio"><LukePortfolio /></Route> 
          <Route path="/skills"><LukeSkills /></Route> 
          <Route path="/projects/ordkrig"><OrdKrig /></Route>       
        </Switch>
        <hr className="my-2" /> 
        <LukeFooter /> 
        </Container>
      </Router> 
      <br/>     
    </div>    
  );
}

export default App;
