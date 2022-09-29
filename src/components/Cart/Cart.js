import { useEffect, useRef, useState } from "react";
import { View, Text, Animated } from "react-native";
import { useShiftAnimation } from "../../hooks";
import { CartButton } from "./CartButton";
import { CartItems } from "./CartItems/CartItems";
import { CartSheet } from "./CartSheet";
import { Payment } from "./Payment/Payment";

export const Cart = () => {
  const sheetRef = useRef(null);

  const [isOpened, setIsOpened] = useState(false);

  const {
    value: cartItemsPosition,
    hide: hideItems,
    show: showItems,
  } = useShiftAnimation(-1);
  const {
    value: peymentPosition,
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
    showPayment();
  };

  return (
    <>
      <CartSheet sheetRef={sheetRef} onClose={handleClose} isOpened={isOpened}>
        <Animated.ScrollView
          style={{ transform: [{ translateX: cartItemsPosition }] }}
        >
          <CartItems onCheckout={handleCheckout} />
        </Animated.ScrollView>
        <Animated.ScrollView
          style={{ transform: [{ translateX: peymentPosition }] }}
        >
          <Payment />
        </Animated.ScrollView>
      </CartSheet>
      {!isOpened && <CartButton onPress={handlePress} />}
    </>
  );
};
