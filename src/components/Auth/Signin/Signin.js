import { SafeAreaView, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "../../../ui";
import styled from "styled-components/native";
import { useSigninMutation } from "../../../services/Auth.service.js";
import { mainTheme } from "../../../theme";

const FormItem = styled(View)`
  margin-top: 7px;
  margin-bottom: 7px;
`;

const Form = styled.SafeAreaView`
  height: 100%;
  justify-content: center;
`;

const ButtonStyled = styled(Button)`
  margin-top: 10px;
  width: 100%;
`;

export const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const [signin, { isLoading: isUpdating }] = useSigninMutation();

  const onSubmit = async (data) => {
    const user = await signin(data);
    console.log(user);
  };

  return (
    <Form>
      <FormItem>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Phone number"
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
      <ButtonStyled variant="primary" onPress={handleSubmit(onSubmit)}>
        Sign in
      </ButtonStyled>
    </Form>
  );
};
