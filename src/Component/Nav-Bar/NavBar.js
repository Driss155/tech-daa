// src/Component/Nav-Bar/NavBar.js

import './navbar.css';
import { useState } from 'react';

function NavBar({ onContactClick, onhomeClick, onserviceClick, onaboutClick, onProjectsClick }) {
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
    };
    const [activeLink, setActiveLink] = useState('/home');
    function handleClick(link) {
        setActiveLink(link);
    }

    return (
        <div className='containerr'>
            <div className='logo'>
                <img src="/navbar/Logo.png" alt='Logo' />
            </div>
            <div className='drop' onClick={toggleMenu}>
                <img src="/navbar/menue-nav.png" alt='DropDown' />
            </div>

            <div className='nav-large'>
                <ul>
                    <li>
                        <a href="/home" className={activeLink === '/home' ? 'active' : ''}
                            onClick={(e) => { e.preventDefault(); handleClick('/home'); onhomeClick(); }} > Home </a></li>

                    {/* --- REORDERED SECTION STARTS HERE --- */}
                    <li><a href="/Service" className={activeLink === '/Service' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); handleClick('/Service'); onserviceClick(); }} > Service </a></li>

                    <li><a href="/About" className={activeLink === '/About' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); handleClick('/About'); onaboutClick(); }} > About </a></li>
                    {/* --- REORDERED SECTION ENDS HERE --- */}

                    <li><a href="/Projects" className={activeLink === '/Projects' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); handleClick('/Projects'); onProjectsClick(); }} > Projects </a></li>

                    <li><a href="/Contact" className={activeLink === '/Contact' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); handleClick('/Contact'); onContactClick(); }} > Contact </a></li>
                </ul>
            </div>

            <div className={`menu-links ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li className={activeLink === '/home' ? 'active' : ''}>
                        <a href="/home"
                            onClick={(e) => { e.preventDefault(); handleClick('/home'); onhomeClick(); setIsOpen(false); }} > Home </a></li>
                    
                    {/* --- REORDERED SECTION FOR MOBILE MENU STARTS HERE --- */}
                    <li className={activeLink === '/Service' ? 'active' : ''}><a href="/Service"
                        onClick={(e) => { e.preventDefault(); handleClick('/Service'); onserviceClick(); setIsOpen(false); }} > Service </a></li>

                    <li className={activeLink === '/About' ? 'active' : ''}><a href="/About"
                        onClick={(e) => { e.preventDefault(); handleClick('/About'); onaboutClick(); setIsOpen(false); }} > About </a></li>
                    {/* --- REORDERED SECTION FOR MOBILE MENU ENDS HERE --- */}

                    <li className={activeLink === '/Projects' ? 'active' : ''}><a href="/Projects"
                        onClick={(e) => { e.preventDefault(); handleClick('/Projects'); onProjectsClick(); setIsOpen(false); }} > Projects </a></li>

                    <li className={activeLink === '/Contact' ? 'active' : ''}><a href="/Contact"
                        onClick={(e) => { e.preventDefault(); handleClick('/Contact'); onContactClick(); setIsOpen(false); }} > Contact </a></li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;