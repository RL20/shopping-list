import { FlatList, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
export default function AddItem({ addItem }: any) {
  const [text, setText] = useState("");
  const onChange = (textValue: any) => setText(textValue);
  return (
    <View>
      <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}></TextInput>
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Ionicons name="add-circle-outline" size={20}></Ionicons>
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});
