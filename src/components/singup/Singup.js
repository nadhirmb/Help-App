import React from 'react';
import { DivBackground, Header, DivForm, NameInput, MenInput, WomenInput, StyledRadioGroup, StyledSpan, StyledForm, StyledLabel} from './SignupStyle'


//styled comopnents 

const SingUp = () => {
  return (
    <DivBackground>
      <DivForm>
      <Header>Sign Up</Header>
        <StyledForm>
        <StyledLabel>First Name</StyledLabel>
          <NameInput/>
          <StyledLabel>Last Name</StyledLabel>
          <NameInput/>
          <StyledLabel>Email</StyledLabel>
          <NameInput/>
          <StyledLabel>Phone Number</StyledLabel>
          <NameInput/>
          <StyledLabel>sex</StyledLabel>
          <StyledRadioGroup>
          <MenInput /> <StyledSpan>Men</StyledSpan>
          <WomenInput /> <StyledSpan>Women</StyledSpan>
          </StyledRadioGroup>
        </StyledForm>
      </DivForm>
    </DivBackground>
  )
}

export default SingUp;