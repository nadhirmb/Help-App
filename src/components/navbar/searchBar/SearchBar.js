import React from 'react';
import { ButtonStyled, InputStyled } from './SearchBarStyle';
import {FaSearch} from'react-icons/fa';

const searchBar = () => {
  return (
    <>
    <div style={{display : 'flex', justifyContent : 'center', alignItems: 'top'}}>
     <InputStyled />
      <FaSearch size = {25} style={{color : '#4CAF50', marginTop: '10px'}}/>  
    </div> 
    </>
  );
}


export default searchBar;