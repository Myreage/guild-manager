import './Navbar.css';
import settings from "./static/settings.svg"

export default function Navbar() {
    return (
        <div id="Navbar">
          <div id="Player">
            <h1 id="Pseudo">Incelprince</h1>
            <p id="RioScore"><span class="yellow">9807</span> rio</p>  
          </div>  
          <ul>
            <li><a class="active" id="guild" href="">GUILDE</a></li>
            <li><a id="raid" href="">RAID</a></li>
            <li><a id="mythic" href="">MYTHIC+</a></li>
          </ul>
          <div id="settings">
            <img
              src={settings}
              style={{filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(182deg) brightness(104%) contrast(102%)"}}
              height="40vh" /> 
              <p>Gestion</p>
          </div>
        </div>  
    );
  }
  