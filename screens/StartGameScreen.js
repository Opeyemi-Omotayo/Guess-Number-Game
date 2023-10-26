import { View, TextInput } from "react-native";
import Button from "../components/micro/Button";

const StartGameScreen = () => {
  return (
    <View>
      <TextInput placeholder="enter a number" />
      <Button>Reset</Button>
      <Button>Confirm</Button>

    </View>
  );
};

export default StartGameScreen;
