import React from 'react';
import { ButtonStyled, InputStyled } from './SearchBarStyle';
import {FaSearch} from'react-icons/fa';

const searchBar = () => {
  return (
    <>
    <InputStyled />
    <ButtonStyled > <FaSearch/> Search </ButtonStyled>
    </> 
  );
}


export default searchBar;