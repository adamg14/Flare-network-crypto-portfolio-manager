import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

function Logout(){

    const history = useHistory();

    async function handleButtonClick(){
        await axios.get("http://localhost:4000/logout");
        history.push("/login");

        // refresh the page for the user
        window.location.reload();
    };

    return(
        <div>
            <h1>Click Button to Logout</h1>

            <button type="button" className="btn btn-danger" onClick={ handleButtonClick }>Logout</button>
        </div>
    )
}

export default Logout;