import './Navbar.css';
import settings from "./static/settings.svg"
import {
  NavLink
} from "react-router-dom";

export default function Navbar() {
    return (      
        <div id="Navbar">
          <div id="Player">
            <h1 id="Pseudo">Incelprince</h1>
            <p id="RioScore"><span class="yellow">9807</span> rio</p>  
          </div>  
          <ul>
            <li><NavLink class="active" id="guild" to="/guild">GUILDE</NavLink></li>
            <li><NavLink id="raid" to="/raid">RAID</NavLink></li>
            <li><NavLink id="mythic" to="/mythic">MYTHIC+</NavLink></li>
          </ul>
          <NavLink id="settings" to="/settings">
            <img
              src={settings}
              style={{filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(182deg) brightness(104%) contrast(102%)"}}
              height="40vh" /> 
              <p>Gestion</p>
          </NavLink>
        </div>
    );
  }
  