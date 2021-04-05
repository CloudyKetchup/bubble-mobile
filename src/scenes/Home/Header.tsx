import React from "react";
import { Image, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { withTheme, Text } from "react-native-paper";
import Menu, { MenuItem } from "react-native-material-menu";

import useUserProfile from "../../hooks/useUserProfile";
import { NavigationProp, useNavigation } from "@react-navigation/core";

import { RootStackParamList } from "../../navigation/types";

import profileDefault from "../../../assets/profile_default.png";
import Logo from "../../../assets/logo-dark-on-light.png";
import { NavigationContainer } from "@react-navigation/native";

type UserButtonProps = {
  onPress: () => void
};

function UserButton({ onPress }: UserButtonProps) {
  const { profile } = useUserProfile();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image
        style={styles.userButton}
        source={{ uri: profile?.profileImageUrl }}
        defaultSource={profileDefault}
      />
    </TouchableWithoutFeedback>
  );
}

const HomeHeader = withTheme(({ theme }) => {
  let _menu: Menu | null = null;

  const { logout } = useUserProfile();
  const { reset }  = useNavigation<NavigationProp<RootStackParamList>>();

  const onMenu = () => _menu?.show();

  const onLogout = async () => {
    // remove user token
    await logout();

    // hide menu
    _menu?.hide();

    // go to login screen
    reset({
      index: 0,
      routes: [{ name: "LoginScreen" }]
    });
  };

  return (
    <View style={styles.root}>
      <Image style={styles.logo} source={Logo} />
      <Menu
        style={{ ...styles.menu, backgroundColor: theme.colors.backdrop }}
        ref={ref => _menu = ref}
        button={<UserButton onPress={onMenu} />}
      >
        <MenuItem onPress={onLogout}>
          <Text style={{ color: theme.colors.text }}>Logout</Text>
        </MenuItem>
      </Menu>
    </View>
  )
});

const styles = StyleSheet.create({
  root: {
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "12%",
    width: "100%",
    position: "relative"
  },
  logo: {
    margin: 5,
    marginLeft: 10,
    height: 40,
    width: 140
  },
  menu: {
    marginTop: 50
  },
  userButton: {
    borderRadius: 100,
    right: 10,
    top: 10,
    height: 40,
    width: 40,
    position: "absolute",
  }
});

export default HomeHeader;