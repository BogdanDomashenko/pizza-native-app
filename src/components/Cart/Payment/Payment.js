import { useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
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

const getPaymentMethodByKey = (key) =>
  paymentMethods.find((paymentMethod) => paymentMethod.key === key);

const getPaymentMethodByValue = (value) =>
  paymentMethods.find((paymentMethod) => paymentMethod.value === value);

const PaymentSchema = yup
  .object()
  .shape({
    email: yup.string().email().required("required").nullable(),
    firstName: yup.string().required("required").nullable(),
    lastName: yup.string().required("required").nullable(),
    city: yup.string().required("required").nullable(),
    postCode: yup.string().required("required").nullable(),
    phone: yup
      .string()
      .min("8", "Must have at latest 8 digits")
      .required("required")
      .nullable(),
    paymentMethod: yup.string().required("required").nullable(),
  })
  .required();

export const Payment = ({ onCancel, isVisible, onSubmit }) => {
  const user = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(PaymentSchema),
  });

  const initialPaymentMethod = useRef(
    getPaymentMethodByValue(user.shippingData.paymentMethod || "card")
  ).current;

  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  return isVisible ? (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={10}
      behavior={"position"}
    >
      <Wrapper>
        <Title>Payment</Title>
        <FormItem>
          <Text>Contact information</Text>
        </FormItem>
        <FormItem>
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Email"
                autoCapitalize="none"
                error={error && error.message}
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
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="First name"
                width="49%"
                error={error && error.message}
              />
            )}
            name="firstName"
            defaultValue={user.shippingData.firstName}
          />
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Last name"
                width="49%"
                error={error && error.message}
              />
            )}
            name="lastName"
            defaultValue={user.shippingData.lastName}
          />
        </FormItemRow>
        <FormItemRow>
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="City"
                width="49%"
                error={error && error.message}
              />
            )}
            name="city"
            defaultValue={user.shippingData.city}
          />
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Post code"
                width="49%"
                error={error && error.message}
              />
            )}
            name="postCode"
            defaultValue={user.shippingData.postCode}
          />
        </FormItemRow>
        <FormItem>
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                error={error && error.message}
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
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <PhoneTextField
                initialCountry={"us"}
                onBlur={onBlur}
                onChangePhoneNumber={(text) => onChange(text.replace("+", ""))}
                initialValue={value}
                error={error}
              />
            )}
            name="phone"
            defaultValue={user.data.phoneNumber || user.shippingData.phone}
          />
        </FormItem>
        <FormItem>
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Select
                setSelected={onChange}
                onBlur={onBlur}
                data={paymentMethods}
                save="value"
                search={false}
                defaultOption={initialPaymentMethod}
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
    </KeyboardAvoidingView>
  ) : (
    ""
  );
};
