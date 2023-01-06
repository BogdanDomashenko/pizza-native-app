import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useCart, useUser } from "../../../hooks";
import { usePhantomCheckoutMutation } from "../../../services/Order.service";
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
import { Select } from "../../../ui/Select/Select";

const FromBottom = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const paymentMethods = [
  { key: "1", value: "card" },
  { key: "2", value: "cash" },
];

export const Payment = ({ onCancel, isVisible, onSubmit }) => {
  const user = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

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
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Email"
                error="error"
              />
            )}
            name="email"
            defaultValue={user.shippingData.email}
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
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="First name"
                width="49%"
              />
            )}
            name="firstName"
            defaultValue={user.shippingData.firstName}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Last name"
                width="49%"
              />
            )}
            name="lastName"
            defaultValue={user.shippingData.lastName}
          />
        </FormItemRow>
        <FormItemRow>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="City"
                width="49%"
              />
            )}
            name="city"
            defaultValue={user.shippingData.city}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Post code"
                width="49%"
              />
            )}
            name="postCode"
            defaultValue={user.shippingData.postCode}
          />
        </FormItemRow>
        <FormItem>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Address"
              />
            )}
            name="address"
            defaultValue={user.shippingData.address}
          />
        </FormItem>
        <FormItem>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <PhoneTextField
                initialCountry={"us"}
                onBlur={onBlur}
                onChangePhoneNumber={(text) => onChange(text.replace("+", ""))}
                initialValue={value}
              />
            )}
            name="phone"
            defaultValue={user.data.phoneNumber || user.shippingData.phone}
          />
        </FormItem>
        <FormItem>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                setSelected={(val) => onChange(val)}
                onBlur={onBlur}
                data={paymentMethods}
                save="value"
                search={false}
              />
            )}
            name="paymentMethod"
            defaultValue={user.shippingData.paymentMethod}
          />
        </FormItem>

        <FromBottom>
          <Button onPress={onCancel}>Go back</Button>
          <Button variant="success" onPress={handleSubmit(onSubmit)}>
            Checkout
          </Button>
        </FromBottom>
      </Wrapper>
    </Container>
  ) : (
    ""
  );
};
