import { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";
import { useCart, useFlatProudcts } from "../../hooks";
import { useAvailableProductsQuery } from "../../services/Product.service";
import { Container, ScrollContainer } from "../../ui";
import { Categories } from "../Categories/Categories";
import { Product } from "./Product.js";

export const Products = () => {
  const cart = useCart();

  const [activeCategory, setActiveCategory] = useState(1);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const [page, setPage] = useState(0);

  const { products, isLoading, refetch } = useFlatProudcts(
    page,
    activeCategory
  );

  const handleEndReached = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Categories active={activeCategory} onChange={setActiveCategory} />
        }
        renderItem={({ item }) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.ProductImages[0].url}
            price={item.price}
            rating={item.rating}
            sizes={item.Sizes}
            types={item.Types}
          />
        )}
        onEndReached={handleEndReached}
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </Container>
  );
};
