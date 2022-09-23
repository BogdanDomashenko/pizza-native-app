import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import { SelectBar } from "../../ui";

const ProductView = styled.View`
  margin: 10px auto;
`;

const ProductImage = styled.Image`
  width: 300px;
  height: 300px;
  mix-blend-mode: multiply;
`;

const Title = styled.Text`
  text-align: center;
  margin-top: 10px;
`;

export const Product = ({ imageUrl, name, types, sizes }) => {
  return (
    <ProductView>
      <ProductImage
        source={{
          uri: imageUrl,
        }}
        resizeMode="contain"
      />
      <Title>{name}</Title>
      <SelectBar itemsRow1={types} itemsRow2={sizes} />
    </ProductView>
  );
};
