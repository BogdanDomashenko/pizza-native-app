import { Text, View } from "react-native";
import { Signin } from "../../components";
import { useUser } from "../../hooks/useUser";
import { Container } from "../../ui";

export const Profile = () => {
  const user = useUser();

  return (
    <Container>
      {user.data.id ? <Text>{user.data.phoneNumber}</Text> : <Signin />}
    </Container>
  );
};
