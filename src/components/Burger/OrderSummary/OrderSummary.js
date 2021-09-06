import React from "react";
import Aux from "../../../hoc/Auxiliry";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {

const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {

    return <li key={igKey}> <span style={{textTransform: "capitalize"}}> {igKey} </span>: {props.ingredients[igKey]} </li>
});


return (    
<Aux>
<h3>Your Burger</h3>
<p>Your burger has :  </p>
<ul>

  {ingredientSummary}

</ul>

<p><strong> You total Price is : {props.price}$  </strong></p>

<p>Continue to CheckOut</p>
<Button btnType= "Danger" clicked={props.purchaseCancelled}    >Cancel</Button>
<Button btnType= "Success" clicked={props.purchaseContinue}    >Continue</Button>


</Aux>
);
}

export default OrderSummary;