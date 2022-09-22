import { Image, Text, View } from "react-native";
import styled from "styled-components/native";

const ProductView = styled.View`
  margin: 10px auto;
`;

const ProductImage = styled.Image`
  width: 300px;
  height: 300px;
`;

const Title = styled.Text`
  text-align: center;
  margin-top: 10px;
`;

export const Product = ({ imageUrl, name }) => {
  return (
    <ProductView>
      <ProductImage
        source={{
          uri: imageUrl,
        }}
        resizeMode="contain"
      />
      <Title>{name}</Title>
    </ProductView>
  );
};
