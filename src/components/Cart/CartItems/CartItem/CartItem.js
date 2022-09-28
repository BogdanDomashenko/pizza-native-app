import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Button, Typography } from "../../../../ui";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CartItemImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const CartItem = ({ id, product, selectedProps }) => {
  return (
    <Container>
      <CartItemImage
        source={{
          uri: product.imageUrl,
        }}
        resizeMode="contain"
      />
      <View>
        <Typography fontWeight="600">{product.name}</Typography>
        <Typography fontWeight="300">{`${selectedProps?.size}inch  ${selectedProps?.type}`}</Typography>
      </View>
      <View>
        <Button>-</Button>
        <Button>+</Button>
      </View>
    </Container>
  );
};
