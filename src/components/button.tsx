import React, { FC } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("screen");

interface Props {
  title: String;
  onPress: () => void;
}
const App: FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#37cedb",
    paddingHorizontal: 40,
    marginVertical: 10,

    width: 240,
    height: 60,
    borderRadius: 200,
  },
  text: {
    color: "#ffffff",
    fontSize: 28,
    letterSpacing: 0.25,
    textAlign: "center",
  },
});
