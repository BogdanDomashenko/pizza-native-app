import styled from "styled-components/native";
import { Text } from "react-native";
import { lightTheme } from "../../theme";

const TitlePrototype = styled.Text`
  font-weight: 700;
  font-size: ${lightTheme.FONT_SIZE_LARGE};
  color: ${(props) => props.color || lightTheme.COLOR_DARK};
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

export const Title = ({ children, ...rest }) => (
  <TitlePrototype {...rest} numberOfLines={1} adjustsFontSizeToFit>
    {children}
  </TitlePrototype>
);

const TypographyPrototype = styled.Text`
  font-size: ${(props) => props.fontSize || lightTheme.FONT_SIZE_MAIN};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || lightTheme.COLOR_DARK};
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

export const Typography = ({ children, ...rest }) => (
  <TypographyPrototype {...rest} numberOfLines={1} adjustsFontSizeToFit>
    {children}
  </TypographyPrototype>
);
