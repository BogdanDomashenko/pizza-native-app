import { Button, SafeAreaView, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../../ui";
import styled from "styled-components/native";

const FormItem = styled(View)`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView>
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
      <Button title="Sign in" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};
