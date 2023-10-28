import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'deepskyblue',
        borderWidth: 2,
        borderColor: 'deepskyblue',
        paddingHorizontal: 22,
        paddingVertical: 12,
        marginTop: 70,
    }
  });