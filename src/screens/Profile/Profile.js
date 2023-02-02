import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Auth, Order } from "../../components";
import { useFlatOrders } from "../../hooks";
import { useUser } from "../../hooks/useUser";
import {
  getAccessToken,
  removeAccessToken,
} from "../../services/AsyncStorage.service";
import { useOrderListQuery } from "../../services/Order.service";
import { resetUser } from "../../store/slices/user";
import { Button, Container, Typography, Wrapper } from "../../ui";

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
`;

export const Profile = () => {
  const dispatch = useDispatch();

  const user = useUser();

  const [page, setPage] = useState(0);

  const { orders, refetch, isFetching } = useFlatOrders(page);

  const handleEndReached = ({ distanceFromEnd }) => {
    if (distanceFromEnd >= 0) {
      setPage(page + 1);
    }
  };

  const handleRefetch = () => {
    setPage(0);
    refetch();
  };

  const handleLogoutPress = async () => {
    await removeAccessToken();
    dispatch(resetUser());
  };

  return (
    <>
      {user.data?.id ? (
        <Container variant="full">
          <FlatList
            data={orders}
            keyExtractor={(order) => order.id}
            ListHeaderComponent={
              <Header>
                <Text>Phone: +{user.data.phoneNumber}</Text>
                <Button variant="primary" onPress={handleLogoutPress}>
                  Logout
                </Button>
              </Header>
            }
            ListEmptyComponent={
              <Wrapper>
                <Typography>You don't have orders yet</Typography>
              </Wrapper>
            }
            renderItem={({ item: order }) => (
              <Order
                key={order.id}
                id={order.id}
                totalPrice={order.totalPrice}
                products={order.OrderProducts}
              />
            )}
            onEndReachedThreshold={0.5}
            onEndReached={handleEndReached}
            refreshing={isFetching}
            onRefresh={handleRefetch}
          />
        </Container>
      ) : (
        <Auth />
      )}
    </>
  );
};
