import React, { useState, useRef, useEffect } from 'react';
import './Header.scss';
import LightMode from './Components/LightMode';
import Whatsnew from './Components/Whatsnew';
import AccountNotification from './Components/AccountNotification';
import MyProfile from './Components/MyProfile';
import Chatbox from './Components/Chatbox';
import MyProfileDropdown from './Components/Dropdown-menus/MyProfileDropdown/MyProfileDropdown';
import AccountNotiDropdown from './Components/AccountNotiDropdown/AccountNotiDropdown';
import { Outlet } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lightMode, setLightMode] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isNotiOpen, setIsNotiOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prevState) => !prevState);
    };

    const changeLightMode = () => {
        // Implement light mode change logic here
    };



    return (
        <header className="sticky-header">
            <nav className="navbar">
                <div className="navbar__left">
                    <div className={menuOpen ? 'menuOpen' : 'menuClosed'}>
                        <img
                            onClick={handleMenuToggle}
                            width="24"
                            height="24"
                            src="https://img.icons8.com/plumpy/24/menu--v5.png"
                            alt="menu--v5"
                        />
                    </div>
                  
                </div>
                <div className="navbar__right">
                    <a href="#Chatbox" className="icon-link">
                        <Chatbox />
                    </a>
                    <a href="#" className="icon-link">
                        <Whatsnew />
                    </a>
                    <a href="#" onMouseEnter={()=>(setIsNotiOpen(true))} onMouseLeave={()=>(setIsNotiOpen(false))}  className="icon-link">
                        <AccountNotification />
                        {isNotiOpen && <AccountNotiDropdown/>}
                    
                    </a>
                    <a href="#" onMouseEnter={()=>(setDropdownOpen(true))} onMouseLeave={()=>(setDropdownOpen(false))}  className="icon-link">
                        <MyProfile />
                        {dropdownOpen && <MyProfileDropdown/>}
                    </a>
                </div>
                
            </nav>
            <Outlet/>
        </header>
    );
}

export default Header;
