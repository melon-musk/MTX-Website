import React from 'react';
import { useState} from 'react';
import NavBar, {NavItem, NavBurgerMenu} from "./navbar";
// import DropDown from './dropDownMenu';

let windowWidth=window.innerWidth;

function logo()
{
  return <img className="logo" src="images/logo.png" alt="logo"></img>
}

function Navigation()
{
    const [isCollapsedMenu, setIsCollapsedMenu] = useState(windowWidth <= 770 ? true : false);
    const [renderDropDown, setRenderDropDown] = useState(false);
    window.addEventListener('resize', ()=> {windowWidth=window.innerWidth; setIsCollapsedMenu(windowWidth <= 770 ? true : false);});


  return (<div >
    <NavBar>
    <div><NavItem refSection="./" navItemName={logo()} logoTitle="Magnatech Xystems"className="logo">MagnaTech Xystems</NavItem></div>
      
      {!isCollapsedMenu ? <div className="items">
      <NavItem refSection="#Gaming" navItemName="Gaming Rigs"></NavItem>
      <NavItem refSection="#Workstation" navItemName="Workstations"></NavItem>
      <NavItem refSection="#Services" navItemName="Services"></NavItem>
      <NavItem refSection="#Contact" navItemName="Contact"></NavItem>
      </div> : <NavBurgerMenu functionCall={()=>setRenderDropDown(!renderDropDown)}><i class="fas fa-bars fa-lg"></i></NavBurgerMenu>}

    </NavBar>

    {renderDropDown && <div className="dropDown">
    <ul>
      <NavItem refSection="#Gaming" onClick={()=>setRenderDropDown(!renderDropDown)} navItemName="Gaming Rigs"></NavItem>
      <NavItem refSection="#Workstation" onClick={()=>setRenderDropDown(!renderDropDown)} navItemName="Workstations"></NavItem>
      <NavItem refSection="#Services" onClick={()=>setRenderDropDown(!renderDropDown)} navItemName="Services"></NavItem>
      <NavItem refSection="#Contact" navItemName="Contact" onClick={()=>setRenderDropDown(!renderDropDown)}></NavItem>
    </ul>
   
    </div>}

    </div>);
}

export default Navigation;