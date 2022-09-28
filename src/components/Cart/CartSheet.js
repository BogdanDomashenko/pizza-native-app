import { useEffect, useRef, useState } from "react";
import { Modal, View, Text } from "react-native";
import styled from "styled-components/native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { mainTheme } from "../../theme";

const Container = styled.View`
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
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheet>
    </Container>
  );
};
