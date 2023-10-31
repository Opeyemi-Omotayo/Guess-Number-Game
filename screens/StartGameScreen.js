import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import Button from "../components/micro/Button";
import Colors from "../constants/colors";
import Title from "../components/micro/Title";
import Card from "../components/micro/Card";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.root}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          value={enteredNumber}
          onChangeText={inputHandler}
        />
        <View style={styles.btnContainer}>
          <Button onPress={resetInputHandler}>Reset</Button>
          <Button onPress={confirmInputHandler}>Confirm</Button>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 20,
  },
  instructionText: {
    fontSize: 16,
    paddingTop: 16,
    color: "white",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    color: Colors.secondary,
    marginVertical: 8,
    width: 50,
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
    width: "60%",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
