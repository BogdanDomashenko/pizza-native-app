import { ScrollView, Text, View } from "react-native";
import { Products } from "../components";

export const Home = () => {
  return (
    <ScrollView>
      <Text>Home</Text>
      <Products />
    </ScrollView>
  );
};
