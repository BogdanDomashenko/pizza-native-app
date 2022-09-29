import { Text } from "react-native";
import { Button, Container } from "../../../ui";

export const Payment = ({ onCancel }) => {
  return (
    <Container>
      <Text>Payment</Text>
      <Button variant="success" onPress={onCancel}>
        Go back
      </Button>
    </Container>
  );
};
