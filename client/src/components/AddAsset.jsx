import React, {useState} from "react";
import axios from "axios";
import { useHistory  } from "react-router-dom";

function AddAsset(){
    const [tickerInput, setTickerInput] = useState();
    const [amountInput, setAmountInput] = useState();

    const history = useHistory();
    function handleTickerInput(event){
        setTickerInput(event.target.value);
    }

    function handleAmountInput(event){
        setAmountInput(event.target.value);
    }

    function handleButtonClick(){
        const postRequestData = {
            ticker: tickerInput,
            amount: amountInput
        };

        axios.post("http://localhost:4000/add-asset", postRequestData).then(() => {
            console.log("asset added");
            history.push("/portfolio");
            // refresh the page for the user
            window.location.reload();
        });

    }
    
    return (
        <div>
            <h1>Add Asset</h1>
            <form action="" method="POST">
            <div className="mb-3">
                <label htmlFor="name-input" className="form-label">Asset Ticker</label>
                <input type="text" className="form-control" id="name-input" placeholder="Adam" onChange={ handleTickerInput }/>
            </div>
            <div className="mb-3">
                <label htmlFor="password-input" className="form-label">Amount</label>
                <input type="number" className="form-control" id="password-input" placeholder="1.23" step="any" onChange={ handleAmountInput }/>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary mb-3" onClick={ handleButtonClick }>Add Asset</button>
            </div>
            </form>
        </div>
    )
}

export default AddAsset;