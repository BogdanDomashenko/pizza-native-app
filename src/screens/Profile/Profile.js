import { useEffect } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-web";
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
import { Button, Container, Wrapper } from "../../ui";

const ButtonStyled = styled(Button)`
  margin-top: 10px;
  margin-left: auto;
`;

export const Profile = () => {
  const dispatch = useDispatch();

  const user = useUser();

  const { orders, isLoading, refetch, isFetching } = useFlatOrders(
    page,
    activeCategory
  );

  const handleLogoutPress = async () => {
    await removeAccessToken();
    dispatch(resetUser());
  };

  useEffect(() => {
    console.log("DATA", data);
  }, [data]);

  return (
    <Container>
      <Wrapper>
        {user.data?.id ? (
          <View>
            <Text>Phone: +{user.data.phoneNumber}</Text>
            <FlatList
              data={products}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={
                <Categories
                  active={activeCategory}
                  onChange={setActiveCategory}
                />
              }
              renderItem={({ item }) => (
                <Product
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  imageUrl={item.ProductImages[0].url}
                  price={item.price}
                  rating={item.rating}
                  sizes={item.Sizes}
                  types={item.Types}
                />
              )}
              onEndReachedThreshold={0.5}
              onEndReached={handleEndReached}
              refreshing={isFetching}
              onRefresh={refetch}
            />
            <Order id="1" price="40" />
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
