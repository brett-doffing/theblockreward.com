import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import './NavBar.css';
import { Button } from './Button';

function NavBar() {
    const [showLinks, setShowLinks] = useState(false)
    const [itemClassName, setItemClassName] = useState('nav-item-hidden')
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setItemClassName(showLinks ? 'nav-item-hidden' : 'nav-item')
        setShowLinks(!showLinks)
    };

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        if (screenWidth > 960) {
            setShowLinks(true)
            setItemClassName('nav-item')
        } else {
            setShowLinks(false)
            setItemClassName('nav-item-hidden')
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth)
        };
    }, [screenWidth])

    return (
        <>
        <nav className='navbar'>
            <ul>
                <li className='navbar-logo'>
                    <Link className='nav-link' to='/'>
                        {'T\u20bfR'}
                    </Link>
                </li>
                <li>
                    <Hamburger 
                        toggled={showLinks} 
                        toggle={toggleNav} 
                        color='#ffffff' 
                    />
                </li>
                <li className={itemClassName}>
                    <Link className='nav-link' to='/' onClick={toggleNav}>
                        Explorer
                    </Link>
                </li>
                <li className={itemClassName}>
                    <Link className='nav-link' to='/blog' onClick={toggleNav}>
                        Blog
                    </Link>
                </li>
                <li className={itemClassName}>
                    <Button className='btn' buttonStyle='btn--outline'>Sign Up</Button>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar