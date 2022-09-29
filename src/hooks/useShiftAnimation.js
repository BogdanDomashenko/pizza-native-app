import { Animated, Dimensions } from "react-native";
import { useRef, useState } from "react";

export const useShiftAnimation = (endCoef, hidden) => {
  const windowWidth = Dimensions.get("window").width;

  const animateState = {
    start: 0,
    end: endCoef * windowWidth,
  };

  console.log({ animateState });

  const value = useRef(
    new Animated.Value(hidden ? animateState.end : animateState.start)
  ).current;

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
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return {
    value,
    hide,
    show,
  };
};
