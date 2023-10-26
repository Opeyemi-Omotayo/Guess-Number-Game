import { View, TextInput, StyleSheet } from "react-native";
import Button from "../components/micro/Button";

const StartGameScreen = () => {
  return (
      <View style={styles.inputContainer}>
        <TextInput placeholder="enter a number" />
        <Button>Reset</Button>
        <Button>Confirm</Button>
      </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hotpink",
    borderRadius: 8,
    marginTop: 100,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginHorizontal:10,
  },
});
