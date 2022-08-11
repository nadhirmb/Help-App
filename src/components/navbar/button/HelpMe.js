import React from 'react';
import { ButtonStyle } from './HelpMeStyle';

const HelpIcon = (props) => {
  return(
<>
<ButtonStyle onClick={() => props.name(true)}> HELP</ButtonStyle>
</>
  );
}
export default HelpIcon;
