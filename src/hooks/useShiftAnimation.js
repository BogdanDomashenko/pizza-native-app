import { Animated, Dimensions } from "react-native";
import { useRef, useState } from "react";

export const useShiftAnimation = () => {
  const windowWidth = Dimensions.get("window").width;

  console.log({ windowWidth });

  const animateState = {
    start: 0,
    end: -windowWidth,
  };

  const value = useRef(new Animated.Value(animateState.start)).current;

  const hide = () => {
    Animated.timing(value, {
      toValue: animateState.end,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const show = () => {
    Animated.timing(value, {
      toValue: animateState.start,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  };

  return {
    value,
    hide,
    show,
  };
};
