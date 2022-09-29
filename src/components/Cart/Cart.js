import { useEffect, useRef, useState } from "react";
import { View, Text, Animated } from "react-native";
import { useShiftAnimation } from "../../hooks";
import { CartButton } from "./CartButton";
import { CartItems } from "./CartItems/CartItems";
import { CartSheet } from "./CartSheet";

export const Cart = () => {
  const sheetRef = useRef(null);

  const [isOpened, setIsOpened] = useState(false);

  const { value, hide: hideItems, show: showItems } = useShiftAnimation();

  const handleClose = () => {
    setIsOpened(false);
  };

  const handlePress = () => {
    setIsOpened(!isOpened);
    sheetRef.current?.snapToIndex(0);
  };

  const handleCheckout = () => {
    hideItems();
  };

  return (
    <>
      <CartSheet sheetRef={sheetRef} onClose={handleClose} isOpened={isOpened}>
        <Animated.ScrollView style={{ transform: [{ translateX: value }] }}>
          <CartItems onCheckout={handleCheckout} />
        </Animated.ScrollView>
      </CartSheet>
      {!isOpened && <CartButton onPress={handlePress} />}
    </>
  );
};
