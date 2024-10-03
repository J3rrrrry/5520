import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert
} from "react-native";
import Header from "./Components/Header";
import { useState } from "react";
import Input from "./Components/Input";
import GoalItem from "./Components/GoalItem";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const appName = "My app!";

  function handleInputData(data) {
    console.log("App.js ", data);
    let newGoal = { text: data, id: Math.random().toString() };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setModalVisible(false);
  }

  function dismissModal() {
    setModalVisible(false);
  }

  function handleGoalDelete(deletedId) {
    setGoals((prevGoals) => prevGoals.filter((goalObj) => goalObj.id !== deletedId));
  }

  function confirmDeleteAll() {
    Alert.alert(
      "Delete All Goals",
      "Are you sure you want to delete all goals?",
      [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: () => setGoals([]) }
      ]
    );
  }

  const ItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName}></Header>
        <Button
          title="Add a Goal"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Input
        textInputFocus={true}
        inputHandler={handleInputData}
        isModalVisible={modalVisible}
        dismissModal={dismissModal}
      />
      <View style={styles.bottomView}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem deleteHandler={handleGoalDelete} goalObj={item} />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No goals to show</Text>
            </View>
          )}
          ListHeaderComponent={() =>
            goals.length > 0 && <Text style={styles.listHeader}>My goals</Text>
          }
          ListFooterComponent={() =>
            goals.length > 0 ? (
              <Button title="Delete All" onPress={confirmDeleteAll} />
            ) : null
          }
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topView: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    flex: 1,
    backgroundColor: "#dcd",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  emptyText: {
    fontSize: 18,
    color: "grey",
  },
  listHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "darkblue",
    padding: 10,
    backgroundColor: "#f3f3f3",
    textAlign: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#888",
    width: "100%",
  },
});
