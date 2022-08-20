import styled from "styled-components";

export const FormStyling = styled.div`
  background: rgba(255, 255, 255, 0.192);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(150, 150, 150, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const InsideForm = styled.div`
  background: rgba(200, 200, 200, 0.192);
  backdrop-filter: blur(50px);
  position: relative;
  padding: 10px;
  width: 100%;
  max-width: 640px;
  border-radius : 10px;
  border : 1px solid green ;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 100px;
  padding: 5px;
  color: lightsalmon;
  font-weight: bold;

  &:hover {
    background-color: rgba(150, 150, 150, 1);
    border: 0px;
    top: 30px;
    right: 30px;
    width: 100px;
    padding: 5px;
    border : 2px solid grey;
  }
`;

export const Label = styled.label`
  color: green;
  width: 100px;
`;
export const DivInput = styled.div`
  padding: 20px;
  display: flex;
`;

export const Input = styled.input`
  width: 300px;
  padding: 5px;
`;
