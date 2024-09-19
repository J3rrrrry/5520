import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Input({ textInputFocus, inputHandler }) {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);
  function handleConfirm() {
    inputHandler(text);
  }
  return (
    <>
      <TextInput
        autoFocus={textInputFocus}
        placeholder="Type something"
        autoCorrect={true}
        keyboardType="default"
        value={text}
        style={{ borderBottomColor: "purple", borderBottomWidth: 2 }}
        onChangeText={(changedText) => {
          setText(changedText);
        }}
        onBlur={() => {
          setBlur(true);
        }}
        onFocus={() => {
          setBlur(false);
        }}
      />
      {blur ? (
        text.length >= 3 ? (
          <Text>Thank you</Text>
        ) : (
          <Text>Please type more than 3 characters</Text>
        )
      ) : (
        text && <Text>{text.length}</Text>
      )}
      <Button title="Confirm" onPress={handleConfirm} />
    </>
  );
}
const styles = StyleSheet.create({});