import styled from "styled-components/native";
import { useEffect, useState } from "react";
import { lightTheme } from "../../theme";
import { Typography } from "../Typography/Typography";
import { Platform } from "react-native";

const Container = styled.View`
  position: relative;
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const InputStyled = styled.TextInput`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  padding: ${Platform.OS === "ios" ? 15 : 12}px 20px;
  width: auto;
`;

const ErrorLabel = styled(Typography)`
  position: absolute;
  right: 0;
  bottom: -30%;
`;

export const Input = ({ error, width, ...rest }) => {
  const [borderColor, setBorderColor] = useState(lightTheme.COLOR_MUTED_MIDDLE);

  // const handleFocus = () => {
  //   setBorderColor(mainTheme.COLOR_PRIMARY);
  // };

  // const handleBlur = () => {
  //   setBorderColor(mainTheme.COLOR_MUTED_MIDDLE);
  // };

  return (
    <Container width={width}>
      <InputStyled
        {...rest}
        borderColor={error ? lightTheme.COLOR_DANGER : borderColor}
        error={error}
        style={{
          ...(error && { color: lightTheme.COLOR_DANGER }),
        }}
      />
      {error && (
        <ErrorLabel
          color={lightTheme.COLOR_DANGER}
          fontSize={lightTheme.FONT_SIZE_EXTRA_SMALL}
        >
          {error}
        </ErrorLabel>
      )}
    </Container>
  );
};
