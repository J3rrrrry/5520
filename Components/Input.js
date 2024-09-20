import { Button, Modal, StyleSheet, Text, TextInput, View, Image } from "react-native";
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
        {/* Images are placed at the top of the layout */}
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png' }}
          style={styles.image}
          accessible={true}
          accessibilityLabel="Network Image"
        />
        <Image
          source={require('../assets/localImage.png')} 
          style={styles.image}
          accessible={true}
          accessibilityLabel="Local Image"
        />

        {/* TextInput and Buttons are placed below the images */}
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
    padding: 20,
  },
  input: {
    borderColor: "purple",
    borderWidth: 2,
    padding: 5,
    width: 200,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: 200,
  },
  spacing: {
    width: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});
