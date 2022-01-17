import React, { Component, useState } from 'react';
import { Link } from 'react-scroll';
// import { useWindowWidthAndHeight } from './CustomHooks';
const Header = () => {

    const [isclose, setClose] = useState(true)

    return (
        <header>
            <div className='main-logo'>
            <Link className="logo">Mohit Jain</Link>
            </div>
            <div className='nav-main'>
                <Link className="nav-bar">Home</Link>
                <Link className="nav-bar">About</Link>
                <Link className="nav-bar">Poems</Link>
                <Link className="nav-bar">Story</Link>
                <Link className="nav-bar">Contact Us</Link>
            </div>
            {
                isclose ?
                    <div className='hamburger-btn' onClick={()=>{setClose(!isclose)}}>
                        <div className='hamburger-bar'></div>
                        <div className='hamburger-bar'></div>
                        <div className='hamburger-bar'></div>
                    </div>
                    :
                    <div className='close addTransiton' onClick={()=>{setClose(!isclose)}}></div>
            }
           
           
        </header>
    )
}

export default Header;