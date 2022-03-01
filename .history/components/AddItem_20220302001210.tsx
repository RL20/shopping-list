import { FlatList, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
export default function AddItem({ item, deleteItem }: any) {
  return (
    <View>
      <TextInput placeholder="Add Item..." style={styles.input}></TextInput>
      <TouchableOpacity style={styles.btn}>
        <Ionicons name="add-circle-outline"></Ionicons>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {},
  btnText: {},
});
