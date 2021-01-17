import './Members.css';

export default function Members() {
  return (    
      <div id="Members">
        <table>
            <thead>
                <tr>
                    <th>PSEUDO</th>
                    <th>CLASSE</th>
                    <th>SPECIALISATION</th>
                    <th>GRADE</th>
                    <th>ILVL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Baron</td>
                    <td>Démoniste</td>
                    <td>Affliction</td>
                    <td style={{color:"orange"}}>GM</td>
                    <td>267</td>
                </tr>
                <tr>
                    <td>Baron</td>
                    <td>Démoniste</td>
                    <td>Affliction</td>
                    <td>Membre</td>
                    <td>267</td>
                </tr>
                <tr>
                    <td>Baron</td>
                    <td>Démoniste</td>
                    <td>Affliction</td>
                    <td style={{color:"blue"}}>Officier</td>
                    <td>267</td>
                </tr>
                <tr>
                    <td>Baron</td>
                    <td>Démoniste</td>
                    <td>Affliction</td>
                    <td>Membre</td>
                    <td>267</td>
                </tr>
                <tr>
                    <td>Baron</td>
                    <td>Démoniste</td>
                    <td>Affliction</td>
                    <td>Membre</td>
                    <td>267</td>
                </tr>
            </tbody>            
        </table>
        <hr/>
      </div>
  );
}
