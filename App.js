import { StatusBar } from 'expo-status-bar';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const appName = "My app"
  const [text, setText] = useState("");
  
    return (
    <View style={styles.container}>
      <StatusBar style="auto "/>
      <Header name={appName}/>
      <TextInput
        placeholder="Type something"
        keyboardType='default'
        style={{ borderBottomColor: "purple", borderBottomWidth: 2}}
        value={text}
        onChangeText={function (changeText){setText(changeText);
        }}
        />
        <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
