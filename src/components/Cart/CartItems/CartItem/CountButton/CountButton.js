import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

const CountButtonContainer = styled.TouchableOpacity`
  border: 1px solid black;
  border-radius: 10px;
  height: 35px;
  width: 35px;
  align-items: center;
  justify-content: center;
`;

export const CountButton = ({ children, ...rest }) => {
  return (
    <CountButtonContainer {...rest}>
      <Text>{children}</Text>
    </CountButtonContainer>
  );
};
