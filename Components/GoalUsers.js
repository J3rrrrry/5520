import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-web";

export default function GoalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetch data
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        if (!response.ok) {
          // what to do in case of an HTTP error e.g. 404
          // throw an error
          throw new Error(
            `An HTTP error happened with status: ${response.status}`
          );
        }
        const data = await response.json();
        // set the users state variable from the data
      } catch (err) {
        console.log("fetch user data ", err);
      }
    }
    fetchData();
  }, []);
  return (
    <View>
      <FlatList />
    </View>
  );
}

const styles = StyleSheet.create({});