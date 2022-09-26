import AsyncStorage from "@react-native-async-storage/async-storage";

const ACCESS_TOKEN = "ACCESS_TOKEN";

export const getAccessToken = () => {
  return AsyncStorage.getItem(ACCESS_TOKEN);
};

export const setAccessToken = async (token) => {
  await AsyncStorage.setItem(ACCESS_TOKEN, token);
};

export const removeAccessToken = async () => {
  await AsyncStorage.removeItem(ACCESS_TOKEN);
};
