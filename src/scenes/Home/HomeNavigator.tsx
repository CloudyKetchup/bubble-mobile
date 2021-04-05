import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator   from "./TabNavigator";
import SitterProfile  from "../SitterProfile";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SitterProfile"
        component={SitterProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};