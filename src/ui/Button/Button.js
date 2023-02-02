import { Pressable, Text } from "react-native";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { lightTheme } from "../../theme";
import { useState } from "react";

const handleVariant = (variant, isPressed) => {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: isPressed
          ? lightTheme.COLOR_PRIMARY_DARK
          : lightTheme.COLOR_PRIMARY,
      };
    case "primary-outlined":
      return {
        border: `1px solid ${lightTheme.COLOR_PRIMARY}`,
        backgroundColor: isPressed ? lightTheme.COLOR_PRIMARY : "transparent",
      };
    case "success":
      return { backgroundColor: lightTheme.COLOR_SUCCESS };
    case "dark-outlined":
      return {
        border: `1px solid ${lightTheme.COLOR_DARK}`,
      };
    case "light":
      return { backgroundColor: lightTheme.COLOR_MUTED_MIDDLE };
    default:
      return { backgroundColor: lightTheme.COLOR_MUTED };
  }
};

const handleTextColor = (variant, isPressed) => {
  switch (variant) {
    case "primary":
      return lightTheme.COLOR_LIGHT;
    case "primary-outlined":
      return isPressed ? lightTheme.COLOR_LIGHT : lightTheme.COLOR_PRIMARY;
    case "success":
      return lightTheme.COLOR_LIGHT;
    case "dark-outlined":
      return lightTheme.COLOR_DARK;
    default:
      return lightTheme.COLOR_LIGHT;
      return;
  }
};

const Icon = styled(Ionicons)`
  color: ${(props) => handleTextColor(props.variant, props.isPressed)};
`;

const ButtonStyled = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  padding: 10px;
  border-radius: 30px;
  ${(props) => handleVariant(props.variant, props.isPressed)};
`;

const TextStyled = styled.Text`
  flex-direction: row;
  text-align: center;
  font-weight: 700;
  color: ${(props) => handleTextColor(props.variant, props.isPressed)};
  font-size: ${lightTheme.FONT_SIZE_MAIN};
`;

export const Button = ({
  variant,
  children,
  icon,
  containerButton,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <ButtonStyled
      variant={variant}
      isPressed={isPressed}
      {...rest}
      activeOpacity={0.7}
    >
      {icon && (
        <Icon
          name={icon}
          size={lightTheme.FONT_SIZE_MIDDLE}
          variant={variant}
          isPressed={isPressed}
        />
      )}
      <TextStyled variant={variant} isPressed={isPressed}>
        {children}
      </TextStyled>
    </ButtonStyled>
  );
};
