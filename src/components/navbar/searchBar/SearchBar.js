import React from 'react';
import { ButtonStyled, InputStyled } from './SearchBarStyle';
import {FaSearch} from'react-icons/fa';

const searchBar = () => {
  return (
    <>
    <InputStyled />
    <ButtonStyled > <FaSearch/>  </ButtonStyled>
    </> 
  );
}


export default searchBar;