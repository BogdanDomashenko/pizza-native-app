import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { useCart } from "../../../hooks";
import { Button } from "../../../ui";
import { CartItem } from "./CartItem/CartItem";

const Container = styled.ScrollView`
  padding: 0 15px;
  height: 100%;
`;

const Bottom = styled.View`
  align-items: flex-end;
  padding-bottom: 10px;
`;

export const CartItems = () => {
  const { items } = useCart();

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
        <Button variant="success">Checkout</Button>
      </Bottom>
    </Container>
  );
};
