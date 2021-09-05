import React from 'react';
import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) =>{

return(

    <div className="Burger">
          
          <BurgerIngredients type="bread-top"/> 
          <BurgerIngredients type="bread-bottom"/> 
          <BurgerIngredients type="meat"/> 
          <BurgerIngredients type="cheese"/> 
          
 
    </div>


);



};

export default burger;