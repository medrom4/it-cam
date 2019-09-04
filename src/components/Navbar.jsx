import React from 'react';
import s from './Navbar.module.css';



const Navbar = () => {
    return <nav className={s.nav}>
        <div><a href="#s">Profile</a></div>
        <div><a href="#s">Messages</a></div>
        <div><a href="#s">News</a></div>
        <div><a className={`${s.item} ${s.colp}`} href="#s">Music</a></div><br />
        <div><a href="#s">Settings</a></div>
    </nav>
}

export default Navbar; 