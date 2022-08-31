
import styled from "styled-components";


export const PostContentStyled = styled.div`
position : fixed ;
top : 0 ;
left : 0 ;
width : 100%;
height : 100vh;
background-color: rgba(150,150,150,0.1);
display : flex ;
justify-content : center ;
align-items : center ;
`;

export const InsidePostContent = styled.div`
position : relative ;
border-radius:  25px;
padding: 32px;
width : 100% ;
max-width : 640px ;
background-color : white ;
`;


export const CloseBtn = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 50px;
  height: 50px;
  color: green ;
  font-weight: bold;
  border-radius: 50px ;
  font-size: 36px;


  &:hover {
    background-color: rgba(150, 150, 150, 1);
    border: 0px;
    border : 2px solid grey;
  }
`;

export const ContentElement = styled.div`
padding : 5px ;
`;