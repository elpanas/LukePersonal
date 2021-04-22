//import './App.css';
import LukeNav from './components/LukeNav';
import LukePortfolio from './components/portfolio/LukePortfolio';
import HomePage from './components/home/HomePage';
import LukeSkills from './components/skills/LukeSkills';
import OrdKrig from './components/projects/ordkrig';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <LukeNav />
        <p></p>
        <p></p>
        <Switch> 
          <Route path="/" exact><HomePage /></Route>
          <Route path="/portfolio"><LukePortfolio /></Route> 
          <Route path="/skills"><LukeSkills /></Route> 
          <Route path="/projects/ordkrig"><OrdKrig /></Route>       
        </Switch> 
      </Router> 
      <br/>     
    </div>    
  );
}

export default App;
