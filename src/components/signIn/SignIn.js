import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DivBackground,
  DivForm,
  InputEmail,
  InputPassword,
  LablelStyled,
  FormElement,
  ButtonSingUp,
  ButtonSingIn,
  FormSocial,
  GmailButton,
  FacebookButton,
  OrDiv,
  Header,
  SignUpDiv,
} from "./SignInStyle";

import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =  (e) => {
    // e.preventDefault();
    // const newPost = { email : email, password : password };
    // try {
    //   const response = await axios.post('/posts', newPost);
    //   setPostTitle('');
    //   setPostBody('');
    //   history.push('/');
    // } catch (err) {
    //   console.log(`Error: ${err.message}`);
    // }
  }


  return (
    <DivBackground>
      <DivForm onSubmit={handleSubmit}>
        <Header> SING IN </Header>
        <div>________</div>
        <FormElement>
          <LablelStyled>email bitch</LablelStyled>
          <InputEmail
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormElement>
        <div>
          <LablelStyled>
            password <a href="/profil">forget password </a>
          </LablelStyled>
          <InputPassword
          type="password"
          required
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
           />
        </div>
        <div>
          <ButtonSingIn  type='submit'> hi </ ButtonSingIn>
        </div>

        <OrDiv>______ OR ______</OrDiv>
        <SignUpDiv>
          <Link to={"/signup"} style={{width :'300px',}}>
          <ButtonSingUp >Sign Up</ButtonSingUp>
          </Link>
        </SignUpDiv>
        <FormSocial>
          <GmailButton>
            <FaGoogle size={20} />
            <span style={{ marginLeft: "10px" }}>gmail</span>
          </GmailButton>
          <FacebookButton>
            {" "}
            <FaFacebook size={20} />
            <span style={{ marginLeft: "10px" }}>Facebook</span>
          </FacebookButton>
        </FormSocial>
      </DivForm>
    </DivBackground>
  );
};

export default SignIn;
