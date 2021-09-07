import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';

const Toolbar = (porps) => (

<header className="Toolbar">

<div>Menu</div>

<div className="Logo">
<Logo />
</div>

<nav>
    <NavigationItems />
</nav>

</header>
    
);
export default Toolbar;