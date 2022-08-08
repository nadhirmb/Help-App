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
padding : 30px ;
border : 2px solid black;
border-radius: 25px;
background-color: rgba(220, 220, 220 ,0.6);
backdrop-filter: blur(3px);
transition-duration : 0.4s;
&:hover {

  height : 510px;
}`;

export const StyledForm = styled.form`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
` ;

export const NameInput = styled.input.attrs({type : "text"})`
padding: 10px;
border-radius: 15px;
border: 1px solid grey;
width : 200px;
`;

export const StyledLabel = styled.label`
color: black;
padding: 15px;
font-size: 10px;
font-weight: bold;
width: 120px;
`;
export const MenInput = styled.input.attrs({type:"radio", name: "sex", value: "men"})`
color : black;
font-size: 16px;
width : 30px;
`;

export const WomenInput = styled.input.attrs({type:"radio", name: "sex", value: "women"})`
color : black;
font-size: 16px;
width : 30px;
`;

export const StyledSpan = styled.span`
font-size:10px;
font-weight: bold;

`

export const StyledRadioGroup = styled.div`
background-color: white;
padding: 10px;
border-radius: 15px;
border: 1px solid grey;
width : 200px;
`
export const Header = styled.div`
font-weight : bold ;
font-size : 30px;
`;