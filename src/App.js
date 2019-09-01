import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>    
  );
}

const Header = () => {
  return ( 
    <div>
      <a href="#s">Home</a>
      <a href="#s">News</a>
      <a href="#s">Contact</a>
    </div>
  );
}

const Technologies = () => {
  return ( 
    <div className="App">
        <ul>
          <li>com</li>
        </ul>
    </div>
  );
}

export default App;