import { FlatList, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
export default function AddItem({ item, deleteItem }: any) {
  return (
    <TouchableOpacity>
      <View>
        <TextInput></TextInput>
        <Ionicons name="add-circle-outline"></Ionicons>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
