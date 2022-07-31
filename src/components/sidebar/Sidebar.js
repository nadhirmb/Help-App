import React from 'react';
import Button from './button/Button';
import ColoredLine from './ColoredLine';

const sidebarCenterd = {
  padding : '10px',
  width: '300px',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'flex-start',
  flexWarp: 'wrap',
  marginTop: '20px',
  borderRightStyle: 'groove',
  borderLeftColor: 'coral',
  borderLeftWidth: '7px',
} 



const Sidebar = () => {
  return (
    <>
    
      <div style={sidebarCenterd}>
      <div>
       <Button name = {'organisation'} />
       <Button name = {'Trends'} />
       <ColoredLine />
      </div>
      
      
       
      
      <div>
      <Button name = {'Food'} />
       <Button name = {'Clothes'} />
       <Button name = {'Medical'} />
       <Button name = {'Money'} />
       <Button name = {'Physical'} />
       <Button name = {'Tools'} />
       <ColoredLine />
      </div>
      <div>
         <button style={{ 
          backgroundColor: '#4CAF50',
           border: 'none',
           color: 'white',
           margin: '10px',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '12px',}} >search by location</button>
         <br/>
         <textarea></textarea>
         <ColoredLine />
      </div>
      <div>
         Terms and conditions - legal - company
      </div>

      </div>

    </>
  );
}

export default Sidebar;