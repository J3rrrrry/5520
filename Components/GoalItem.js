import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ goalObj, deleteHandler }) {
  function handleDelete() {
    console.log("deleted");
    deleteHandler(goalObj.id);
  }
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{goalObj.text}</Text>
      <Button title="X" color="grey" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 18,
    padding: 10,
  },
  textContainer: {
    backgroundColor: "#6a5acd",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
  },
});