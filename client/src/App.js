import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import AssetAllocation from './components/AssetAllocation';
import NavigationBar from './components/NavigationBar';
import RegisterForm from './components/RegisterForm';
import AddAsset from './components/AddAsset';
import Porfolio from './components/Portfolio';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationBar />
          <div className='container mt-4'>
            <Switch>
              <Route path="/register" exact component={RegisterForm} />
              <Route path="/login" exact component={LoginForm}></Route>
              <Route path="/view-portfolio" exact component={AssetAllocation}></Route>
              <Route path="/add-asset" exact component={AddAsset}></Route>
              <Route path="/portfolio" exact component={Porfolio}></Route>
              <Route path="/add-asset" exact component={AddAsset}></Route>
              <Route path="/logout" exact component={Logout}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
