import { View, Text } from "react-native";
import styled from "styled-components/native";
import { useCart } from "../../hooks";
import { Button } from "../../ui";

const ButtonStyled = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 55px;
`;

const TextStyled = styled.Text``;

const Separator = styled.View`
  height: 100%;
  width: 1px;
  background-color: #ffffff;
`;

export const CartButton = () => {
  const cart = useCart();

  return cart.items.length ? (
    <ButtonStyled variant="primary">Checkout</ButtonStyled>
  ) : null;
};