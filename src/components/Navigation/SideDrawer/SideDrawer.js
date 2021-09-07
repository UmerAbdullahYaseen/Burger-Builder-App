import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';
import './SideDrawer';

const SideDrawer = (porps) => {


    return (
          <div className="SideDrawer">
            <div className="Logo"  >
              <Logo />
            </div>
              <nav>
                 <NavigationItems />
              </nav>

          </div>
    );
}  

export default SideDrawer;