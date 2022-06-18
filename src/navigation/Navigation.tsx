import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Gallery, FocusMode } from "../screens";
import { RootStackParamList } from "./types";

const NavigationStack: FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{
          title: "Gallery",
          headerStyle: {
            backgroundColor: "#37cedb",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="FocusMode"
        component={FocusMode}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#37cedb",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default NavigationStack;
