import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="Nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/SignIn">Sign In</NavLink>
          <NavLink to="/budget">Budget</NavLink>
       </div>
    );
}
 
export default Navigation;