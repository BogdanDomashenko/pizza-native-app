import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Typography } from "../../../../ui";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PaymentResult = ({ status, message }) => {
  if (status === "success") {
    return (
      <Container>
        <Typography>
          {message || "Your order has been success processed"}
        </Typography>
        <Ionicons name="checkmark-done" size={24} color="black" />
      </Container>
    );
  }

  if (status === "error") {
    return (
      <Container>
        <Typography>{message || "Some error happen"}</Typography>
        <MaterialIcons name="error-outline" size={24} color="black" />
      </Container>
    );
  }

  return null;
};
