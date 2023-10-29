import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
  return (
   <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
   </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary,
        borderRadius: 8,
        padding: 10,
        margin: 24,
        alignItems:'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.secondary,
        fontWeight: 'bold',
        fontSize: 36,
        paddingHorizontal: 40,
    }
  });