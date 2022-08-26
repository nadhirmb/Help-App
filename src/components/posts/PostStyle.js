import styled from "styled-components";

export const ButtonDonate = styled.button`
  background-color: #4CAF50;
  border-radius : 15px ;
  border : 0px solid grey ;
  width : 150px; 
  padding : 5px;
  color : white;
  font-size : 14px ;
  font-weight : bold ;

  &:hover{
    background-color: #4CAF50 ;
  }
`;

export const ButtonUp = styled.button`
  background-color: #4CAF50;
  border-radius : 15px ;
  border : 0px solid grey ;
  width : 150px; 
  padding : 5px;
  color : white;
  font-size : 14px ;
  font-weight : bold ;
  
  &:hover{
    background-color: #4CAF50
  }
`;

export const DivPost = styled.div`
  background-color: ${ props => props.theme.secondaryGrey } ;
  border-radius: 25px ;
  width : 500px ;
  margin: 10px ;
  display: flex ;
  flex-direction : column ;
  `
  



  export const DivHead = styled.div`
  
  display: flex ;
  flex-direction: row ;
  align-items :  center ;
  height: 60px ;`  
  


  export const DivFooter = styled.div`
    
    margin: 15px 60px ;
    display : flex ;
    justify-content: space-between ;
  `;
