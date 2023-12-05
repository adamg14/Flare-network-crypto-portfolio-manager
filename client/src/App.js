import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import AssetAllocation from './components/AssetAllocation';
import NavigationBar from './components/NavigationBar';
import RegisterForm from './components/RegisterForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationBar />
          <div className='container mt-4'>
            <Switch>
              <Route path="/register" exact component={RegisterForm} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
