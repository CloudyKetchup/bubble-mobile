import React, { useCallback, useState } from "react";

import { userApi } from "../../api";

import { TextInput, Image, StyleSheet, View } from "react-native";
import { Button, withTheme } from "react-native-paper";
import Toast from "react-native-toast-message";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

import { useUserToken } from "../../hooks";

import Logo from "../../../assets/logo-dark-on-light.png";

type LoginScreenProps = StackScreenProps<RootStackParamList> & { theme: ReactNativePaper.Theme };

const LoginScreen = withTheme(({ navigation, theme }: LoginScreenProps) => {
  const [email, setEmail]       = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [loading, setLoading]   = useState(false);

  const { save } = useUserToken();

  const onLogin = useCallback(async () => {
    if (!email || !password) return;

    setLoading(true);

    const { data, error } = await userApi.login(email, password);

    setLoading(false);

    if (data) {
      await save(data.token);

      navigation.navigate("Root");
    } else if (error) {
      Toast.show({
        type: "error",
        position: "bottom",
        bottomOffset: 40,
        text1: error.message
      });
    }
  }, [email, password]);

  const onValue = (callback: (value: string | null) => void) => (value: string) => {
    callback(value === "" ? null : value);
  }

  return (
    <View style={{ ...styles.root, backgroundColor: theme.colors.background }}>
      <Image style={styles.logo} source={Logo}/>
      <View style={styles.form}>
        <TextInput
          style={{ ...styles.input, backgroundColor: theme.colors.surface }}
          placeholder="Email"
          onChangeText={onValue(setEmail)}
        />
        <TextInput
          style={{ ...styles.input, backgroundColor: theme.colors.surface }}
          placeholder="Password"
          onChangeText={onValue(setPassword)}
        />
      </View>
      <Button
        style={styles.loginButton}
        onPress={onLogin}
        mode="contained"
        color="#28B99D"
        dark
        loading={loading}
        disabled={loading || !(email && password)}
      >
        Log in
      </Button>
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    height: "100%"
  },
  logo: {
    margin: 20,
    height: 85,
    width: 300
  },
  form: {
    margin: 40,
    width: "100%"
  },
  input: {
    margin: 5,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5
  },
  loginButton: {
    margin: 60
  }
});

export default LoginScreen;