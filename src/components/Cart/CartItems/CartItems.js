import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { useCart } from "../../../hooks";
import { CartItem } from "./CartItem/CartItem";

const Container = styled.ScrollView`
  padding: 0 15px;
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
            />
          ))
        : ""}
    </Container>
  );
};
