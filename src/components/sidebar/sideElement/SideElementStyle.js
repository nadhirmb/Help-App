import styled from "styled-components";


export const DivElement = styled.div`
  padding : 10px;
  color: #000 ;
  font-weight: Bold ;
  font-weight: 24px ;
  border-radius : 25px ;
  border : 4px solid ${ props => props.theme.pageBackground } ;
  width : 280px ;
  margin: 5px ;

  &:hover {
    background-color: #9DD180;
  }
  `;

  export const AElement = styled.a`
  padding : 5px 0;
  outline: none;
  margin: 0;
  `;

  export const IconStyle = styled.div``;


  export const TextStlyl = styled.div``;

  export const InsideADiv = styled.div`
  margin : 0 ;
  padding : 0 ;
  display: flex;
  align-items :  center ;
  justify-content: flex-start;
  `;