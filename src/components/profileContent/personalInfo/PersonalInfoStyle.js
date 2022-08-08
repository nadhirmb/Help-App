import styled from "styled-components";


export const DivStyled = styled.div`
width : 300px; 
display : flex ;
flex-direction: column;
padding: 20px;
background-color: azure;
margin : 10px;
border-radius : 25px;
border: 2px solid grey;

&:hover {
  box-shadow: 4px 4px rgba(0, 255, 0, 0.3);
}



`;

export const InfoHeader = styled.div`
display : flex ;
justify-content: center;
background-color: #9DD180;
border-radius: 25px;
`;


export const InfoElement = styled.div`
padding : 10px 5px ;`;
export const InfoFooter = styled.div``;