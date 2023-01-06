import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAvailableProductsQuery } from "../services/Product.service";
import { resetProducts } from "../store/slices/producs";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export const useFlatProudcts = (page, activeCategory) => {
  const [products, setProducts] = useState([]);

  const prevActiveCategory = usePrevious(activeCategory);

  const { data, isLoading, refetch, isFetching } = useAvailableProductsQuery({
    page,
    activeCategory,
  });

  useEffect(() => {
    setProducts([]);
  }, [activeCategory]);

  useEffect(() => {
    if (!isFetching && data?.list) {
      if (prevActiveCategory && prevActiveCategory === activeCategory) {
        setProducts([...products, ...data.list]);
      } else {
        setProducts(data.list);
      }
    }
  }, [data]);

  return { products, isLoading, refetch, isFetching };
};
