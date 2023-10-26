import { View, Text } from "react-native";

const Button = ({children}) => {
  return (
   <View>
    <Text>{children}</Text>
   </View>
  )
}

export default Button;
