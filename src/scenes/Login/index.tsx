import React, { useCallback, useState } from "react";

import { userApi } from "../../api";

import { TextInput, Image, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import Toast from "react-native-toast-message";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

import { useUserToken } from "../../hooks";

import Logo from "../../../assets/logo-dark-on-light.png";

type LoginScreenProps = StackScreenProps<RootStackParamList>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
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
    <View style={styles.root}>
      <Image style={styles.logo} source={Logo}/>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={onValue(setEmail)}
        />
        <TextInput
          style={styles.input}
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
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    height: "100%",
    backgroundColor: "white"
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
    borderRadius: 5,
    backgroundColor: "#F5F5F5"
  },
  loginButton: {
    margin: 60
  }
});