import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text, withTheme } from "react-native-paper";
import { Queue, Stack } from "react-native-spacing-system";
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

import { ISitter } from "../../models/sitter";

import profileDefault from "../../../assets/profile_default.png";

export type SitterCardProps = {
  sitter: ISitter
  theme: ReactNativePaper.Theme
};

type RatingProps = {
  value: string | number,
  color?: boolean
};

function Rating({ value, color = true }: RatingProps) {
  return (
    <View style={styles.rating}>
      <Ionicons name="ios-star" size={24} color={color ? "#28B99D" : "gray"} />
      <Text style={{ ...styles.ratingValue, ...styles.descriptionText }}>{value}</Text>
    </View>
  );
}

//TODO: currency hook
//TODO: Rating color based on the value
const SitterCard = withTheme(({ sitter, theme }: SitterCardProps) => {
  const navigation = useNavigation();

  const { fullName, profileImageUrl, ratingPercentage, hourlyRate, sits } = sitter;

  const onPress = () => navigation.navigate("SitterProfile", { sitter });

  return (
    <TouchableWithoutFeedback style={{ ...styles.root, backgroundColor: theme.colors.backdrop }} onPress={onPress}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: profileImageUrl }}
          defaultSource={profileDefault}
        />
      </View>
      <View style={styles.description}>
        <View style={{ ...styles.descriptionContainer, alignItems: 'flex-start' }}>
          <Text style={styles.fullName}>{fullName}</Text>
          <Stack size={4} />
          <Rating value={ratingPercentage || "No rating"} color={Boolean(ratingPercentage)}/>
        </View>
        <Queue size={36} />
        <View style={{ ...styles.descriptionContainer, marginLeft: "auto" }}>
          <Text style={styles.descriptionText}>{hourlyRate}/hr</Text>
          <Stack size={4} />
          <Text style={styles.descriptionText}>Sits: {sits}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginTop: 5,
    height: 120,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 5
  },
  image: {
    borderRadius: 100,
    resizeMode: "cover",
    height: 80,
    width: 80,
    backgroundColor: "gray"
  },
  fullName: {
    fontSize: 18,
    fontFamily: "Quicksand-bold"
  },
  description: {
    width: "60%",
    marginLeft: 20,
    display: "flex",
    flexDirection: "row"
  },
  descriptionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: "Quicksand-medium"
  },
  rating: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center"
  },
  ratingValue: {
    marginLeft: 10
  }
});

export default SitterCard;