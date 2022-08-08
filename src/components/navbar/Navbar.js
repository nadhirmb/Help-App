import React from 'react';
import logo from './logo192.png';
import SearchBar from './searchBar/SearchBar';
import HelpIcon from './button/HelpMe';


import {DivItemOne, DivItemTwo, NavbarWhole, DivInsideStyled, DivItemThree, DivItemFour} from './NavbarStyle';




const Navbar = () => {
  return (

   <NavbarWhole>
      <DivInsideStyled>
        <DivItemOne> <img src={logo} alt="lohgo"/></DivItemOne>
        <DivItemTwo> <SearchBar /> </DivItemTwo>
        <DivItemThree> <HelpIcon /> </DivItemThree>
        <DivItemFour> profil </DivItemFour>
      </DivInsideStyled>
    
    </NavbarWhole>
  );
}

export default Navbar;