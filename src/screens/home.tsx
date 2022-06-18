import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button } from "../components";
export default function Home(props: any) {
  return (
    <>
      <ImageBackground
        source={require("../images/starcraft.jpg")}
        style={styles.container}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.headerText}>Welcome To Cat's App</Text>
          </View>
          <View style={styles.button}>
            <Button
              title={"Gallery"}
              onPress={() => props.navigation.navigate("Gallery")}
            ></Button>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(47,163,218,.4)",
  },
  top: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 28,
    padding: 20,
    // fontFamily:'space-mono'
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
});
