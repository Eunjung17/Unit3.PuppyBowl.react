import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import {useGetAllPlayersQuery} from '../components/allPayers/allPlayersSlice';
import { useEffect } from "react";

export default function NavBar({ setSelectedPlayerName, selectedPlayerName}) {

    const navigate = useNavigate();
    //const {refetch} = useGetAllPlayersQuery();

    // const search = (event) => {
    //     event.preventDefault();

    //     setSelectedPlayerName(event.target.search.value);
    // }

    // useEffect(() => {

    //     navigate(`/`);
    // }, [selectedPlayerName]);

    const handleLinkClick = () => {
        setSelectedPlayerName("");
        navigate("/");
    };

    return(
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid naveBar">
                <div className="navbar-nav menu">
                    <Link to ="/" onClick={handleLinkClick}><h6>All Players</h6></Link>
                    <Link to ="/newForm"><h6>New Player Form</h6></Link>
                </div>
                <div>
                    {/* <form className="d-flex" role="search" onSubmit={search}> */}
                    {/* <input className="form-control me-2" type="search" placeholder="Search with Name" aria-label="Search" onChange={(e)=>setSelectedPlayerName(e.target.value)}/> */}
                    <input className="form-control me-2" type="search" placeholder="Search with Name" aria-label="Search" name="search" value={selectedPlayerName} onChange={(e) => setSelectedPlayerName(e.target.value)}/>
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    {/* </form> */}
                </div>
            </div>
        </nav>
    );
}