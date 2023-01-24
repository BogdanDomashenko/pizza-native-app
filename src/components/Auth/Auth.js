import { useState } from "react";

const PAGES = {
  signIn: "signIn",
  signUp: "signUp",
};

export const Auth = () => {
  const [page, setPage] = useState(PAGES.signIn);

  const handleSignUpClick = () => {
    if (page === PAGES.signIn) {
      return setPage(PAGES.signUp);
    }
    if (page === PAGES.signUp) {
      return handleSignUpClick();
    }
  };

  return (
    <Container>
      <Form>
        <ButtonsContainer>
          <ButtonStyled
            variant="dark-outlined"
            onPress={handleSubmit(onSubmit)}
          >
            Sign up
          </ButtonStyled>
          <ButtonStyled variant="primary" onPress={handleSubmit(onSubmit)}>
            Sign in
          </ButtonStyled>
        </ButtonsContainer>
        <FormItem>{error && <Text>{error.data?.message}</Text>}</FormItem>
        <AnimatedLoader
          visible={isLoading}
          overlayColor="rgba(255,255,255,0.75)"
          animationStyle={styles.lottie}
          speed={1}
        >
          <Text>Loading...</Text>
        </AnimatedLoader>
      </Form>
    </Container>
  );
};
