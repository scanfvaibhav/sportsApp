import React from "react";
import { NavLink } from "react-router-dom";
import Login from './Login.js';
import SearchField from '../Components/SearchField.js';


function Header(props) {
  return (
      <div className="header-top">
      <div className="containerHeader">
        <div className="left-col">
        <h2>SportsX</h2>
        </div>
        
        <div className="center-col">
        </div>
        
        <div className="right-col">
        <Login/>
        </div>
      </div>
    </div>
  );
}
export default Header;