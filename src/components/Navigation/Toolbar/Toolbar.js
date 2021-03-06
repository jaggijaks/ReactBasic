import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';


const Toolbar = () => {
    return (
        <header className='Toolbar'>
            <div>Menu</div>
            <Logo/>
            <nav className='toolbar nav'>...</nav>
        </header>
    );
}
export default Toolbar;