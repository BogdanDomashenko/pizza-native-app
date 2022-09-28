import { View, Text } from "react-native";
import styled from "styled-components/native";
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
        <CountButton>-</CountButton>
        <Text>{count}</Text>
        <CountButton>+</CountButton>
      </CountContainer>
      <PriceContainer>
        <Typography fontWeight="600">10$</Typography>
      </PriceContainer>
    </Container>
  );
};
