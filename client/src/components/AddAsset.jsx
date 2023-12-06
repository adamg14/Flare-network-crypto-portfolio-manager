import React from "react";

function AddAsset(){
    return (
        <div>
            <h1>Add Asset</h1>
            <form action="" method="POST">
            <div className="mb-3">
                <label htmlFor="name-input" className="form-label">Asset Ticker</label>
                <input type="text" className="form-control" id="name-input" placeholder="Adam"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email-input" className="form-label">Date Bought</label>
                <input type="date" className="form-control" id="email-input" placeholder="adam@email.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password-input" className="form-label">Amount</label>
                <input type="number" className="form-control" id="password-input" placeholder="Enter password here - do not share with anyone"/>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary mb-3">Add Asset</button>
            </div>
            </form>
        </div>
    )
}

export default AddAsset;