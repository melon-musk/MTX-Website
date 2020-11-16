import React from "react";

function Navbar(props)
{
   return(
    <nav className="navbar">
       <ul className="navbar-nav">{props.children}</ul>
    </nav>
   ) 
}

function NavItem(props)
{

   return(<li className="nav-item">
      <a href={props.refSection} onClick={props.onClick} className="icon-button" >
         {props.navItemName}
         {props.logoTitle}
      </a>
   </li>);
}

function NavBurgerMenu(props)
{
   
   return (
      <li className="nav-item">
         <button className="menu-btn" onClick={props.functionCall}>{props.children}</button>
      </li>
   )
}

export default Navbar;
export {NavItem, NavBurgerMenu};