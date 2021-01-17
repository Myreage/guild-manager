import './Members.css';
import { useEffect, useState } from 'react';
import config from "../../config";

export default function Members() {

    
    const [accessToken, setAccessToken] = useState("");
    const [roster, setRoster] = useState([]);

    async function getAccessToken() {        
        const clientId = config.clientId;
        const secretId = config.secretId;
        const url = "https://us.battle.net/oauth/token";

        const headers = {
            "Authorization": "Basic " + btoa(clientId + ":" + secretId),
            "Content-Type": "application/x-www-form-urlencoded"
        }

        const result = await fetch(url, {
            method:'POST',
            headers: headers,
            body: "grant_type=client_credentials"
        })
        const final = await result.json();
        setAccessToken(final.access_token)
    }

    function classCode(id){
        return {
            1: "warrior",
            2: "pal",
            3: "hunt",
            4: "rogue",
            5: "priest",
            6: "dk",
            7: "sham",
            8: "mage",
            9: "warlock",
            10: "monk",
            11: "druid",
            12: "dh"
        }[id];

    }

    async function getRoster() {       
        
        let urlRoster = "https://eu.api.blizzard.com/data/wow/guild/hyjal/pastex-ambition/roster?namespace=profile-eu&locale=fr_FR&access_token=" + accessToken;
        const resultRoster = await fetch(urlRoster);

        const roster = await resultRoster.json();

        
        let result = await Promise.all(roster.members.map(async (member) => {
                let urlCharacter = "https://eu.api.blizzard.com/profile/wow/character/hyjal/" + member.character.name.toLowerCase() +"?namespace=profile-eu&locale=fr_FR&access_token=" + accessToken;
                const resultCharacter = await fetch(urlCharacter);

                return {
                    ...await resultCharacter.json(),
                    rank : member.rank
                };                        
        }));

        result = result.sort((m1,m2) => m1.rank - m2.rank);
        
        setRoster(result);
    }

    useEffect(() => {    
        getAccessToken();        
    })

    useEffect(() => {  
        if(accessToken){
            getRoster()  
        }     
    },[accessToken])


    

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
                {roster.map((member) =>
                <tr>
                    <td>{member.name}</td>
                    <td className={classCode(member.character_class.id)}>{member.character_class.name}</td>
                    <td>{member.active_spec.name}</td>
                    <td>{member.rank}</td>
                    <td>{member.average_item_level}</td>
                </tr>
                )}           
            </tbody>            
        </table>
        <hr/>
      </div>
  );
}
