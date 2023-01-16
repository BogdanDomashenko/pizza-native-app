import { View, Text, Animated, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { useAdditionalPrice } from "../../../../hooks/useAdditionalPrice";
import {
  decCartItem,
  incCartItem,
  removeCartItem,
} from "../../../../store/slices/cart";
import { Button, Typography } from "../../../../ui";
import { CountButton } from "./CountButton/CountButton";

import { Swipeable, TouchableOpacity } from "react-native-gesture-handler";
import { mainTheme } from "../../../../theme";
import { formatProductProperties } from "../../../../utils/helpers/fomatProductProperties";

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

const DeleteButton = styled(Animated.View)`
  background-color: ${mainTheme.COLOR_DANGER};
  justify-content: center;
  align-items: center;
  height: 90%;
  margin-left: 10px;
  width: 100px;
`;

const renderRightActions = (
  progress: Animated.AnimatedInterpolation,
  dragAnimatedValue: Animated.AnimatedInterpolation,
  onPress
) => {
  const opacity = dragAnimatedValue.interpolate({
    inputRange: [-150, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View>
      <DeleteButton style={[{}, { opacity }]}>
        <TouchableOpacity onPress={onPress}>
          <Typography color={mainTheme.COLOR_LIGHT} center>
            Delete
          </Typography>
        </TouchableOpacity>
      </DeleteButton>
    </View>
  );
};

export const CartItem = ({ id, count, product, selectedProps, price }) => {
  const dispatch = useDispatch();

  const additionalPrice = useAdditionalPrice(
    selectedProps.size,
    selectedProps.type
  );

  const handleDec = () => {
    dispatch(decCartItem({ id, additionalPrice }));
  };

  const handleInc = () => {
    dispatch(incCartItem({ id, additionalPrice }));
  };

  const handleRemoveItem = () => {
    dispatch(removeCartItem({ id }));
  };

  return (
    <Swipeable
      renderRightActions={(progress, dragAnimatedValue) =>
        renderRightActions(progress, dragAnimatedValue, handleRemoveItem)
      }
    >
      <Container>
        <CartItemImage
          source={{
            uri: product.imageUrl,
          }}
          resizeMode="contain"
        />
        <Info>
          <Typography fontWeight="600">{product.name}</Typography>
          <Typography fontWeight="300">
            {formatProductProperties(
              selectedProps.size.name,
              selectedProps.type.name
            )}
          </Typography>
        </Info>
        <CountContainer>
          <CountButton onPress={handleDec}>-</CountButton>
          <Text>{count}</Text>
          <CountButton onPress={handleInc}>+</CountButton>
        </CountContainer>
        <PriceContainer>
          <Typography fontWeight="600">{price}$</Typography>
        </PriceContainer>
      </Container>
    </Swipeable>
  );
};
