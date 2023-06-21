import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';

function NavBar() {
    const [sideShown, setSideShown] = useState(false);

    const closeMobileMenu = () => setSideShown(false);

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
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default NavBar