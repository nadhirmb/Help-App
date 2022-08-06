import React from 'react'
import { DivBackground, DivForm, InputEmail,InputPassword,LablelStyled,
  FormElement,
  ButtonSingUp,
  ButtonSingIn,
  FormSocial,
  GmailButton,
  FacebookButton,
  OrDiv,
  Header,
  SignUpDiv} from './SignInStyle'


import {FaGoogle, FaFacebook} from "react-icons/fa"

const SignIn = () => {
  return (
    <DivBackground>
      <DivForm>
        <Header> SING IN </Header>
        <div>________</div>
        <FormElement> 
          <LablelStyled>email bitch</LablelStyled>
          <InputEmail placeholder="email bitch" />
        </FormElement>
        <div>
          <LablelStyled>password <a href="/profil">forget password </a> </LablelStyled>
          <InputPassword />
        </div>
        <div>
          <ButtonSingIn />
        </div>

        <OrDiv>
          ______ OR ______
        </OrDiv>
        <SignUpDiv>
          <ButtonSingUp to ={'/signup'}>Sign Up</ButtonSingUp>
        </SignUpDiv>
        <FormSocial>
          <GmailButton>
            <FaGoogle size={20}/>
            <span style={{marginLeft: '10px'}}>gmail</span>
          </GmailButton>
          <FacebookButton> <FaFacebook size ={20} />
          <span style={{marginLeft: '10px'}}>Facebook</span>
          </FacebookButton>
        </FormSocial>
       
      </DivForm>
    </DivBackground>
  )
}

export default SignIn