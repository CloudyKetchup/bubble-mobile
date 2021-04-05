import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { withTheme } from "react-native-paper";

import Bookings       from "../Bookings";
import FindSitters    from "../FindSitters";
import { Ionicons }   from '@expo/vector-icons'; 
import HomeScreen from "./HomeScreen";
import { Platform } from "react-native";

const renderTabIcon = (name: any, color: string) => (
  <Ionicons
    name={name}
    size={24}
    color={color}
  />
);

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = withTheme(({ theme: { colors } }) => {
  const getColor = (focused: boolean) => focused ? colors.primary : colors.text;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: colors.background,
        maxHeight: Platform.OS === "ios" ? 50 : 80
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const name  = focused ? "ios-home" : "ios-home-outline";

            return renderTabIcon(name, getColor(focused));
          }
        }}
      />
      <Tab.Screen
        name="Sitters"
        component={FindSitters}
        options={{
          tabBarIcon: ({ focused }) => {
            const name = focused ? "person" : "person-outline";

            return renderTabIcon(name, getColor(focused));
          }
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: ({ focused }) => {
            const name = focused ? "bookmark" : "bookmark-outline";

            return renderTabIcon(name, getColor(focused));
          }
        }}
      />
    </Tab.Navigator>
  );
});

export default TabNavigator;