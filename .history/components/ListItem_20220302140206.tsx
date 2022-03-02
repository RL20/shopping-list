import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../components/Themed";
// import Icon from "react-native-vector-icons/dist/FontAwesome";
//https://ionic.io/ionicons
import { Ionicons } from "@expo/vector-icons";
export default function ListItem({ item, deleteItem }: any) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Ionicons name="close-outline" size={20} color="firebrick" onPress={() => deleteItem(item.id)}></Ionicons>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
    padding: 10,
  },
  icon: {
    fontWeight: "600",
  },
});
