import styled from 'styled-components';
import "../../../Colors";

export const ButtonStyle = styled.button`
appearance: none;
padding: 10px 20px ;
font-weight: Bold;
font-size: 16px;
background-color: #EDEB8F ; //Yellow
color: #39C3E7 ;
border-radius: 25px;
border: 2px solid #39C3E7;
transition-duration: 0.4s;
&:hover {
  background-color: #39C3E7; /* Blue */
  border: 2px solid #EDEB8F;
  color: white;
}`;
