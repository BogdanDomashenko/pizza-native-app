import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAvailableProductsQuery } from "../services/Product.service";
import { resetProducts } from "../store/slices/producs";

export const useFlatProudcts = (page) => {
  const dispatch = useDispatch();
  const [products, setProduts] = useState([]);

  const { data, isLoading, refetch } = useAvailableProductsQuery(page);

  useEffect(() => {
    if (!isLoading && data?.list) {
      setProduts([...products, ...data.list]);
    }
  }, [data]);

  return { products, isLoading, refetch };
};
