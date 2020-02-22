import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE={
    salad:15,
    bacon:20,
    meat: 30,
    cheese:25
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            meat: 0,
            cheese:0
        },
        totalPrice: 40,
        purchasable:false,
        purchasing:false
    }
    
    updateOrderButton=(ingredients)=>{
        const sum=Object.keys(ingredients)
        .map(igKey =>{
                return ingredients[igKey];
            }
        ).reduce((sum,el)=>{return sum+el;},0);
        this.setState({
            purchasable: sum > 0
        });
    }
    addIngredientsHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const newCount=oldCount+1;
        let updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=newCount;
        let newPrice=INGREDIENTS_PRICE[type]+this.state.totalPrice;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        });
        this.updateOrderButton(updatedIngredients);
    }
    purchasingBurgerHandler=()=>{
        this.setState({
            purchasing:true
        });
    }
    purchascancleBurgerHandler=()=>{
        this.setState({
            purchasing:false
        });
    }
    purchascountinueBurgerHandler=()=>{
        alert('countinue!!!!');
    }
    removeIngredientsHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        let newCount=oldCount-1;
        if(newCount<0){return;}
        let updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=newCount;
        let newPrice=this.state.totalPrice-INGREDIENTS_PRICE[type];
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        });
        this.updateOrderButton(updatedIngredients);
    }

    render(){
        const isDisabled={
            ...this.state.ingredients
        }
        for (let key in isDisabled){
            isDisabled[key]=this.state.ingredients[key]<=0;
        }
        return(
            <Aux>
                <Modal click={this.state.purchasing} clicked={this.purchascancleBurgerHandler}>
                    <OrderSummary ingredients={this.state.ingredients} purchascancle={this.purchascancleBurgerHandler}
                    purchascountinue={this.purchascountinueBurgerHandler}
                    price={this.state.totalPrice}/></Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredients={this.state.ingredients} 
                addIngredients={this.addIngredientsHandler} 
                removeIngredients={this.removeIngredientsHandler}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                disabled={isDisabled}
                click={this.purchasingBurgerHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;