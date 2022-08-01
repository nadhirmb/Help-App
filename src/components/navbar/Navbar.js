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

const one ={
  width: '300px',
  display: 'flex',
  'flex-direction': 'row',
  'align-items': 'center',
  'justify-content': 'center',

}
const two ={
  width: '400px'
}
const three ={
  margin : '0px 40px'
}
const four ={
  flex : '1 1 0',
}

const Navbar = () => {
  return (

    <div style ={navbarWhole}>
      <div style = {navbarCenterd}>
        <div style={one}>
        <Logo/>
        </div>
        
        <div style={two}>
            <SearchBar />
        </div>
        <div style={three}>
        <HelpIcon />
        </div>

        <div style={four}> profile</div>
      </div>
    
    </div>
  );
}

export default Navbar;