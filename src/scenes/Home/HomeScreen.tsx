import React from "react";
import { withTheme, Text } from "react-native-paper";
import { Image, View, ScrollView, ImageSourcePropType, TouchableWithoutFeedback } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import Header from "./Header";
import ImageCard from "../../components/ImageCard";

import { HomeScreenParamList } from "../../navigation/types";

import bubblePlusBackground   from "../../../assets/bubbleplus.jpg";
import bubblePlus             from "../../../assets/bplus.png"
import favouritesBackground   from "../../../assets/favourites.png";
import findSittersBackground  from "../../../assets/meetlocals.jpg";
import bookings               from "../../../assets/mysits.jpg";

import styles from "./home.styles";

export type HomeProps = StackScreenProps<HomeScreenParamList, "Home"> & { theme: ReactNativePaper.Theme };

type CardItemProps = {
  title: string
  backgroundSource: ImageSourcePropType
  description: string
  onPress: () => void
};

function CardItem({ title, backgroundSource, description, onPress }: CardItemProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.listItem}>
        <ImageCard source={backgroundSource}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
          </View>
        </ImageCard>
      </View>
    </TouchableWithoutFeedback>
  );
}

const HomeScreen = withTheme(({ navigation, theme }: HomeProps) => {
  const { navigate } = navigation;

  return (
    <View style={{ ...styles.root, backgroundColor: theme.colors.background }}>
      <Header/>
      <ScrollView style={styles.list}>
        <View style={styles.listItem}>
          <ImageCard source={bubblePlusBackground}>
            <View style={styles.cardContainer}>
              <Text style={styles.cardTitle}>Discover <Text style={{ color: theme.colors.primary }}>Bubble PLus</Text></Text>
              <Image style={styles.bplus} source={bubblePlus} />
            </View>
          </ImageCard>
        </View>
        <CardItem
          title="Favourites"
          description="Sitters picked and trusted by you"
          backgroundSource={favouritesBackground}
          onPress={() => undefined}
        />
        <CardItem
          title="Find a Sitter?"
          description="Discovery sitters in your local area"
          backgroundSource={findSittersBackground}
          onPress={() => navigate("Sitters")}
        />
        <CardItem
          title="Your Bookings"
          description="Check your requested and confirmed bookings"
          backgroundSource={bookings}
          onPress={() => navigate("Bookings")}
        />
      </ScrollView>
    </View>
  );
});

export default HomeScreen;