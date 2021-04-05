import { DefaultTheme } from "react-native-paper";
import { Theme } from 'react-native-paper/lib/typescript/types';

export const darkTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    text: "#fff",
    background: "#101010",
    backdrop: "#181818",
    surface: "#101010",
    disabled: "gray",
    primary: "#28B99D"
  }
};

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#181818",
    background: "#f5f5f5",
    backdrop: "#fff",
    surface: "#e6e6e6",
    disabled: "gray",
    primary: "#28B99D"
  }
};