import React from 'react'
import { DivElement,AElement, InsideADiv } from './SideElementStyle';





const SideElement = (props) =>{
  return (
    <DivElement>
      <AElement href='www.facebook.com'>
        <InsideADiv>
          <div > {props.icon} </div>
          <div > {props.name} </div>
        </InsideADiv>
      </AElement>
    </DivElement>
  );
}

export default SideElement;