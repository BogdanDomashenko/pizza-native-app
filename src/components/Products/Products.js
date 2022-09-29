import { useEffect, useState } from "react";
import {
  Text,
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
import { Product } from "./Product.js";

export const Products = () => {
  const cart = useCart();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const [page, setPage] = useState(0);

  const { products, isLoading, refetch } = useFlatProudcts(page);

  const handleEndReached = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <FlatList
        data={products}
        key={(item) => item.id}
        renderItem={({ item }) => (
          <Product
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
            rating={item.rating}
            sizes={item.sizes}
            types={item.types}
          />
        )}
        onEndReached={handleEndReached}
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </Container>
  );
};
