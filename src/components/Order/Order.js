import { Animated, Text } from "react-native";
import styled from "styled-components/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { mainTheme } from "../../theme";
import { memo, useRef, useState } from "react";
import { LayoutAnimation } from "react-native-web";
import { toggleAnimation } from "../../animations/toggleAnimation";
import { OrderItem } from "./OrderItem/OrderItem";
import { generateCartId } from "../../utils/helpers/generateCartId";

const Container = styled.TouchableOpacity`
  margin: 3px 0;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${mainTheme.COLOR_MUTED_LIGHT};
  border-radius: 5px;
  padding: 10px;
`;

const TextStyled = styled.Text`
  font-size: ${mainTheme.FONT_SIZE_MAIN};
`;

const Body = styled.View`
  border-radius: 5px;
  margin-top: 5px;
  padding: 10px;
`;

export const Order = ({ id, products, totalPrice }) => {
  const [isOpened, setIsOpened] = useState(false);

  const animationController = useRef(new Animated.Value(0)).current;

  const toggleBody = () => {
    const config = {
      duration: 300,
      toValue: isOpened ? 0 : 1,
      useNativeDriver: true,
    };

    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setIsOpened(!isOpened);
  };

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <Container onPress={toggleBody}>
      <HeaderContainer>
        <TextStyled>Order {id}</TextStyled>
        <TextStyled>{totalPrice}$</TextStyled>
        <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </Animated.View>
      </HeaderContainer>
      {isOpened && (
        <Body>
          {products.map((product) => (
            <OrderItem
              key={generateCartId(
                product.Product.id,
                product.Type.name,
                product.Size.name
              )}
              name={product.Product.name}
              totalPrice={product.totalPrice}
              count={product.count}
              size={product.Size}
              type={product.Type}
              images={product.Product.ProductImages}
            />
          ))}
        </Body>
      )}
    </Container>
  );
};
