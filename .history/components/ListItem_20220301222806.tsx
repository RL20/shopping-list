import { FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../components/Themed";
export default function ListItem({ navigation }:any>) {
 
  return (
    <View style={styles.container}>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
