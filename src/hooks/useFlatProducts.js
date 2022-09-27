import { useEffect, useState } from "react";
import { useAvailableProductsQuery } from "../services/Product.service";

export const useFlatProudcts = (page) => {
  const [products, setProduts] = useState([]);

  const { data, isLoading } = useAvailableProductsQuery(page);

  useEffect(() => {
    console.log(data);
    if (!isLoading && data?.list) {
      setProduts([...products, ...data.list]);
    }
  }, [data]);

  return { products, isLoading };
};
