import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native"
import { Divider, Text, withTheme } from "react-native-paper";

import SitterCard from "./SitterCard";

import { useLocalSitters } from "./hooks";

//TODO: loading state
const FindSittersScene = withTheme(({ theme }) => {
  const { sitters, fetch } = useLocalSitters();

  useEffect(() => {
    fetch()
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: theme.colors.background }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover sitters in your local area</Text>
      </View>
      <Divider/>
      <ScrollView style={styles.list}>
        {sitters.map(sitter => (
          <View key={sitter.id} style={styles.listItem}>
            <SitterCard sitter={sitter} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: "13%"
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "Quicksand-medium"
  },
  list: {
    height: "87%"
  },
  listItem: {
    margin: 20,
    marginTop: 10,
    marginBottom: 10
  }
});

export default FindSittersScene;