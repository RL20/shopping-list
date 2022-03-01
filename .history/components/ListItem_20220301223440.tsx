import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../components/Themed";
export default function ListItem({ title }: any) {
  return <TouchableOpacity style={styles.listItem}></TouchableOpacity>;
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
