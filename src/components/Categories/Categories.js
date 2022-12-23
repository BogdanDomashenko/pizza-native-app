import { useCallback, useState } from "react";
import { ScrollView, Text } from "react-native";
import styled from "styled-components";
import { useCategoriesQuery } from "../../services/Product.service";
import { Button, Container, Wrapper } from "../../ui";

const ButtonStyled = styled(Button)`
  margin-right: 10px;
`;

const CategoriesContainer = styled.View`
  flex-direction: row;
  padding: 10px 0;
`;

export const Categories = ({ active, onChange }) => {
  const { data: categories, isLoading, refetch } = useCategoriesQuery();

  const handleClick = useCallback((itemId) => {
    onChange(itemId);
  }, []);

  if (!categories?.length) return null;

  return (
    <Wrapper>
      <ScrollView horizontal={true}>
        <CategoriesContainer>
          {categories.map((category) => (
            <ButtonStyled
              key={category.id}
              variant={active === category.id ? "success" : "dark-outlined"}
              onPress={() => handleClick(category.id)}
            >
              {category.name}
            </ButtonStyled>
          ))}
        </CategoriesContainer>
      </ScrollView>
    </Wrapper>
  );
};
