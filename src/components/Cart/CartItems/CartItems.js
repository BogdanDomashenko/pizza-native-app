import { useEffect } from "react";
import { Animated, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { useCart, useShiftAnimation } from "../../../hooks";
import { Button, Title, Typography } from "../../../ui";
import { CartItem } from "./CartItem/CartItem";

const Container = styled.ScrollView`
  padding: 0 15px;
  height: 100%;
`;

const Bottom = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
`;

const Price = styled(Title)`
  margin-right: 10px;
`;

export const CartItems = ({ onCheckout }) => {
  const { items, totalPrice } = useCart();

  return (
    <Container>
      {items.length
        ? items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              product={item.product}
              selectedProps={item.selectedProps}
              count={item.count}
              price={item.price}
            />
          ))
        : ""}
      <Bottom>
        <Price>{totalPrice}$</Price>
        <Button variant="success" onPress={onCheckout}>
          Checkout
        </Button>
      </Bottom>
    </Container>
  );
};
