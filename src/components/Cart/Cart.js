import { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { useCart, useCheckout, useShiftAnimation } from "../../hooks";
import { useсheckoutMutation } from "../../services/Order.service";
import { resetCart } from "../../store/slices/cart";
import { setShippingData } from "../../store/slices/user";
import { CartButton } from "./CartButton";
import { CartItems } from "./CartItems/CartItems";
import { CartSheet } from "./CartSheet";
import { Payment } from "./Payment/Payment";

export const Cart = () => {
  const sheetRef = useRef(null);

  const dispatch = useDispatch();

  const [isOpened, setIsOpened] = useState(false);
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);

  const [сheckout, { isSuccess, isError, ...result }] = useCheckout();

  const { items } = useCart();

  const onSubmit = async (shippingData) => {
    const orderList = items.map((item) => ({
      id: item.product.id,
      count: item.count,
      TypeId: item.selectedProps.type.id,
      SizeId: item.selectedProps.size.id,
    }));

    const result = await сheckout({ orderList, shippingData });

    if ("error" in result) {
      Alert.alert("Error!", "Some error happen", [{ text: "OK" }]);
    } else {
      setIsOpened(false);
      handleCancelPayment();
      dispatch(resetCart({}));
      Alert.alert("Success!", "Your order has been received", [{ text: "OK" }]);
    }
    dispatch(setShippingData(shippingData));
  };

  const {
    value: cartItemsPosition,
    hide: hideItems,
    show: showItems,
  } = useShiftAnimation(-1);
  const {
    value: paymentPosition,
    hide: hidePayment,
    show: showPayment,
  } = useShiftAnimation(1, true);

  const handleClose = () => {
    setIsOpened(false);
  };

  const handlePress = () => {
    setIsOpened(!isOpened);
    sheetRef.current?.snapToIndex(0);
  };

  const handleCheckout = () => {
    hideItems();
    setTimeout(showPayment, 200);
    toggleIsPaymentVisisble();
  };

  const handleCancelPayment = () => {
    hidePayment();
    setTimeout(showItems, 200);
    toggleIsPaymentVisisble();
  };

  const toggleIsPaymentVisisble = () => {
    setTimeout(() => setIsPaymentVisible(!isPaymentVisible), 200);
  };

  return (
    <>
      <CartSheet sheetRef={sheetRef} onClose={handleClose} isOpened={isOpened}>
        <Animated.ScrollView
          style={{ transform: [{ translateX: cartItemsPosition }] }}
        >
          <CartItems
            onCheckout={handleCheckout}
            isVisible={!isPaymentVisible}
          />
        </Animated.ScrollView>
        <Animated.ScrollView
          style={{ transform: [{ translateX: paymentPosition }] }}
        >
          <Payment
            onCancel={handleCancelPayment}
            isVisible={isPaymentVisible}
            onSubmit={onSubmit}
          />
        </Animated.ScrollView>
      </CartSheet>
      {!isOpened && <CartButton onPress={handlePress} />}
    </>
  );
};
