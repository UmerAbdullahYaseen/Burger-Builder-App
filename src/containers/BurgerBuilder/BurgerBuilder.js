import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliry';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
purchaseable: false
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

                 <Burger ingredients ={this.state.ingredients} />  

                 <BuildControls  
                  ingredientsAdded= {this.addIngerdientHandler}
                  ingredientsRemoved = {this.removeIngerdientsHandler}
                  disabled = {disabledInfo}
                  purchable = {this.state.purchaseable}
                  price = {this.state.totalPrice}
                  />

             </Aux>

     );

}



}

export default BurgerBuilder;