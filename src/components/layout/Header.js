import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>

            <h1>TodoList</h1>
            <Link style={{color: '#ffffff', paddingRight: '5px'}} to="/">Home</Link>  |  <Link style={{color: '#ffffff', paddingLeft: '5px'}} to="about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

export default Header;