import './Header.css';

export default function Header() {
  return (    
      <div id="Header">
        <div id="GuildName">Pastex Ambition</div>
        <div id="Progress">
          <div id="ProgressNM">10/10 <h3>NM</h3></div>
          <div id="ProgressHM">10/10 <h3>HM</h3></div>
          <div id="ProgressMM">10/10 <h3>MM</h3></div>
        </div>
        <div id="NextRaid">
          <p>Prochain raid dans : 1 jour, 4 heures, 26 minutes</p>
        </div>
      </div>
  );
}
