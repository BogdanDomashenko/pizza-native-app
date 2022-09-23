import { useState } from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import { mainTheme } from "../../theme";
import { SelectBar, Title } from "../../ui";

const ProductView = styled.View`
  margin: 10px auto;
`;

const ProductImage = styled.Image`
  width: 300px;
  height: 300px;
`;

const TitleContainer = styled.View`
  align-items: center;
  margin: 10px 0;
`;

export const Product = ({ imageUrl, name, types, sizes }) => {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  return (
    <ProductView>
      <ProductImage
        source={{
          uri: imageUrl,
        }}
        resizeMode="contain"
      />
      <TitleContainer>
        <Title>{name}</Title>
      </TitleContainer>
      <SelectBar
        itemsRow1={types}
        itemsRow2={sizes}
        activeItemRow1={activeType}
        activeItemRow2={activeSize}
        onSelectRow1={setActiveType}
        onSelectRow2={setActiveSize}
      />
    </ProductView>
  );
};
