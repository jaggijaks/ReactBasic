import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger=(props)=>{
    let addIngerdent=Object.keys(props.ingredients)
    .map(igkey =>{
        return [...Array(props.ingredients[igkey])]
        .map((_,i)=>{
            return <BurgerIngredient key={igkey+i} type={igkey}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(addIngerdent.length===0){addIngerdent=<p>Start Add Ingredients</p>}
    return(
        <div className='Burger'>
            <BurgerIngredient type="bread-top"/>
            {addIngerdent}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};
export default Burger;