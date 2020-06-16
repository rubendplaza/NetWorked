import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='navBar sticky'>
            <ul className='main-nav'>
                <li className='linkItem'><a href='google.com' className='link appName'>NetWorked</a></li>
                <li className='linkItem push'><a href='google.com' className='link'>About</a></li>
                <li className='linkItem'><a href='google.com' className='link'>Contact</a></li>
                <li className='linkItem'><a href='google.com' className='link'>Team</a></li>
            </ul>
        </nav>
    )
}

export default Header;