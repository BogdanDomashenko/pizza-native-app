import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Order, Signin } from "../../components";
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
  margin-bottom: 10px;
`;

export const Profile = () => {
  const dispatch = useDispatch();

  const user = useUser();

  const [page, setPage] = useState(0);

  const { orders, isLoading, refetch, isFetching } = useFlatOrders(page);

  const handleEndReached = ({ distanceFromEnd }) => {
    if (distanceFromEnd >= 5) {
      setPage(page + 1);
    }
  };

  const handleLogoutPress = async () => {
    await removeAccessToken();
    dispatch(resetUser());
  };

  return (
    <Container>
      <Wrapper>
        {user.data?.id ? (
          <View>
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
              onRefresh={refetch}
            />
          </View>
        ) : (
          <Signin />
        )}
      </Wrapper>
    </Container>
  );
};
