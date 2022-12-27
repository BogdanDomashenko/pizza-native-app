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

  //const prevActiveCategory = useRef(activeCategory);
  const prevActiveCategory = usePrevious(activeCategory);

  const { data, isLoading, refetch } = useAvailableProductsQuery({
    page,
    activeCategory,
  });

  // useEffect(() => {
  //   if (!isLoading && data?.list) {
  //     setProducts(data.list);
  //   }
  // }, [activeCategory]);

  useEffect(() => {
    console.log(prevActiveCategory);
    if (!isLoading && data?.list) {
      if (prevActiveCategory && prevActiveCategory === activeCategory) {
        console.log(true);
        setProducts([...products, ...data.list]);
      } else {
        console.log(false);
        setProducts(data.list);
      }
    }
  }, [data]);

  // useEffect(() => {
  //   prevActiveCategory.current = activeCategory;
  //   console.log(activeCategory);
  // }, [activeCategory]);

  return { products, isLoading, refetch };
};
