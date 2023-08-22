
import { Outlet, Link } from 'react-router-dom';
//yarn add react-router-dom@6
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  NavLinkOut,
  GreetingsContainer,
} from './navigation.styles';


const Navigation = () => {

    

    return (
      <Fragment>
        <NavigationContainer>


          <NavLinks>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
            
            <NavLink className='nav-link' to="/user-page">
              My Page
            </NavLink>
            <NavLink className='nav-link' to="/social-page">
              Social
            </NavLink>

            
          </NavLinks>

        </NavigationContainer>
        <Outlet />


      </Fragment>
  
    )
  }


export default Navigation; 