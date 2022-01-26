import { Icon } from '@iconify/react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(true);
    return ( 
        <nav>
            <div className='appNameContainer'>
                <a href='/' className='appName'>Where in the World?</a>
            </div>
            <div className='darkModeContainer'>
                <button className='darkMode' onClick={() => setIsDarkMode(!isDarkMode)}>
                    <Icon icon={isDarkMode ? "bi:moon" : "bi:moon-fill"} color="hsl(200, 15%, 8%)" height="16"/>
                    <p className='darkModeText'>Dark Mode</p>
                </button>
            </div>
        </nav>
     );
}
 
export default Navbar;