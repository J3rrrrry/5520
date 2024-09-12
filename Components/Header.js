import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header({ name }) {
  return (
    <View>
      {/* use the prop here */}
      <Text>Welcome to {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});