import { useOrderListQuery } from "../services/Order.service";

export const useFlatOrders = (page) => {
  const [orders, setOrders] = useState([]);

  const { data, isLoading, refetch, isFetching } = useOrderListQuery({
    page,
  });

  useEffect(() => {
    setOrders([]);
  }, [activeCategory]);

  useEffect(() => {
    if (!isFetching && data?.list) {
      setOrders([...orders, data.list]);
    }
  }, [data]);

  return { orders, isLoading, refetch, isFetching };
};
