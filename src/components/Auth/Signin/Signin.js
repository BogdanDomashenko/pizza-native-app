import { Button, SafeAreaView, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../../ui";

export const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Title"
          />
        )}
        name="title"
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};
