import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
return (
    <div className="CheckhoutSummary">

        <h1>We hope it tastes well!</h1>
        <div style={{width: '300px', height: '300px', marginRight: '200px' }} >
            <Burger ingredients= {props.ingredients} />

        </div>
        <div className="Buttoon">
        <Button  className="Danger" clicked={props.checkoutCancelled} >Cancle</Button>
        <Button  className="Success" clicked={props.checkoutContinuted} >Continue</Button></div>
    </div>

);

}

export default checkoutSummary;