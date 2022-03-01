import { FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import ListItem from "../components/ListItem";
import AddItem from "../components/AddItem";
const { v4: uuidv4 } = require("uuid");
export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "brd" },
    { id: uuidv4(), text: "rsrsrs" },
    { id: uuidv4(), text: "hiy" },
  ]);
  const deleteItem = (id: any) => {
    setItems((prevItem) => {
      return prevItem.filter((item) => item.id != id);
    });
  };
  const addItem = (item: any) => {
    setItems((prevItem) => {
      return prevItem.filter((item) => item.id != id);
    });
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <AddItem></AddItem>
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
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
