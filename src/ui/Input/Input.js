import styled from "styled-components/native";
import { useEffect, useState } from "react";
import { mainTheme } from "../../theme";

const InputStyled = styled.TextInput`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  padding: 15px 20px;
  width: ${(props) => (props.width ? props.width : "auto")};
  color: "red";
`;

export const Input = ({ error, width, ...rest }) => {
  const [borderColor, setBorderColor] = useState(mainTheme.COLOR_MUTED_MIDDLE);

  useEffect(() => {
    if (error) {
      setBorderColor(mainTheme.COLOR_DANGER);
    }
  }, [error]);

  const handleFocus = () => {
    setBorderColor(mainTheme.COLOR_PRIMARY);
  };

  const handleBlur = () => {
    setBorderColor(mainTheme.COLOR_MUTED_MIDDLE);
  };

  return (
    <InputStyled
      {...rest}
      onFocus={handleFocus}
      onBlur={handleBlur}
      borderColor={borderColor}
      width={width}
      error={error}
    />
  );
};
