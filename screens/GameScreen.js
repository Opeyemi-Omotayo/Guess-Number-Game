import { View, Text, StyleSheet } from "react-native";
import Title from "../components/micro/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess!</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
    }, 
  });
  
