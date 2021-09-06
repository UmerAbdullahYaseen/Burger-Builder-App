import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliry';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ingredientPrice = {
    salad: 0.3,
    meat: 1,
    bacon: 0.5,
    cheese:0.7

};


class BurgerBuilder extends Component {

state ={

    ingredients :{

        salad: 0,
        meat: 0,
        bacon: 0,
        cheese:0
    },
totalPrice: 4,
purchaseable: false,
purchasing: false
}

 updatePurchaseState(ingredients){
    const sum = Object.keys(ingredients).map(igKey=> {
        return ingredients[igKey];
    })
    .reduce((sum, el) =>
    {
         return sum + el;
    },0);
    this.setState({purchaseable: sum > 0});
 }

 purchaseHandler = () => {

    this.setState({purchasing: true})

 }
 
 purchaseCancelHandler = () => {

    this.setState({purchasing: false})

 }
 purchaseContinueHandler = () => {

    alert('Your Lunger on its way');
 }

addIngerdientHandler = (type) =>{
 
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngedients = {
          ...this.state.ingredients
    };
    updatedIngedients[type] = updatedCount;

    const priceAddition = ingredientPrice[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice,  ingredients: updatedIngedients })

    this.updatePurchaseState(updatedIngedients);
}

removeIngerdientsHandler = (type) =>{
    const oldCount = this.state.ingredients[type];  
    if (oldCount <= 0){
    return;}
    const updatedCount = oldCount - 1;
    const updatedIngedients = {
          ...this.state.ingredients
    };
    updatedIngedients[type] = updatedCount;

    const priceDeduction = ingredientPrice[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice,  ingredients: updatedIngedients })

    this.updatePurchaseState(updatedIngedients);
}


render(){

    const disabledInfo = {
           ...this.state.ingredients
    };
    for (let key in disabledInfo)
    {
        disabledInfo[key] = disabledInfo[key] <= 0

    }
    
     return(
         
             <Aux>
                 <Modal show={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                     
                     <OrderSummary 
                     ingredients ={this.state.ingredients}
                     purchaseCancelled={this.purchaseCancelHandler}
                     price={this.state.totalPrice}
                     purchaseContinue={this.purchaseContinueHandler}
                      />
                     
                 </Modal>
                 <Burger ingredients ={this.state.ingredients} />  

                 <BuildControls  
                  ingredientsAdded= {this.addIngerdientHandler}
                  ingredientsRemoved = {this.removeIngerdientsHandler}
                  disabled = {disabledInfo}
                  purchable = {this.state.purchaseable}
                  ordered = {this.purchaseHandler}
                  price = {this.state.totalPrice}
                  />

             </Aux>

     );

}



}

export default BurgerBuilder;