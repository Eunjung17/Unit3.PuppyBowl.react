import {useGetAllPlayersQuery} from './allPlayersSlice';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AllPlayers({setSelectedPlayerId, setSelectedPlayerName, selectedPlayerName}) {

  
    const {data, isSuccess, isLoading} = useGetAllPlayersQuery();
  
    const players = data?.data?.players;

    const navigate = useNavigate();

    // const [allPlayers, setAllPlayers] = useState(data?.data?.players);

  if(isLoading){
    return <p>Loading...</p>
  }
  
  const tempPlayers = players.filter((player) => {
    return player.name.includes(selectedPlayerName);
  });

    // useEffect(()=>{

    //   if(isSuccess){
    //     if(players && selectedPlayerName){
    //       const tempPlayers = players.filter(p => p.name.startsWith(selectedPlayerName));
    //       setAllPlayers(tempPlayers);

    //     }else setAllPlayers(data.data.players);

    //     console.log("allPlayers:" ,allPlayers);
    //   }

    // },[isSuccess, selectedPlayerName]);

    const goToDetail = (id) => {
      
        setSelectedPlayerId(id);

        navigate(`/`);
    }
  
    return (
        <div>
            <article>
                <h2>Players</h2>
                <ul className = "puppies">
                    { isLoading && <li>Loading players...</li>}
                    {tempPlayers.length > 0 ? (
                      tempPlayers.map((p) => (
                        <li key={p.id}>
                          <h3>
                            {p.name} #{p.id}
                          </h3>
                          <figure>
                            <img src={p.imageUrl} alt={p.name} />
                          </figure>
                          <button onClick={() => goToDetail(p.id)}>
                            See details
                          </button>
                        </li>
                      ))
                    ) : (
                      <li>No matching players</li>
                    )}
                </ul>
            </article>
        </div>
    );
}