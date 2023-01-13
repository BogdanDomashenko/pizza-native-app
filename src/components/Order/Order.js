import { Animated, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { mainTheme } from "../../theme";
import { memo, useCallback, useRef, useState } from "react";
import { LayoutAnimation } from "react-native-web";
import { toggleAnimation } from "../../animations/toggleAnimation";

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
  background: ${mainTheme.COLOR_MUTED_LIGHT};
  border-radius: 5px;
  margin-top: 5px;
  padding: 10px;
`;

export const Order = memo(({ id, products, totalPrice }) => {
  const [isOpened, setIsOpened] = useState(false);

  const animationController = useRef(new Animated.Value(0)).current;

  console.log(id);
  const toggleBody = useCallback(() => {
    const config = {
      duration: 300,
      toValue: isOpened ? 0 : 1,
      useNativeDriver: true,
    };

    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setIsOpened(!isOpened);
  }, []);

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <TouchableOpacity onPress={toggleBody}>
      <HeaderContainer>
        <TextStyled>Order {id}</TextStyled>
        <TextStyled>{totalPrice}$</TextStyled>
        <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </Animated.View>
      </HeaderContainer>
      {isOpened && (
        <Body>
          <Text>woqjdqwoidfjwqodjodwqijofwijqo</Text>
        </Body>
      )}
    </TouchableOpacity>
  );
});
