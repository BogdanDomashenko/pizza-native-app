import { useEffect, useRef, useState } from "react";
import { CartButton } from "./CartButton";
import { CartItems } from "./CartItems/CartItems";
import { CartSheet } from "./CartSheet";

export const Cart = () => {
  const sheetRef = useRef(null);

  const [isOpened, setIsOpened] = useState(false);

  const handleClose = () => {
    setIsOpened(false);
  };

  const handlePress = () => {
    setIsOpened(!isOpened);
    sheetRef.current?.snapToIndex(0);
  };

  return (
    <>
      <CartSheet sheetRef={sheetRef} onClose={handleClose} isOpened={isOpened}>
        <CartItems />
      </CartSheet>
      {!isOpened && <CartButton onPress={handlePress} />}
    </>
  );
};
