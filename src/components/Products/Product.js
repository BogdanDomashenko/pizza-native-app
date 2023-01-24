import { useMemo } from "react";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { addCartItem } from "../../store/slices/cart";
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

export const Product = memo(({ id, name, price, imageUrl, types, sizes }) => {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(types ? types[0] : "none");
  const [activeSize, setActiveSize] = useState(sizes ? sizes[0] : "none");

  const additionalPrice = useMemo(
    () => activeSize.price + activeType.price,
    [activeSize.price, activeType.price]
  );

  const handleAddPress = useCallback(() => {
    dispatch(
      addCartItem({
        id,
        name,
        price,
        imageUrl,
        selectedProps: { type: activeType, size: activeSize },
        additionalPrice,
      })
    );
  }, [activeSize, activeType]);

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
        <Title>{price + additionalPrice}$</Title>
        <Button
          background={mainTheme.COLOR_PRIMARY}
          icon="add"
          variant="primary-outlined"
          onPress={handleAddPress}
        >
          Add
        </Button>
      </Bottom>
    </ProductView>
  );
});
