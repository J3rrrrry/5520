import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Input({
  textInputFocus,
  inputHandler,
  isModalVisible,
  onCancel,
}) {
  const [text, setText] = useState("");

  function handleConfirm() {
    inputHandler(text);
    setText("");
  }

  function handleCancel() {
    setText("");
    onCancel();
  }

  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <View style={styles.container}>
        <TextInput
          autoFocus={textInputFocus}
          placeholder="Type something"
          value={text}
          onChangeText={setText}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Confirm"
            onPress={handleConfirm}
            disabled={text.length < 3}
          />
          <View style={styles.spacing} />
          <Button title="Cancel" onPress={handleCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "purple",
    borderWidth: 2,
    padding: 5,
    width: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: 200, // Ensure proper spacing
  },
  spacing: {
    width: 10, // Adjust the spacing between buttons
  }
});
