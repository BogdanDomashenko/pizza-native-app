import { useEffect, useRef, useState } from "react";
import { CartButton } from "./CartButton";
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

  useEffect(() => {
    console.log(isOpened);
  }, [isOpened]);

  return (
    <>
      <CartSheet
        sheetRef={sheetRef}
        onClose={handleClose}
        isOpened={isOpened}
      />
      {!isOpened && <CartButton onPress={handlePress} />}
    </>
  );
};
