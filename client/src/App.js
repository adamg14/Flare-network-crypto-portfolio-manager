import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import AssetAllocation from './components/AssetAllocation';
import NavigationBar from './components/NavigationBar';
import RegisterForm from './components/RegisterForm';
function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <NavigationBar></NavigationBar>
      {/* <AssetAllocation></AssetAllocation> */}
    </div>
  );
}

export default App;
