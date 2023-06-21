import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Divide as Hamburger } from 'hamburger-react'

function NavBar() {
    const [sideShown, setSideShown] = useState(false)
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
                </div>
            </nav>
        </>
    )
}

export default NavBar