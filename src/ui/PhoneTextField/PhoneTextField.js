import PhoneInput from "react-native-phone-input";
import styled from "styled-components/native";
import { mainTheme } from "../../theme";

const PhoneContainer = styled.View`
  border: 1px solid ${mainTheme.COLOR_MUTED_MIDDLE};
  border-radius: 5px;
  padding: 15px 20px;
`;

export const PhoneTextField = (props) => {
  return (
    <PhoneContainer>
      <PhoneInput {...props} />
    </PhoneContainer>
  );
};
