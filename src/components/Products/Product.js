import { useState } from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import { mainTheme } from "../../theme";
import { Button, SelectBar, Title } from "../../ui";

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

const Bottom = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CountContainer = styled.Text`
  background-color: ${mainTheme.COLOR_PRIMARY};
  color: ${mainTheme.COLOR_LIGHT};
`;

export const Product = ({ name, price, imageUrl, types, sizes }) => {
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
      <Bottom>
        <Title>{price}$</Title>
        <Button
          background={mainTheme.COLOR_PRIMARY}
          icon="add"
          variant="primary-outlined"
        >
          Add
        </Button>
      </Bottom>
    </ProductView>
  );
};
