import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { writeToDB } from "../Firebase/firestoreHelper";

export default function GoalUsers({ id }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetch data
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        if (!response.ok) {
          throw new Error(
            `An HTTP error happened with status: ${response.status}`
          );
        }
        // this code will only execute if the response.ok is true
        //extract data
        const data = await response.json();
        // set the users state variable from the data
        data.forEach((user) => writeToDB(user, `goals/${id}/users`));
        setUsers(
          data.map((user) => {
            return user.name;
          })
        );
      } catch (err) {
        console.log("fetch user data ", err);
      }
    }
    fetchData();
  }, []);
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({});