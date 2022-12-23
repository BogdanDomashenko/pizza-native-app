import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAvailableProductsQuery } from "../services/Product.service";
import { resetProducts } from "../store/slices/producs";

export const useFlatProudcts = (page, activeCategory) => {
  const [products, setProducts] = useState([]);

  const { data, isLoading, refetch } = useAvailableProductsQuery(
    page,
    activeCategory
  );

  useEffect(() => {
    if (!isLoading && data?.list) {
      setProducts([...products, ...data.list]);
    }
  }, [data]);

  // useEffect(() => {
  //   setProducts(data.list);
  // }, [activeCategory]);

  return { products, isLoading, refetch };
};
