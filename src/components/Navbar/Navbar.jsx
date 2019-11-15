import React from 'react';
import s from './Navbar.module.css';



const Navbar = () => {
    return <nav className={s.nav}>
        <div><a href="/profile">Profile</a></div>
        <div><a href="/dialogs">Messages</a></div>
        <div><a href="/news">NewS</a></div>
        <div><a className={`${s.item} ${s.colp}`} href="/music">Music</a></div><br />
        <div><a href="/settings">Settings</a></div>
    </nav>
}

export default Navbar; 