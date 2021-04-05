import React, { ComponentType } from "react";
import { Provider } from "react-redux";
import store from "../../state/store";

export default function withStore(Component: ComponentType) {
  const Wrapper = () => (
    <Provider store={store}>
      <Component/>
    </Provider>
  );

  return Wrapper;
}