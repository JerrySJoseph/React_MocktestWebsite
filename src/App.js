import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavBar from './components/NavigationBar/navBar';
import MockTest from './components/Mock-test/mockTest';

function App() {
  return <div>
    <CustomNavBar/>
    <MockTest/>
  </div>;
}

export default App;
