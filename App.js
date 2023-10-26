import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['hotpink', 'deepskyblue']} style={styles.container}>
      <StatusBar style="auto" />
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
