import React from 'react';
import Logo from './logo/logo';
import SearchBar from './searchBar/SearchBar';
import HelpIcon from './button/HelpB';




const navbarCenterd = {
  width: '1000px',
  display: 'flex',
  'flex-direction': 'row',
  'align-items': 'center',
  'justify-content': 'space-between',
  height: '60px',
} 

const navbarWhole ={
  width: '100%',
  display: 'flex',
  'flex-direction': 'row',
  'align-items': 'center',
  'justify-content': 'center',
  background: '#9DD180',
  height: '60px',
  
}

const Navbar = () => {
  return (

    <div style ={navbarWhole}>
      <div style = {navbarCenterd}>
        <Logo/>
        <div>
            <SearchBar />
    
        </div>
        <HelpIcon />
        <div> profile</div>
      </div>
    
    </div>
  );
}

export default Navbar;