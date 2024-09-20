import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Input({
  textInputFocus,
  inputHandler,
  isModalVisible,
  onCancel,
}) {
  const [text, setText] = useState("");

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
          <Button title="Confirm" onPress={() => {
            inputHandler(text);
            setText("");
          }} />
          <Button title="Cancel" onPress={onCancel} />
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
  }
});
