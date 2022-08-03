import React from 'react';
import SideElement from './sideElement/SideElement';
import { DivStyled, DivSideSection, ButtonLocation, SpanLine } from './SidebarStyle';
import { FaBuilding,FaFire,FaAppleAlt,FaTshirt } from 'react-icons/fa';


const style = { color: "green", fontSize: "1.4em", margin: "0px 5px" };


const Sidebar = () => {
  return (
    <>
      <DivStyled>
        
        <DivSideSection>
          <SideElement icon = {<FaBuilding style={style}/>} name = {'organisation'} />
          <SideElement icon = {<FaFire     style={style} />} name = {'Trends'} />
          <SpanLine></SpanLine>
        </DivSideSection>
        
        <DivSideSection>
          <SideElement icon = {<FaAppleAlt style={style} />} name = {'Food'} />
          <SideElement icon = {<FaTshirt style={style} />} name = {'Clothes'} />
         
        </DivSideSection>
        
        <DivSideSection>
          <ButtonLocation> search by location</ButtonLocation>
          <br/>
          <textarea></textarea>
         </DivSideSection>
          
        <DivSideSection>
         Terms and conditigo,llns - legal - company
        </DivSideSection>
      </DivStyled>
      
    </>
  );
}

export default Sidebar;