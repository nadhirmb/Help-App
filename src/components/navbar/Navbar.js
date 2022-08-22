import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



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



 // const icon = props.theme === "light" ? <HiMoon size={40} />:  <CgSun size={40} /> ;
  return (

   <NavbarWhole >
      <DivInsideStyled>
        <DivItemOne> <Link to="/"><img src={logo} alt="logo" /></Link> </DivItemOne>
        <DivItemTwo> <SearchBar /> </DivItemTwo>
        <DivItemThree> <HelpIcon  name = {props.setfunc}   /> </DivItemThree>
        <button onClick={changeTheme}> d</button>
        <DivItemFour> <Profile > <Menu></Menu> </Profile ></DivItemFour>
      </DivInsideStyled>
    
    </NavbarWhole>
  );
}

export default Navbar;