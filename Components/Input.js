import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

export default function Input( {autoFocus }) {
  const [text, setText] = useState("");
  const [showCounter, setShowCounter] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
        inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleBlur = () => {
    setShowCounter(false);
    if (text.length >= 3) {
      setMessage("Thank you");
    } else {
      setMessage("Please type more than 3 characters");
    }
  };

  const handleFocus = () => {
    setShowCounter(true);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={text}
        onChangeText={(value) => setText(value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Type something..."
      />
      {/* Show character count while typing */}
      {showCounter && <Text>Character count: {text.length}</Text>}
      {/* Display message when input loses focus */}
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({});