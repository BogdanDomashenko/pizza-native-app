import store, { persistor } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Profile } from "./src/screens";
import { mainTheme } from "./src/theme";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart, CartSheet, Products } from "./src/components";
import { CartButton } from "./src/components/Cart/CartButton";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Profile") {
                  iconName = focused ? "ios-person" : "ios-person-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: mainTheme.COLOR_PRIMARY,
              tabBarInactiveTintColor: mainTheme.COLOR_MUTED,
            })}
          >
            <Tab.Screen name="Home" component={Products} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
          <Cart />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
