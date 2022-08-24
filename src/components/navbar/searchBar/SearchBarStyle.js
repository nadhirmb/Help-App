import styled from 'styled-components';

export const InputStyled = styled.input`
  margin: 5px 10px 5px 0px ;
  padding: 10px ;
  width: 300px ;
  border-radius :  10px ;
  border: 1px solid #eee ;
  transition: 0.3s border-color ;
  box-shadow : 4px 4px 10px rgba(0,0,0,0.16) ;
`;


export const ButtonStyled = styled.button`
  appearance: none ;
  padding: 8px 10px ;
  border: none ;
  background-color : #F0F0F0 ;
  color: #121212 ;
  font-weight :100 ;
  border-radius: 25px ;
  transition-duration: 0.4s;
  border : 1px solid green;
&:hover{
  background-color: #121212;
  color: #F0F0F0;
}`;
