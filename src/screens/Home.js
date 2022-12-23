import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import { Products } from "../components";
import { Categories } from "../components/Categories/Categories";
import { Button, Container } from "../ui";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Products />
    </Container>
  );
};
