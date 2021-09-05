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

        salad: 1,
        meat: 1,
        bacon: 2,
        cheese:2
    },
totalPrice: 4 
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
                  />

             </Aux>

     );

}



}

export default BurgerBuilder;