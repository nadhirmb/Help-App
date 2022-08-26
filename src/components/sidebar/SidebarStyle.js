import styled from "styled-components";

export const DivStyled = styled.div`
  padding: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: sticky;
  top: 60px;
`;

export const DivSideSection = styled.div``;
export const DivSideSection3 = styled.div`
display : flex ; 
flex-direction : column ;
align-items: center;
justify-content : center ;

`;


export const LinkSideSection = styled.div`
  display: flex;
  padding: 5px;
  align-items: flex-start;
  justify-content: left;
  text-decoration: none;
  font-size: 12px;
  text-decoration-color: none;
`;

export const ButtonLocation = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  margin: 10px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
`;

export const SpanLine = styled.span`
  font-size: 0;
  padding: 1px 120px;
  background-color: grey;
  border-radius: 10px;
  margin: 15px;
`;

export const Select = styled.select`
  width : 250px ;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #4CAF50;
  border-radius: 4px;
  background: ${ props => props.theme.pageBackground } ;
  outline: none;
  display: flex;
  appearance: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:after {
    border: 2px solid black;
  }

  transition-duration: 0.4s;
`;
