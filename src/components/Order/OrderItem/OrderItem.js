import { Text } from "react-native";
import styled from "styled-components/native";
import { Typography } from "../../../ui";
import { formatProductProperties } from "../../../utils/helpers/fomatProductProperties";

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

export const OrderItem = ({ name, totalPrice, count, images, type, size }) => {
  return (
    <Container>
      <CartItemImage
        source={{
          uri: images[0]?.url,
        }}
        resizeMode="contain"
      />
      <Info>
        <Typography fontWeight="600">{name}</Typography>
        <Typography fontWeight="300">
          {formatProductProperties(size.name, type.name)}
        </Typography>
      </Info>
      <CountContainer>
        <Text>{count}</Text>
      </CountContainer>
      <PriceContainer>
        <Typography fontWeight="600">{totalPrice}$</Typography>
      </PriceContainer>
    </Container>
  );
};
