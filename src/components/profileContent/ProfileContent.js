import React from 'react'


//Components 
import PersonalContent from './PersonalContent/PersonalContent';
import PersonalInfo from './personalInfo/PersonalInfo';

//StyledComponents
import { Container,SpanStyle } from './ProfileContentStyle';


const ProfileContent = () => {
  return (
    <>
    <SpanStyle></SpanStyle>
    <Container>
      
      <PersonalInfo />
      <PersonalContent />
    </Container>
    </>
  )
}

export default ProfileContent