import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.primary,
      borderRadius: 8,
      marginTop: 40,
      elevation: 8,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
      marginHorizontal: 10,
    },
  });