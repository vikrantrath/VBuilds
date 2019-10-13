import React from 'react';
import './Header.css'
import QuickLinks from './Quicklinks'

const Header = ()=>{
    return (
        <div className="Header" >
           <a href="#home"><span className="logo">VB</span></a>
           <QuickLinks/>
        </div>
    );
};

export default Header;