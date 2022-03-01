import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../components/Themed";
export default function ListItem({ title }: any) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {},
  listItemView: {},
});
