import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Stack, Queue } from "react-native-spacing-system";
import { Button, Divider, IconButton, Text, withTheme } from "react-native-paper";
import { StackScreenProps } from "@react-navigation/stack";

import { SitterProfileParamList } from "../../navigation/types";

import profileDefault from "../../../assets/profile_default.png";

type HeaderProps = {
  title: string
  onBack: () => void
};

export type SitterProfileProps = StackScreenProps<SitterProfileParamList, "SitterProfile"> & {
  theme: ReactNativePaper.Theme
};

function Footer() {

  const onSendMessage = () => {

  };

  const onBook = () => {

  };

  return (
    <View style={styles.footer}>
      <View style={styles.footerContainer}>
        <Button onPress={onSendMessage} color="#28B99D" mode="contained" dark icon="message">
          Send a message
        </Button>
        <Stack size={16} />
        <Button onPress={onBook} color="#55427A" mode="contained" dark icon="book">
          Book
        </Button>
      </View>
    </View>
  );
}

function Header({ title, onBack }: HeaderProps) {
  return (
    <View style={styles.header}>
      <IconButton icon="chevron-left" size={26} onPress={onBack} style={{ position: "absolute", left: 10 }} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const SitterProfile = withTheme(({ route, theme, navigation }: SitterProfileProps) => {
  const { sitter } = route.params;

  const renderOtherLanguages = () => {
    const languages = Object.keys(sitter.otherLanguagesSpoken.value);

    return (
      <Text>
        {languages.map((language, index) => `${language} ${index !== languages.length - 1 && ", "}`)}
      </Text>
    );
  };

  return (
    <View style={{ ...styles.root, backgroundColor: theme.colors.background }}>
      <Header
        title={`${sitter.firstName}'s Profile`}
        onBack={navigation.goBack}
      />
      <Divider />
      <ScrollView style={styles.body}>
        <View style={styles.bodyContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: sitter.profileImageUrl }}
            defaultSource={profileDefault}
          />
          <Stack size={16} />
          <Text style={styles.fullName}>
            {sitter.fullName}
          </Text>
          <View style={styles.info}>
            <Text style={styles.infoText}>
              Rating <Text style={{ color: "#28B99D", fontWeight: "bold" }}>{sitter.ratingPercentage}</Text>
            </Text>
            <Queue size={24} />
            <Text style={styles.infoText}>
              {sitter.hourlyRate}/hr
          </Text>
            <Queue size={24} />
            <Text style={styles.infoText}>
              Sits: {sitter.sits}
            </Text>
          </View>
          <View style={{ display: "flex", alignItems: "flex-start" }}>
            <Stack size={16} />
            <Text style={styles.sectionName}>
              Biography
            </Text>
            <Stack size={16} />
            <Text style={styles.descriptionText}>
              {sitter.biography}
            </Text>
            <Stack size={16} />
            {Object.keys(sitter.otherLanguagesSpoken.value).length > 0 && (
              <View style={{ bottom: 0 }}>
                <Text style={styles.sectionName}>
                  Other languages
                </Text>
                <View style={{ marginTop: 10 }}>
                  {renderOtherLanguages()}
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <Divider />
      <Footer />
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    height: "100%"
  },
  body: {
    height: "80%",
    display: "flex"
  },
  bodyContainer: {
    padding: 25,
    alignItems: "center"
  },
  header: {
    height: "12%",
    width: "100%",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  info: {
    margin: 20,
    display: "flex",
    flexDirection: "row"
  },
  infoText: {
    fontSize: 18
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center"
  },
  profileImage: {
    borderRadius: 100,
    resizeMode: "cover",
    height: 200,
    width: 200,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    backgroundColor: "gray"
  },
  fullName: {
    fontFamily: "Quicksand-bold",
    fontSize: 24
  },
  sectionName: {
    fontSize: 20,
    fontFamily: "Quicksand-bold"
  },
  descriptionText: {
    fontSize: 16
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    height: "20%",
    width: "100%"
  },
  footerContainer: {
    height: "100%",
    width: 300
  }
});

export default SitterProfile;