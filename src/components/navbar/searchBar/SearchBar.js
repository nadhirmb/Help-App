import React from 'react';
import SearchIcon from './SearchIcon';

const INPUT ={
      margin: '5px 10px 5px 0px',
      padding:'10px',
      width: '300px',
      'border-radius':'10px',
      border: '1px solid #eee',
      transition: ' .3s border-color',
      'box-shadow':'4px 4px 10px rgba(0,0,0,0.16)',
}


const searchBar = () => {
  return (
    <>
    <input style={INPUT} />
    <SearchIcon />
    </> 
  );
}


export default searchBar;