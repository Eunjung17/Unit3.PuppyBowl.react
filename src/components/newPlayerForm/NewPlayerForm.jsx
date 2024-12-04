import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAddPlayerMutation} from "./newPlayerFormSlice";
import {useGetAllPlayersQuery} from '../allPayers/allPlayersSlice';


export default function NewPlayerForm() {

    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [teamId, setTeamId] = useState(0);

    const[addPlayer, {isLoading, error}] = useAddPlayerMutation();
    const {refetch} = useGetAllPlayersQuery();
    const navigate = useNavigate();

    const postPlayer = async (event) => {
        event.preventDefault();
    
        // Placeholder image w/ random photos of dogs
        const imageUrl = "https://loremflickr.com/200/300/dog";
    
        const value = {name, breed, status, teamId, imageUrl};

        const {data} = await addPlayer(value).unwrap();

        await refetch();
    
         navigate(`/`);
    }

    return(
        <>
        <h2>New Player Form</h2>

        <div className="container">
        <form onSubmit={postPlayer}>
        <div className="row">
            <div className="col-25">
            <label>Name</label>
            </div>
            <div className="col-75">
            <input type="text" id="fname" name="name" placeholder="Player name" onChange={(e) => setName(e.target.value)}/>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
            <label>Breed</label>
            </div>
            <div className="col-75">
            <input type="text" id="lname" name="breed" placeholder="Player breed" onChange={(e) => setBreed(e.target.value)}/>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
            <label>Status</label>
            </div>
            <div className="col-75">
            <select id="status" name="status" onChange={(e) => setStatus(e.target.value)}>
                <option value="field">Choose field or bench</option>
                <option value="field">field</option>
                <option value="bench">bench</option>
            </select>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
            <label>teamId</label>
            </div>
            <div className="col-75">
            <input type="text" id="fname" name="teamId" placeholder="teamId (only number smaller than 500)" onChange={(e) => setTeamId(e.target.value)}/>
            </div>
        </div>

        <div className="row submit">
            <input type="submit" value="Submit"/>
        </div>
        {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>{error.message}</output>}
        </form>
        </div>
        </>
    );
}