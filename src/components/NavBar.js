import React, { useState } from 'react';
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

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        TBR
                    </Link>
                    <div className='menu-icon'>
                    <Hamburger onToggle={toggled => {
                        if (toggled) {
                            // open a menu
                        } else {
                            // close a menu
                        }
                        }} 
                    />
                    </div>
                    <ul className={sideShown ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Explorer
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar