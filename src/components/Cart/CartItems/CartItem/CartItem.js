import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { decCartItem, incCartItem } from "../../../../store/slices/cart";
import { Button, Typography } from "../../../../ui";
import { CountButton } from "./CountButton/CountButton";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CartItemImage = styled.Image`
  width: 80px;
  height: 80px;
`;

const CountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 28%;
  justify-content: space-between;
`;

const PriceContainer = styled.View`
  width: 15%;
  align-items: flex-end;
`;

const Info = styled.View`
  width: 30%;
`;

export const CartItem = ({ id, count, product, selectedProps }) => {
  const dispatch = useDispatch();

  const handleDec = () => {
    dispatch(decCartItem({ id }));
  };

  const handleInc = () => {
    dispatch(incCartItem({ id }));
  };

  return (
    <Container>
      <CartItemImage
        source={{
          uri: product.imageUrl,
        }}
        resizeMode="contain"
      />
      <Info>
        <Typography fontWeight="600">{product.name}</Typography>
        <Typography fontWeight="300">{`${selectedProps?.size}inch  ${selectedProps?.type}`}</Typography>
      </Info>
      <CountContainer>
        <CountButton onPress={handleDec}>-</CountButton>
        <Text>{count}</Text>
        <CountButton onPress={handleInc}>+</CountButton>
      </CountContainer>
      <PriceContainer>
        <Typography fontWeight="600">10$</Typography>
      </PriceContainer>
    </Container>
  );
};
