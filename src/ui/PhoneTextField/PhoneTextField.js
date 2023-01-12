import PhoneInput from "react-native-phone-input";
import styled from "styled-components/native";
import { mainTheme } from "../../theme";
import { Field } from "../Field/Field";

const PhoneContainer = styled.View`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  padding: 15px 20px;
`;

export const PhoneTextField = ({ error, ...rest }) => {
  return (
    <Field
      error={error}
      render={({ borderColor }) => (
        <PhoneContainer borderColor={borderColor}>
          <PhoneInput
            {...rest}
            textStyle={{
              color: error ? mainTheme.COLOR_DANGER : mainTheme.COLOR_DARK,
            }}
          />
        </PhoneContainer>
      )}
    />
  );
};
