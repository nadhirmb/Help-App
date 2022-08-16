
import styled from 'styled-components';


export const FormStyling = styled.div`
position : fixed ;
top : 0 ;
left : 0 ;
width : 100%;
height : 100vh;
background-color: rgba(150,150,150,0.3);

display : flex ;
justify-content : center ;
align-items : center ;
`;

export const InsideForm = styled.div`
position : relative ;
padding: 32px;
width : 100% ;
max-width : 640px ;
background-color : white ;
`;

export const CloseBtn = styled.button`
position : absolute ;
top : 16px;
right : 16px ;
`;
