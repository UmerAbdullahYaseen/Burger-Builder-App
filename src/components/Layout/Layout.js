import React from 'react';
import Aux from '../../hoc/Auxiliry';
import './Layout.css';
const layout = ( props ) =>
(
<Aux>
    <div>TooBar, SideDrawer, BackDrop</div>

    <main className= "Content" >{props.children}</main>   

    </Aux>
);

export default layout;