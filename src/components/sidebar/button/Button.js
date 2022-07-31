import React from 'react'

const ButtonStyle ={
  padding: '10px',
   color:'#000',
  'font-weight':'24px',
  'border-radius':'25px',
  'border': '4px solid #9DD180',
  'width': '280px',
  margin: '5px',
  
}
const Button = (props) =>{
  return (
    <button style={ButtonStyle}>helo {props.name}</button>
  );
}

export default Button;