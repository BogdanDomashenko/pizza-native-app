import { Button, SafeAreaView, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ButtondStyled, Input } from "../../../ui";
import styled from "styled-components/native";
import { mainTheme } from "../../../theme";

const FormItem = styled(View)`
  margin-top: 7px;
  margin-bottom: 7px;
`;

const Form = styled.SafeAreaView`
  height: 100%;
  justify-content: center;
`;

export const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <Form>
      <FormItem>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Phone number"
            />
          )}
          name="PhoneNumber"
        />
      </FormItem>
      <FormItem>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
            />
          )}
          name="Password"
        />
      </FormItem>
      <Button
        title="Sign in"
        onPress={handleSubmit(onSubmit)}
        color={mainTheme.COLOR_PRIMARY}
      />
    </Form>
  );
};
