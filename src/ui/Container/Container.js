import { View, ScrollView } from "react-native";
import styled from "styled-components";

const handleContainerVariant = (variant = "default") => {
  switch (variant) {
    case "default":
      return "15px";
    case "full":
      return 0;
  }
};

export const Container = styled.View`
  padding: 0 ${(props) => handleContainerVariant(props.variant)};
  background-color: #ffffff;
  height: 100%;
`;

export const ScrollContainer = styled.ScrollView`
  padding: 0 20px;
  padding-top: 20px;
  background-color: #ffffff;
`;
