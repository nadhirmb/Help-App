import styled from 'styled-components';

export const ButtonStyle = styled.button`
appearance: none;
padding: 10px 20px ;
font-weight: Bold;
font-size: 16px;
background-color: #4CAF50 ;
color: white ;
border-radius: 25px;
border: 2px solid #4CAF50;
transition-duration: 0.4s;
&:hover {
  background-color: #4CAF50; /* Green */

  box-shadow :  0px 0px 20px 0px rgba(40, 40 ,40 , 0.4);
  color: white;
  
}`;
