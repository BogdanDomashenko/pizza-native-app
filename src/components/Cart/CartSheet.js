import { useEffect, useRef, useState } from "react";
import { Modal, View, Text, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { lightTheme } from "../../theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Container = styled(GestureHandlerRootView)`
  flex: 1;
  ${(props) =>
    props.isOpened
      ? {
          display: "flex",
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }
      : { display: "none" }}
  align-items: center;
  justify-content: center;
`;

const snapPoints = ["80%"];

export const CartSheet = ({ sheetRef, onClose, isOpened, children }) => {
  useEffect(() => {
    if (isOpened) {
      sheetRef.current?.snapToIndex(0);
    }
  }, [isOpened]);

  return (
    <Container isOpened={isOpened}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        index={0}
        onClose={onClose}
      >
        <BottomSheetScrollView>{children}</BottomSheetScrollView>
      </BottomSheet>
    </Container>
  );
};
