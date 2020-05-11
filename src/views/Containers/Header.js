import React from "react";
import { NavLink } from "react-router-dom";
import Login from './Login.js';
import SearchField from '../Components/SearchField.js';


function Header(props) {
  return (
      <div className="header-top">
      
    <Login style="align:left"/>XSPOrts
    </div>
  );
}
export default Header;