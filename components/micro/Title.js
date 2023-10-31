import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 22,
        paddingVertical: 12,
        marginTop: 70,
        textAlign: "center"
    }
  });