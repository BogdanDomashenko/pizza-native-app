import { useEffect, useRef, useState } from "react";
import { useAvailableProductsQuery } from "../services/Product.service";

export const useFlatProudcts = (page, activeCategory) => {
  const prevActiveCategory = useRef();
  const [products, setProducts] = useState([]);

  const { data, isLoading, refetch, isFetching, ...rest } =
    useAvailableProductsQuery({
      page,
      activeCategory,
    });

  useEffect(() => {
    prevActiveCategory.current = activeCategory;
  }, [products]);

  useEffect(() => {
    if (isFetching || !data?.list) return;

    if (prevActiveCategory.current === activeCategory) {
      return setProducts([...products, ...data.list]);
    }

    return setProducts(data.list);
  }, [data]);

  return { products, isLoading, refetch, isFetching };
};
