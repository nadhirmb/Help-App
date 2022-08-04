import styled from "styled-components";


export const DivStyled = styled.div`
width : 450px; 
background-color: azure;
margin : 10px;
padding: 20px;
border-radius : 25px;
border : 2px solid grey ;
`;


export const DivElements = styled.div`
          display: flex ;
          flex-wrap : wrap;`;


export const DivElement = styled.div`
 display: flex ;
 flex-direction: column;
 align-items: center;
 width : 115px;
 height: 100px;
 border-radius : 25px;
 border : 2px solid grey ;
 padding: 10px;
 margin : 10px ;

 &:hover{
  box-shadow: 2px 2px grey;
 }

 
 `;  
 
 
export const ContentHeader = styled.div`
    display : flex ;
    justify-content: center;
    background-color: #9DD180;
    border-radius: 25px;
`;