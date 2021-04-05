import React, { FC, ComponentType } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";

const withTheme = (defaultTheme: Theme) => (Component: ComponentType) => {

  const Wrapper: FC = () => (
    <PaperProvider theme={defaultTheme}>
      <Component/>
    </PaperProvider>
  );

  return Wrapper;
};

export default withTheme;