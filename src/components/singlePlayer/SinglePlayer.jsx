import {useGetSinglePlayerQuery, useDeletePlayerMutation} from './singlePlayerSlice';
import {useGetAllPlayersQuery} from '../allPayers/allPlayersSlice';

export default function SinglePlayer({selectedPlayerId, setSelectedPlayerId, setSelectedPlayerName}) {

    const [deletePlayer] = useDeletePlayerMutation();
    //const {refetch} = useGetAllPlayersQuery();

    // Always call useGetSinglePlayerQuery but skip it if selectedPlayerId is not available
    const { data, isLoading } = useGetSinglePlayerQuery(selectedPlayerId, {
        skip: !selectedPlayerId // Skip the query if selectedPlayerId is not available
    });

    const player = data?.data?.player;

    const removePuppy = async (id) => {
        if(id){
            const response = await deletePlayer(id);
            window.location.reload();
        }
    }

    // const promise1 = new Promise(resolve => setTimeout(() => resolve('Result 1'), 1000));
    // const promise2 = new Promise(resolve => setTimeout(() => resolve('Result 2'), 500));
    // const promise3 = new Promise((_, reject) => setTimeout(() => reject('Result 3'), 1500));

    // Promise.all([promise1, promise2, promise3])
    //     .then(results => console.log("result", results))
    //     .catch(error => console.error('error', error));

    let detail="";

    if(isLoading){
        detail = <p>Loading player information...</p>;
    }else if(!selectedPlayerId){
        detail = <p>Please select a player to see more details.</p>;
    }else{
        detail = (
            <>
                <h2>
                    {player.name} : # {player.id}
                </h2>
                <p>{player.breed}</p>
                <p>Team {player.team?.name ??"Unassigned"}</p>
                <button onClick={() => removePuppy(player.id)}>
                Remove from roster
                </button>
                <figure>
                    <img src={player.imageUrl} alt={player.name} />
                </figure>
            </>
        );
    }

    return (
        <aside>
          <h2>Selected Puppy</h2>
          {detail}
        </aside>
      );

}
