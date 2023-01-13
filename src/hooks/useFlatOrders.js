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
    if (!isFetching && data?.list.length) {
      setOrders([...orders, ...data.list]);
    }
  }, [data]);

  return { orders, isLoading, refetch, isFetching };
};
