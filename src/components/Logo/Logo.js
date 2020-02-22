import React from 'react';
import burgerLogo from '../../assests/images/burger-logo.png';
import './Logo.css';
const Logo=()=>{
    return(
        <div className='Logo'>
            <img src={burgerLogo} alt='LOGO'/>
        </div>
    );
}
export default Logo;