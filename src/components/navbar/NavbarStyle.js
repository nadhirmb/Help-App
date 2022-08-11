import styled from 'styled-components';

export const NavbarWhole = styled.div`
width: 100% ;
display: flex ;
flex-direction: row;
align-items: center ;
justify-content: center ;
background-color : rgba(157, 209, 48, .3) ;
height: 60px ;
position: sticky;
top : 0;
backdrop-filter: blur(3px);
`;

export const DivInsideStyled = styled.div`
  width: 1000px ;
  display: flex ;
  flex-direction: row ;
  align-items :  center ;
  justify-content :  space-between ;
  height: 60px ;`;
  

export const DivItemOne = styled.div`
  width: 300px ;
  display:  flex ;
  flex-direction : row ;
  align-items: center ;
  justify-content : center ;
`; 
  
export const DivItemTwo = styled.div`
  width : 400px ;`;

export const DivItemThree = styled.div`
   margin : 0px 20px ;
`;

export const DivItemFour = styled.div`
flex : 1 1 0;
`;
