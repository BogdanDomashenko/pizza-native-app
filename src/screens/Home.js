import { ScrollView, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { Products } from "../components";
import { Container } from "../ui";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>Home</Text>
      <Products />
    </Container>
  );
};
