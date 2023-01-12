import { useEffect, useState } from "react";
import { useOrderListQuery } from "../services/Order.service";

export const useFlatOrders = (page) => {
  const [orders, setOrders] = useState([]);

  const { data, isLoading, refetch, isFetching, ...result } = useOrderListQuery(
    {
      page,
    }
  );

  useEffect(() => {
    console.log(data);
    if (!isFetching && data?.list) {
      setOrders([...orders, data.list]);
    }
  }, [data]);

  useEffect(() => {
    console.log(result);
  }, [result]);

  return { orders, isLoading, refetch, isFetching };
};
