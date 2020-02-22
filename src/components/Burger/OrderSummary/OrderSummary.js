import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


const OrderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey=>{
        return(
        <li key={igKey}>
            <p><span style={{textTransform:'capitalize' }}>{igKey}:</span>
                {props.ingredients[igKey]}
            </p>
        </li>
    )});
    return(
        <Aux>
            <h3>Your Order Summary</h3>
            <p>you choose following Ingredients</p>
            <ul>
               {ingredientSummary} 
            </ul>
            <p><strong>Total Price:{props.price}</strong></p>
            <Button btnType="Danger" clicked={props.purchascancle}>CANCLE</Button>
            <Button btnType="Success" clicked={props.purchascountinue}>CONTINUE</Button>
        </Aux>
    );
}
export default OrderSummary;