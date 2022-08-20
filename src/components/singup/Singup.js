import React, { useState } from "react";
import {
  DivBackground,
  Header,
  DivForm,
  NameInput,
  MenInput,
  WomenInput,
  StyledRadioGroup,
  StyledSpan,
  StyledForm,
  StyledLabel,
} from "./SignupStyle";

//styled comopnents

const SingUp = () => {
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("");
  const [password, setPasword] = useState("");


  return (
    <DivBackground>
      <DivForm>
        <Header>Sign Up</Header>
        <StyledForm>
          <StyledLabel>First Name</StyledLabel>
          <NameInput
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />

          <StyledLabel>Last Name</StyledLabel>
          <NameInput
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />

          <StyledLabel>Email</StyledLabel>
          <NameInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <StyledLabel>Phone Number</StyledLabel>
          <NameInput
           type="text"
           value={phone}
           onChange={(e) => setPhone(e.target.value)} />

          <StyledLabel>sex</StyledLabel>
          <StyledRadioGroup>
            <MenInput /> <StyledSpan>Men</StyledSpan>
            <WomenInput /> <StyledSpan>Women</StyledSpan>
          </StyledRadioGroup>

        </StyledForm>
      </DivForm>
    </DivBackground>
  );
};

export default SingUp;
