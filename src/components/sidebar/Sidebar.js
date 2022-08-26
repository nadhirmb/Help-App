import React from 'react';
import SideElement from './sideElement/SideElement';
import { DivStyled, DivSideSection,DivSideSection3, Select, SpanLine, LinkSideSection } from './SidebarStyle';
import { FaBuilding,FaFire,FaAppleAlt,FaTshirt } from 'react-icons/fa';
import {ImLocation2} from 'react-icons/im';

const style = { color: "#4CAF50", fontSize: "1.4em", margin: "0px 5px" };


const Sidebar = (props) => {
  return (
    <>
      <DivStyled>
      
        <DivSideSection>
          <SideElement icon = {<FaBuilding style={style}/>} theme = {props.theme} setTheme={props.setTheme} name = {'organisation'} />
          <SideElement icon = {<FaFire     style={style} />} theme = {props.theme} setTheme={props.setTheme} name = {'Trends'} />
          
        </DivSideSection>
        <SpanLine></SpanLine>
        <DivSideSection>
          <SideElement icon = {<FaAppleAlt style={style} />}theme = {props.theme} setTheme={props.setTheme}  name = {'Food'} />
          <SideElement icon = {<FaTshirt style={style} />} theme = {props.theme} setTheme={props.setTheme} name = {'Clothes'} />
          <SideElement icon = {<FaTshirt style={style} />} theme = {props.theme} setTheme={props.setTheme} name = {'Medical'} />
          <SideElement icon = {<FaTshirt style={style} />} theme = {props.theme} setTheme={props.setTheme} name = {'Money'} />

         
        </DivSideSection>
        <SpanLine></SpanLine>
        <DivSideSection3 >
          <ImLocation2 size={40} style={{color :'#4CAF50', margin : '5px 0px 15px 0px'}}/>
          <Select> 
            <option value = "0"> All regions </option>
            <option value = "1"> Tipaza</option>
            <option value = "2"> Blida</option>
            <option value = "3"> Blida</option>
          </Select>
         </DivSideSection3>
         <SpanLine></SpanLine>
        <LinkSideSection style={{margin : '0px' , color : 'grey'}}>
          <a href="www.">conditions - </a> <a href="www."> about </a> - &copy;	 HELP 2022
        </LinkSideSection>
      </DivStyled>
      </>
  );
}

export default Sidebar;