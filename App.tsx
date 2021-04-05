import React, { useEffect } from 'react';

import {  View, StatusBar, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { withTheme } from 'react-native-paper';
import AppLoading from "expo-app-loading";

import { withStore } from './src/providers';
import { withTheme as wrapWithTheme } from "./src/decorators";

import { HomeNavigator } from './src/scenes/Home';
import LoginScreen from './src/scenes/Login';

import useUserToken from './src/hooks/useUserToken';

import { useFonts } from '@expo-google-fonts/inter';
import { RootStackParamList } from './src/navigation/types';
import { lightTheme } from './src/theme';

type RootProps = StackScreenProps<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const Container = withTheme(({ theme, children }) => (
  <View style={{
    height: "100%",
    paddingTop: Platform.OS === "ios" ? 10 : 30,
    backgroundColor: theme.colors.background
  }}>
    {children}
  </View>
));

function Root({ navigation }: RootProps) {
  const { get } = useUserToken();

  useEffect(() => {
    get().then(token => {
      if (!token) {
        navigation.navigate("LoginScreen");
      }
    });
  }, []);

  return <HomeNavigator />;
};

//TODO: Loading screen while authenticating
const App = withTheme(({ theme: { dark, colors } }) => {
  const [fontsLoaded] = useFonts({
    "Quicksand-regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-medium": require("./assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf")
  });

  if (!fontsLoaded) return <AppLoading/>;

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: colors.background }}>
      <Container>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Root">
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Root"
              component={Root}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </SafeAreaView>
  );
});

const ConnectedApp = withStore(App);

export default wrapWithTheme(lightTheme)(ConnectedApp);