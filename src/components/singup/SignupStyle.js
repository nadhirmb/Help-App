import styled from 'styled-components'

import Background from '../signIn/backgound.png'


export const DivBackground = styled.div`
width : 100%;
height : 720px;
background-size: cover;
background-image : url(${Background});


display : flex;
align-items: center;
justify-content: center;
`;


export const DivForm = styled.div`
display : flex; 
flex-direction: column;
justify-content: flex-start;
align-items: center;
width : 400px;
height : 500px;
padding : 50px ;
border : 2px solid black;
border-radius: 25px;
background-color: rgba(220, 220, 220 ,0.6);
backdrop-filter: blur(3px);
transition-duration : 0.4s;
&:hover {

  height : 510px;
}
`;