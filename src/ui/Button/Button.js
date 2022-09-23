import { Pressable, Text } from "react-native";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { mainTheme } from "../../theme";

const handleVariant = (variant) => {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: mainTheme.COLOR_PRIMARY,
      };
    case "success":
      return { backgroundColor: mainTheme.COLOR_SUCCESS };
    default:
      return { backgroundColor: mainTheme.COLOR_MUTED };
  }
};

const handleTextColor = (variant) => {
  switch (variant) {
    case "primary":
      return {
        color: mainTheme.COLOR_LIGHT,
      };
    case "success":
      return {
        color: mainTheme.COLOR_LIGHT,
      };
    default:
  }
};

const ButtonStyled = styled.Pressable`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  padding: 10px 20px;
  border-radius: 30px;
  ${(props) => handleVariant(props.variant)};
`;

const TextStyled = styled.Text`
  text-align: center;
  font-weight: 700;
  ${(props) => handleTextColor(props.variant)}
  font-size: ${mainTheme.FONT_SIZE_MAIN};
`;

export const Button = ({ variant, children, ...rest }) => {
  return (
    <ButtonStyled variant={variant} {...rest}>
      <Ionicons
        name="add"
        color={mainTheme.COLOR_LIGHT}
        size={mainTheme.FONT_SIZE_MIDDLE}
      />
      <TextStyled variant={variant}>{children}</TextStyled>
    </ButtonStyled>
  );
};
