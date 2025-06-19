import React from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

const Navbar = () => {
    return (
        <label className="switch">

            <input
                type="checkbox"
            // checked={darkMode}
            // onChange={toggleTheme}
            />

            <span className="dark-mode-button">

                {/* {darkMode ? (<IoMoonOutline className='icon icon-moon' />) : (<IoSunnyOutline className='icon icon-sun' />)} */}
                <IoMoonOutline />
                <IoSunnyOutline />
            </span>

        </label>
    )
}

export default Navbar