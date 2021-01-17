import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Members from "./components/Members/Members"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>    
          
      <div className="Content">
        <Switch>
          <Route path="/guild">
            <Header/> 
            <Members/> 
          </Route>
          <Route path="/raid">
            <h1>RAID</h1>
          </Route>
          <Route path="/mythic">
            <h1>MYTHIC +</h1>
          </Route>
          <Route path="/settings">
            <h1>GESTION</h1>
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
