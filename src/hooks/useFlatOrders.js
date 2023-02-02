import { useRef } from "react";
import { useEffect, useState } from "react";
import { useOrderListQuery } from "../services/Order.service";

export const useFlatOrders = (page) => {
  const [orders, setOrders] = useState([]);
  const isRefetched = useRef();

  const {
    data,
    isLoading,
    refetch: refetchQuery,
    isFetching,
  } = useOrderListQuery({
    page,
  });

  useEffect(() => {
    if (!isFetching && data?.list.length) {
      if (isRefetched.current) {
        isRefetched.current = false;
      } else {
        setOrders(data.list);
        setOrders([...orders, ...data.list]);
      }
    }
  }, [data]);

  const refetch = () => {
    refetchQuery();
    isRefetched.current = true;
  };

  return { orders, isLoading, refetch, isFetching };
};
