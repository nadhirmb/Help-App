import React from 'react';
import logo from './logo192.png';
import SearchBar from './searchBar/SearchBar';
import HelpIcon from './button/HelpMe';
import Menu from './menu/Menu';
import {DivItemOne, DivItemTwo, NavbarWhole, DivInsideStyled, DivItemThree, DivItemFour} from './NavbarStyle';
import Profile from './profil/Profile';
import { Link } from 'react-router-dom';




const Navbar = (props) => {
  return (

   <NavbarWhole>
      <DivInsideStyled>
        <DivItemOne> <Link to="/"><img src={logo} alt="logo" /></Link> </DivItemOne>
        <DivItemTwo> <SearchBar /> </DivItemTwo>
        <DivItemThree> <HelpIcon  name = {props.setfunc} /> </DivItemThree>
        <DivItemFour> <Profile > <Menu></Menu> </Profile ></DivItemFour>
      </DivInsideStyled>
    
    </NavbarWhole>
  );
}

export default Navbar;