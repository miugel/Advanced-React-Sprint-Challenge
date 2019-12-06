import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    
    return (
        <p className='dark-mode-button' onClick={toggleMode} data-testid='dark-mode-button'>dark mode</p>
    )
};

export default DarkModeButton;