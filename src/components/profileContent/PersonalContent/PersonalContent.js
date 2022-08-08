import React from 'react'
import { DivStyled,DivElements,DivElement,ContentHeader } from './PersonalContentStyle'




import { FaFileMedicalAlt,FaTools,FaAppleAlt,FaTshirt,FaMoneyBillWaveAlt } from 'react-icons/fa';


const IconStyle = {
  color : 'green',
  width: '25px',
  height : '50px'
}
const PersonalContent = () => {
  return (
    <DivStyled>
      
      
      
      <ContentHeader> <h4> what have you being doing</h4></ContentHeader> 
      <DivElements > 
        <DivElement> <FaAppleAlt style={IconStyle} /> Food </DivElement>
        <DivElement> <FaMoneyBillWaveAlt style={IconStyle}/>    Money     </DivElement>
        <DivElement> <FaTshirt style={IconStyle} />            Clothes</DivElement>
        <DivElement> <FaTools style={IconStyle} />          Tools</DivElement>
        <DivElement> <FaFileMedicalAlt style={IconStyle} /> Medical</DivElement>
      </DivElements>
      
      </DivStyled>
  )
}

export default PersonalContent