import React from 'react';
import './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button className='Less' onClick={()=>{props.removeIngredients(props.type)}} disabled={props.disabled}>Less</button>
            <button className='More' onClick={()=>{props.addIngredients(props.type)}}>more</button>
        </div>
    );
}

export default BuildControl;