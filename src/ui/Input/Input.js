import styled from "styled-components/native";
import { TextInput } from "react-native";
import { useState } from "react";
import { mainTheme } from "../../theme";

const InputStyled = styled.TextInput`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  padding: 15px 20px;
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const Input = (props) => {
  const [borderColor, setBorderColor] = useState(mainTheme.COLOR_MUTED_MIDDLE);

  const handleFocus = () => {
    setBorderColor(mainTheme.COLOR_PRIMARY);
  };

  const handleBlur = () => {
    setBorderColor(mainTheme.COLOR_MUTED_MIDDLE);
  };

  return (
    <InputStyled
      {...props}
      onFocus={handleFocus}
      onBlur={handleBlur}
      borderColor={borderColor}
      width={props.width}
    />
  );
};
