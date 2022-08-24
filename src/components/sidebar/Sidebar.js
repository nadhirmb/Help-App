import React from 'react';
import SideElement from './sideElement/SideElement';
import { DivStyled, DivSideSection, ButtonLocation, SpanLine, LinkSideSection } from './SidebarStyle';
import { FaBuilding,FaFire,FaAppleAlt,FaTshirt } from 'react-icons/fa';

const style = { color: "green", fontSize: "1.4em", margin: "0px 5px" };


const Sidebar = (props) => {
  return (
    <>
      <DivStyled>
      
        <DivSideSection>
          <SideElement icon = {<FaBuilding style={style}/>} theme = {props.theme} setTheme={props.setTheme} name = {'organisation'} />
          <SideElement icon = {<FaFire     style={style} />} theme = {props.theme} setTheme={props.setTheme} name = {'Trends'} />
          <SpanLine></SpanLine>
        </DivSideSection>
        
        <DivSideSection>
          <SideElement icon = {<FaAppleAlt style={style} />}theme = {props.theme} setTheme={props.setTheme}  name = {'Food'} />
          <SideElement icon = {<FaTshirt style={style} />} theme = {props.theme} setTheme={props.setTheme} name = {'Clothes'} />
         
        </DivSideSection>
        <SpanLine></SpanLine>
        <DivSideSection>
          <ButtonLocation> search by location</ButtonLocation>
          <br/>
          <textarea></textarea>
         </DivSideSection>
         <SpanLine></SpanLine>
        <LinkSideSection style={{margin : '0px' , color : 'grey'}}>
          <a href="www.">conditions</a> - <a href="www.">about</a> - HELP 2022
        </LinkSideSection>
      </DivStyled>
      </>
  );
}

export default Sidebar;