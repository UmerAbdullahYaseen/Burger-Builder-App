import React from "react";
import './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'  },
    {label: 'Bacon', type: 'bacon'  },
    {label: 'Cheese', type: 'cheese'  },
    {label: 'Meat', type: 'meat'  },
];


const buildControls = (props) =>(   

<div className= "BuildControls">

<p className= "CurrentPrice"> Current Price: <strong> {props.price.toFixed(2)} </strong> $</p>
  
    {controls.map(ctrl =>(

    <BuildControl 
    key={ctrl.label} 
    label={ctrl.label}
    added   = {() => props.ingredientsAdded(ctrl.type)}
    removed = {() =>props.ingredientsRemoved(ctrl.type)}
    disabled = {props.disabled[ctrl.type]}
    
    />

    ))}
     <button onClick={props.ordered}  disabled={!props.purchable}
     className="OrderButton"> Order Now </button>

</div>

);

export default buildControls;