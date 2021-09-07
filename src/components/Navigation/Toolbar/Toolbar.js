import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';

const Toolbar = () => (

<header className="Toolbar">



<div>Menu</div>


<Logo />
<nav>
    <NavigationItems />
</nav>

</header>
 
);
export default Toolbar;