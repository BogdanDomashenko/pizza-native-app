import { Text, View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { ScrollContainer } from "../../ui";
import { Product } from "./Product.js";

const items = [
  {
    "id": 24,
    "name": "White chiken",
    "imageUrl": "https://i.ibb.co/937F4Sp/text-4-2.png",
    "price": 12,
    "category": 1,
    "rating": 6,
    "sizes": ["10", "12", "16"],
    "types": ["tiny", "default"],
  },
  {
    "id": 21,
    "name": "Bavarian",
    "imageUrl": "https://i.ibb.co/pZsNLQy/text-1.png",
    "price": 10,
    "category": 1,
    "rating": 10,
    "sizes": ["10", "16", "12"],
    "types": ["tiny", "default"],
  },
  {
    "id": 3,
    "name": "Barbecue chicken",
    "imageUrl":
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
    "price": 11,
    "category": 1,
    "rating": 3,
    "sizes": ["10", "12", "16"],
    "types": ["tiny", "default"],
  },
  {
    "id": 2,
    "name": "Cheese",
    "imageUrl":
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    "price": 10,
    "category": 1,
    "rating": 6,
    "sizes": ["16", "12", "10"],
    "types": ["tiny", "default"],
  },
];

export const Products = () => {
  return (
    <ScrollContainer>
      {items.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          imageUrl={item.imageUrl}
          sizes={item.sizes}
          types={item.types}
        />
      ))}
    </ScrollContainer>
  );
};
