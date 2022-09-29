import styled from "styled-components/native";
import { Text } from "react-native";
import { mainTheme } from "../../theme";

export const Title = styled.Text`
  font-weight: 700;
  font-size: ${mainTheme.FONT_SIZE_LARGE};
  color: ${(props) => props.color || mainTheme.COLOR_DARK};
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

export const Typography = styled.Text`
  font-size: ${(props) => props.fontSize || mainTheme.FONT_SIZE_MAIN};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || mainTheme.COLOR_DARK};
  text-align: ${(props) => (props.center ? "center" : "left")};
`;
