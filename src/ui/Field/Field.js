import styled from "styled-components/native";
import { useState } from "react";
import { mainTheme } from "../../theme";
import { Typography } from "../Typography/Typography";

const Container = styled.View`
  position: relative;
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const InputStyled = styled.TextInput`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  padding: 15px 20px;
  width: auto;
`;

const ErrorLabel = styled(Typography)`
  position: absolute;
  right: 0;
  bottom: -30%;
`;

export const Field = ({ render, error, width, ...rest }) => {
  const borderColor = error
    ? mainTheme.COLOR_DANGER
    : mainTheme.COLOR_MUTED_MIDDLE;

  return (
    <Container width={width}>
      {render({ borderColor })}
      {/* <InputStyled
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        borderColor={error ? mainTheme.COLOR_DANGER : borderColor}
        error={error}
        style={{
          ...(error && { color: mainTheme.COLOR_DANGER }),
        }}
      /> */}
      {error && (
        <ErrorLabel
          color={mainTheme.COLOR_DANGER}
          fontSize={mainTheme.FONT_SIZE_SMALL}
        >
          {error}
        </ErrorLabel>
      )}
    </Container>
  );
};
