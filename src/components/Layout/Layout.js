import React from 'react';
import Aux from '../../hoc/Auxiliry';
import classes from './Layout.css';
const layout = ( props ) =>
(
<Aux>
    <div>TooBar, SideDrawer, BackDrop</div>

    <main className= {classes.Content} >{props.children}</main>   

    </Aux>
);

export default layout;