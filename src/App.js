import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">

      <header className="header">
        <img src="https://www.messengerpeople.com/wp-content/uploads/2019/01/icon-400-messenger-apple-messages-medium2x.png"></img>
      </header>


      <nav className="nav">
        <div><a href="#s">Profile</a></div>
        <div><a href="#s">Messages</a></div>
        <div><a href="#s">News</a></div>
        <div><a href="#s">Music</a></div><br />
        <div><a href="#s">Settings</a></div>
      </nav>


      <div className="content">
      <img src="http://www.unificatie.nl/wp-content/uploads/2015/03/flat_earth1.jpg"></img>
      <div>
        ava + description
      </div>
      <div>
        my post
        <div>
          new post
        </div>
      </div>
      <div>
        <div>
          post_1
        </div>
        <div>
          post_2
        </div>
      </div>
      </div>      

    </div>
  );
}

export default App;