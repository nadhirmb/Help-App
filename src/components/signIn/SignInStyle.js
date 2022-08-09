import styled from 'styled-components'

import Background from './backgound.png'


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


export const InputEmail = styled.input.attrs({type : "email"})`
  width: 100%;
  padding: 12px 20px;
  margin: 4px 0px;
  box-sizing: border-box;
  border-radius: 25px;
  &:focus {
  background-color: #d9d9d9;
}
`;

export const InputPassword = styled.input.attrs({type : "password",
placeholder : "password idiot"})`
  width: 100%;
  padding: 12px 20px;
  margin: 4px 0px;
  box-sizing: border-box;
  border-radius: 25px;
`;




export const LablelStyled = styled.div`
margin : 0px;
padding : 0px;
font-size :14px;
width : 300px;
`;


export const FormElement = styled.div`
margin : 0px;
padding : 0px; 
`;

export const SignUpDiv = styled.div`
      width : 300px;
      height : 40px ;
      background-color : grey ;
      display : flex ;
      align-items : center;
      justify-content : center;
      border-radius : 25px;
`;

export const ButtonSingUp = styled.a`
background-color : grey ;
width : 100%;
height : 40px;
display : flex ;
      align-items : center;
      justify-content : center;

border-radius : 25px;

&:hover{
  background-color: green;
}
`;

export const ButtonSingIn = styled.input.attrs({
  type : "submit" ,
  value : "Sign In"
})`

background-color : green ;
width : 300px;
height : 40px;

margin : 20px 0px 0px 0px;


border-radius : 25px;

&:hover{
  background-color: grey;
}
`;

export const FormSocial = styled.div`
margin : 0px;
padding : 0px;
width : 300px;
display : flex ;
align-items: center;
justify-content: space-between;
`;

export const GmailButton = styled.div`
margin : 20px 0px 0px 0px;
padding : 10px 30px;
background-color: red;

display : flex ;
align-items : center ;
justify-content : space-between; 
border-radius : 20px;
border-bottom-right-radius: 0px;
border-top-right-radius: 0px;

&:hover{

  background-color : #5a5a5a
}
`;

export const FacebookButton = styled.div`
margin : 20px 0px 0px 0px;
padding : 10px 20px;
background-color: cyan;

display : flex ;
align-items : center ;
justify-content : space-between; 
border-radius : 20px;
border-bottom-left-radius: 0px;
border-top-left-radius: 0px;
&:hover{

  background-color : #545454;
}
`;


export const OrDiv = styled.div`
margin : 20px 0px;
`;


export const ForgetPasswordLink = styled.a`
            
`;

export const Header = styled.div`
font-weight : bold ;
font-size : 30px;
y
`;