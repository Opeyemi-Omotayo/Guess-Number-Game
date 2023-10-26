import { View, Text, Pressable, StyleSheet } from "react-native";

const Button = ({ children }) => {
    const pressHandler = () => {
        console.log('pressed')
    }
  return (
    <Pressable onPress={pressHandler} style={({pressed}) => pressed ? [styles.btnContainer, styles.pressed] : styles.btnContainer} android_ripple={{color: 'hotpink'}}>
      <View>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor:'deeppink',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 25,
        elevation: 4
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
  });
  
