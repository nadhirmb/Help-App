import React from 'react';
import Button from './button/Button';
import { DivStyled, DivSideSection, ButtonLocation } from './SidebarStyle';

const Sidebar = () => {
  return (
    <>
      <DivStyled>
        <DivSideSection>
          <Button name = {'organisation'} />
          <Button name = {'Trends'} />
        </DivSideSection>
        <DivSideSection>
          <Button name = {'Food'} />
          <Button name = {'Clothes'} />
          <Button name = {'Medical'} />
          <Button name = {'Money'} />
          <Button name = {'Physical'} />
          <Button name = {'Tools'} />
        </DivSideSection>
        <DivSideSection>
          <ButtonLocation> search by location</ButtonLocation>
          <br/>
          <textarea></textarea>
         </DivSideSection>
      <DivSideSection>
         Terms and conditions - legal - company
      </DivSideSection>
      </DivStyled>
      
    </>
  );
}

export default Sidebar;