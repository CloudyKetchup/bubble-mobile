import React, { PropsWithChildren } from "react";
import { ImageSourcePropType, StyleSheet, Image, View } from "react-native";

export type HomeCardProps = {
  source: ImageSourcePropType
};

export default function ImageCard({ source, children }: PropsWithChildren<HomeCardProps>) {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={source} />
      <View style={styles.children}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "black",
    height: 200,
    borderRadius: 10,
    position: "relative",
    elevation: 4
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    opacity: 0.5
  },
  children: {
    height: "100%",
    width: "100%",
    position: "absolute"
  }
})