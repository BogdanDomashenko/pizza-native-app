import { SafeAreaView, TextInput, View, Text, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, Container, Input, PhoneTextField } from "../../../ui";
import styled from "styled-components/native";
import { useSigninMutation } from "../../../services/Auth.service.js";
import AnimatedLoader from "react-native-animated-loader";
import { lightTheme } from "../../../theme";

const FormItem = styled(View)`
  margin-top: 7px;
  margin-bottom: 7px;
`;

const Form = styled.SafeAreaView`
  height: 100%;
  justify-content: center;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonStyled = styled(Button)`
  margin-top: 10px;
  width: 49%;
`;

export const SignIn = ({ onSignUpClick }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const [signIn, { isLoading, error }] = useSigninMutation();

  const onSubmit = async (data) => {
    const user = await signIn({
      ...data,
      phoneNumber: data.phoneNumber.split("+")[1],
    });
  };

  return (
    <>
      <FormItem>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <PhoneTextField
              initialCountry={"us"}
              onBlur={onBlur}
              onChangePhoneNumber={(text) => onChange(text)}
              initialValue={value}
            />
          )}
          name="phoneNumber"
        />
      </FormItem>
      <FormItem>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
              value={value}
              placeholder="Password"
            />
          )}
          name="password"
        />
      </FormItem>
      <ButtonsContainer>
        <ButtonStyled variant="dark-outlined" onPress={onSignUpClick}>
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
    </>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
