import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button } from "../components";
export default function Home(props: any) {
  return (
    <>
      <ImageBackground
        source={require("../images/cats.webp")}
        
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.headerText}>W E L C O M E</Text>
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
    width: "auto",
    height: "auto",

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
