import { Image, Text, View } from "react-native";
import styled from "styled-components/native";

const ProductImage = styled.Image`
  width: 90%;
  height: 90%;
`;

export const Product = ({ imageUrl, name }) => {
  return (
    <View>
      <ProductImage
        source={{
          uri: imageUrl,
        }}
        resizeMode="contain"
      />
      <Text>{name}</Text>
    </View>
  );
};
