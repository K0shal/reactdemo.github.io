import List from "./List";
import Logo from "./Logo";
import ProfileIcon from "./ProfileIcon";
import './Navbar.css'
import React from "react";
function Navbar(props) {
  
  return <div className="navbar">
    <Logo logo={props.logo}/>
    <List/>
    <ProfileIcon fireIcon={props.fireIcon} profileIcon={props.profileIcon}/>
  </div>;
}
export default Navbar;
