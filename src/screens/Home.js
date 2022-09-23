import { ScrollView, Text, View } from "react-native";
import { Products } from "../components";
import { Container } from "../ui";

export const Home = () => {
  return (
    <Container>
      <Text>Home</Text>
      <Products />
    </Container>
  );
};
