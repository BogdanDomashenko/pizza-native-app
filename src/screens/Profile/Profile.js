import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Order, Signin } from "../../components";
import { useUser } from "../../hooks/useUser";
import {
  getAccessToken,
  removeAccessToken,
} from "../../services/AsyncStorage.service";
import { resetUser } from "../../store/slices/user";
import { Button, Container, Wrapper } from "../../ui";

const ButtonStyled = styled(Button)`
  margin-top: 10px;
  margin-left: auto;
`;

export const Profile = () => {
  const dispatch = useDispatch();

  const user = useUser();

  const handleLogoutPress = async () => {
    await removeAccessToken();
    dispatch(resetUser());
  };

  return (
    <Container>
      <Wrapper>
        {user.data?.id ? (
          <View>
            <Text>Phone: +{user.data.phoneNumber}</Text>
            <Order id="1" price="40" />
            <ButtonStyled variant="primary" onPress={handleLogoutPress}>
              Logout
            </ButtonStyled>
          </View>
        ) : (
          <Signin />
        )}
      </Wrapper>
    </Container>
  );
};
