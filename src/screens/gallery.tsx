import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

const { height, width } = Dimensions.get("screen");

export default function Images(props: any) {
  const [images, setImages] = useState([]);
  const [loading, setIsLoading] = useState(true);
  // const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    fetchRandomCat();
  }, []);
  async function fetchRandomCat() {
    setIsLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search?limit=50", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "4bebae0d-0ec4-4787-8e77-8602741525af",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setImages(data.concat(images));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={fetchRandomCat} />
      }
    >
      {loading === true ? (
        <View style={styles.button}>
          <ActivityIndicator />
        </View>
      ) : (
        <View
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {images.map((image: any, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                props.navigation.navigate("FocusMode", {
                  url: image.url,
                })
              }
            >
              <Image
                // key={index}
                source={{ uri: image.url }}
                style={styles.image}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: height / 3 - 6,
    width: width / 3,
    borderRadius: 10,
    marginBottom: 2,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height / 1.1,
  },
});
