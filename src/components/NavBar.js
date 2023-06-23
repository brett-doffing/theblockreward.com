import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import './NavBar.css';
import { Button } from './Button';

function NavBar() {
    const [sideShown, setSideShown] = useState(false);
    const [button, setButton] = useState(true);

    const closeMobileMenu = () => setSideShown(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <ul>
                <li className='navbar-logo'>
                    <Link to='/'>
                        {'T\u20bfR'}
                    </Link>
                </li>
                <li>
                    <Hamburger 
                        toggled={sideShown} 
                        toggle={setSideShown} 
                        color='#ffffff' 
                    />
                </li>
                <li className='nav-links'>
                    <Link to='/' onClick={closeMobileMenu}>
                        Explorer
                    </Link>
                </li>
                <li className='nav-links'>
                    <Link to='/blog' onClick={closeMobileMenu}>
                        Blog
                    </Link>
                </li>
                <li className='nav-links'>
                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar