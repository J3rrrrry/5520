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

  return (
    <TextInput
      placeholder="Type something"
      autoCorrect={true}
      keyboardType="default"
      value={text}
      style={{ borderBottomColor: "purple", borderBottomWidth: 2 }}
      onChangeText={(changedText) => {
        setText(changedText);
      }}
    />
  );
}

const styles = StyleSheet.create({});