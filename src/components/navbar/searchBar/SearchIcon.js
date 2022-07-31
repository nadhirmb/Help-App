import React from 'react';

const bStyle = {
  appearance: 'none',
  padding:'10px',
  border:'none',
  'background-color':'#3F51B5',
  color:'#fff',
  'font-weight':'100',
  'border-radius':'5px',
}

const SearchIcon = () => {
  return(
<>
<button style={bStyle}> Search</button>
</>
  );
}
export default SearchIcon;
