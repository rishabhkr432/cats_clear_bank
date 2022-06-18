import React from "react";
import { View, ImageBackground, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("screen");
export default function FocusMode(props: any) {
  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={{
            uri: props.route.params.url,
          }}
          style={{ height: height, width: width }}
        ></ImageBackground>
      </ScrollView>
    </View>
  );
}
