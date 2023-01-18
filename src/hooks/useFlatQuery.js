export const useFlatQuery = (useQuery, { params }) => {
  const {
    data,
    isLoading,
    refetch: refetchQuery,
    isFetching,
  } = useQuery(params);
};
