import { View, TextInput, StyleSheet } from "react-native";
import Button from "../components/micro/Button";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <View style={styles.btnContainer}>
        <Button>Reset</Button>
        <Button>Confirm</Button>
      </View>
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
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginHorizontal: 10,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "brown",
    borderBottomWidth: 2,
    color: "brown",
    marginVertical: 8,
    width: 50,
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: 'row',
    width: '50%',
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
