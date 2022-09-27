import { ScrollView, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { Products } from "../components";
import { Button, Container } from "../ui";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>Home</Text>
      <Products />
    </Container>
  );
};
