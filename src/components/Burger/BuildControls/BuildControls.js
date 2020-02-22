import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls=(props)=>{
    const Control=[
        {label:'Salad', type:'salad'},
        {label:'Meat', type:'meat'},
        {label:'Bacon', type:'bacon'},
        {label:'Cheese', type:'cheese'}
    ];
    return(
        <div className='BuildControls'>
            <p><strong>Current Price:{props.price}</strong></p>
            {Control.map(ctr=>{
               return <BuildControl key={ctr.label} label={ctr.label} type={ctr.type}
               addIngredients={props.addIngredients} removeIngredients={props.removeIngredients}
               disabled={props.disabled[ctr.type]}/>
            })}
            <button className='OrderButton' disabled={!props.purchasable} onClick={props.click}>ORDER NOW</button>
        </div>
    );
}
export default BuildControls;