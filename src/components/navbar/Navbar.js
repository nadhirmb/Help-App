import React from 'react';
import { Link } from 'react-router-dom';


import {HiMoon} from 'react-icons/hi'
import {CgSun} from 'react-icons/cg'

import logo from './logo192.png';
import SearchBar from './searchBar/SearchBar';
import HelpIcon from './button/HelpMe';
import Menu from './menu/Menu';
import {DivItemOne, DivItemTwo, NavbarWhole, DivInsideStyled, DivItemThree, DivItemFour} from './NavbarStyle';
import Profile from './profil/Profile';




const Navbar = (props) => {


  function changeTheme () {
    if (props.theme === "light") {
      return props.setTheme("dark");
    } else {
      return props.setTheme("light");
    }
  };



 const icon = props.theme === "light" ? <HiMoon size={20} />:  <CgSun size={20} /> ;
  return (

   <NavbarWhole >
      <DivInsideStyled>
        <DivItemOne > <Link to="/"><img style ={{ border : '2px solid white' , borderRadius :'45px', padding : '2px'}} src={logo} alt="logo" /></Link> </DivItemOne>
        <DivItemTwo> <SearchBar /> </DivItemTwo>
        <DivItemThree> <HelpIcon  name = {props.setfunc}   /> </DivItemThree>
        
        <DivItemFour> <Profile  > <Menu  ></Menu> </Profile ></DivItemFour>
        <button onClick={changeTheme} style={{padding : '5px'  , borderRadius:"25px"}}> {icon} </button>
      </DivInsideStyled>

      
    </NavbarWhole>
  );
}

export default Navbar;