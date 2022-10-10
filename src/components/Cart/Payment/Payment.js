import { Controller, useForm } from "react-hook-form";
import { Text } from "react-native";
import styled from "styled-components/native";
import {
  Button,
  Container,
  FormItem,
  FormItemRow,
  Input,
  PhoneTextField,
  Title,
  Wrapper,
} from "../../../ui";

const FromBottom = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Payment = ({ onCancel, isVisible }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return isVisible ? (
    <Container>
      <Wrapper>
        <Title>Payment</Title>
        <FormItem>
          <Text>Contact information</Text>
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
                placeholder="Email"
              />
            )}
            name="email"
          />
        </FormItem>
        <FormItem>
          <Text>Shipping address</Text>
        </FormItem>
        <FormItemRow>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry={true}
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="First name"
                width="49%"
              />
            )}
            name="firstName"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry={true}
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Last name"
                width="49%"
              />
            )}
            name="lastName"
          />
        </FormItemRow>
        <FormItemRow>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry={true}
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="City"
                width="49%"
              />
            )}
            name="city"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry={true}
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Post code"
                width="49%"
              />
            )}
            name="postCode"
          />
        </FormItemRow>
        <FormItem>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry={true}
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Address"
              />
            )}
            name="address"
          />
        </FormItem>
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

        <FromBottom>
          <Button onPress={onCancel}>Go back</Button>
          <Button variant="success" onPress={onCancel}>
            Checkout
          </Button>
        </FromBottom>
      </Wrapper>
    </Container>
  ) : (
    ""
  );
};
