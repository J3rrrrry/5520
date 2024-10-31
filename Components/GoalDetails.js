import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PressableButton from "./PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { setWarningFlag } from "../Firebase/firestoreHelper";
import GoalUsers from "./GoalUsers";

export default function GoalDetails({ navigation, route }) {
  function moreDetailsHandler() {
    navigation.push("Details");
  }
  
  const [warning, setWarning] = useState(false);

  async function warningHandler() {
    setWarning(true);
    navigation.setOptions({title: "Warning!"});

    if (route.params && route.params.goalData) {
      const goalId = route.params.goalData.id;
      const collectionName = "goals";
      await setWarningFlag(goalId);
    }
  }


    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <PressableButton
                        pressedHandler={warningHandler}
                        componentStyle={{ backgroundColor: "purple" }}
                        pressedStyle={{ opacity: 0.5, backgroundColor: "purple" }}
                    >
                        <AntDesign name="warning" size={24} color="white" />
                    </PressableButton>
                );
            },
        });
    }, []);

    return (
        <View>
            {route.params ? (
                <Text style={warning && styles.warningStyle}>
                    This is details of a goal with text {route.params.goalData.text} and
                    id {route.params.goalData.id}
                </Text>
            ) : (
                <Text style={warning && styles.warningStyle}>More details</Text>
            )}
            <Button title="More Details" onPress={moreDetailsHandler} />
            {route.params && <GoalUsers id={route.params.goalData.id} />}
        </View>
    );
}

const styles = StyleSheet.create({
    warningStyle: {
        color: "red",
    },
});
