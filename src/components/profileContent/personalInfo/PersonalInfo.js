import React from 'react'
import {DivStyled, InfoHeader,InfoElement }from './PersonalInfoStyle';
import {FaInfo} from 'react-icons/fa';

const PersonalInfo = () => {
  return (
    <DivStyled>
      
      <InfoHeader> <h3> <FaInfo /> Info </h3> </InfoHeader>

      <InfoElement> name : <span> </span> </InfoElement>
      <InfoElement> email : <span> </span> </InfoElement>
      <InfoElement> Number : <span> </span> </InfoElement>
      <InfoElement> sexe : <span> </span> </InfoElement>
      <InfoElement> location : <span> </span> </InfoElement>
    </DivStyled>
  )
}

export default PersonalInfo