import { useState } from "react";
import styled from "styled-components/native";
import { Container } from "../../ui";
import { SignIn } from "./SignIn/SignIn";
import { SignUp } from "./SignUp/SignUp";

const Form = styled.SafeAreaView`
  height: 100%;
  justify-content: center;
`;

const PAGES = {
  signIn: "signIn",
  signUp: "signUp",
};

export const Auth = () => {
  const [page, setPage] = useState(PAGES.signIn);

  const Page = () => {
    switch (page) {
      case PAGES.signIn:
        return <SignIn onSignUpClick={() => setPage(PAGES.signUp)} />;
      case PAGES.signUp:
        return <SignUp onSignInClick={() => setPage(PAGES.signIn)} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Form>
        <Page />
      </Form>
    </Container>
  );
};
