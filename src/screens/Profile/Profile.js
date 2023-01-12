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

const ButtonStyled = styled(Button)`
  margin-top: 10px;
  margin-left: auto;
`;

export const Profile = () => {
  const dispatch = useDispatch();

  const user = useUser();

  const [page, setPage] = useState(0);

  const { orders, isLoading, refetch, isFetching } = useFlatOrders(page);

  const handleEndReached = ({ distanceFromEnd }) => {
    if (distanceFromEnd >= 0) {
      setPage(page + 1);
    }
  };

  const handleLogoutPress = async () => {
    await removeAccessToken();
    dispatch(resetUser());
  };

  useEffect(() => {
    console.log("DATA", orders);
  }, [orders]);

  return (
    <Container>
      <Wrapper>
        {user.data?.id ? (
          <View>
            <Text>Phone: +{user.data.phoneNumber}</Text>
            <FlatList
              data={orders}
              keyExtractor={(order) => order.id}
              renderItem={({ order }) => (
                <Order key={order.id} id={order.id} price={order.price} />
              )}
              onEndReachedThreshold={0.5}
              onEndReached={handleEndReached}
              refreshing={isFetching}
              onRefresh={refetch}
            />

            <ButtonStyled variant="primary" onPress={handleLogoutPress}>
              Logout
            </ButtonStyled>
          </View>
        ) : (
          <Signin />
        )}
      </Wrapper>
    </Container>
  );
};
