import { FlatList, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { RootTabScreenProps } from "./types";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
const { v4: uuidv4 } = require("uuid");
export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "Bread" },
    { id: uuidv4(), text: "Cucumber" },
    { id: uuidv4(), text: "Tomatoes" },
  ]);
  const deleteItem = (id: any) => {
    setItems((prevItem) => {
      return prevItem.filter((item) => item.id != id);
    });
  };
  const addItem = (text: any) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", [{ text: "OK" }]);
    } else {
      setItems((prevItem) => {
        return [...prevItem, { id: uuidv4(), text: text }];
      });
    }
  };
  return (
    <View style={styles.container}>
      <AddItem addItem={addItem}></AddItem>
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flex: 1,
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
