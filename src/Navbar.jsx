import React, { useContext } from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import './Navbar.css'
import { useTheme } from './ThemeContext'

const Navbar = () => {

    const { darkMode, toggleTheme } = useTheme()

    return (
        <>
            <nav style={{display:'flex', justifyContent:'center'}}>
                <div className='navbar-container'>
                    <h1 className='navbar-heading'>Character Counter</h1>
                    <label className="switch">

                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={toggleTheme}
                        />

                        <span className="dark-mode-button">

                            {darkMode ? (<IoMoonOutline className='icon icon-moon' />) : (<IoSunnyOutline className='icon icon-sun' />)}
                        </span>

                    </label>
                </div>
            </nav>
        </>
    )
}

export default Navbar