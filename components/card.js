import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  NativeModules,
  LayoutAnimation,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

let cardWidth = width * 0.9;
const space = 10;
const borderRadius = 10;
const imageW = 100;
const imageH = 100;
const altImageH = 200;
const descriptionW = cardWidth - imageW;
const textSize = 20;
const descriptionSize = 12;
const descriptionL = 2;
const Card = (props) => {
  const { image, title, description } = props;
  const [imageWidth, setImageWidth] = useState(imageW);
  const [imageHeight, setImageHeight] = useState(imageH);
  const [descriptionWidth, setDescriptionWidth] = useState(descriptionW);
  const [descriptionLines, setDescriptionLines] = useState(descriptionL);

  let toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setImageWidth(imageWidth === imageW ? cardWidth : imageW);
    setImageHeight(imageHeight === imageH ? altImageH : imageH);
    setDescriptionWidth(
      descriptionWidth === descriptionW ? cardWidth : descriptionW
    );
    setDescriptionLines(
      descriptionLines === descriptionL ? null : descriptionL
    );
  };
  return (
    <Animated.View style={styles.cardContainer}>
      <Pressable onPress={toggle}>
        <Animated.View style={styles.imageContainer(imageWidth, imageHeight)}>
          <Animated.Image style={styles.image} source={{ uri: image }} />
        </Animated.View>
      </Pressable>
      <Animated.View style={styles.description(descriptionWidth)}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>In veg Pizza</Text>
          <View
            style={{
              width: "45%",
              height: 15,
              borderRadius: 5,
              backgroundColor: "orange",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 10,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Best Seller
            </Text>
          </View>
          <View>
            <Text>$239</Text>
          </View>
          <Text style={styles.descriptionText} numberOfLines={descriptionLines}>
            {description}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderColor: "gray",
            borderWidth: 1,
            width: 60,
            height: 25,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 12 }}>
            Add{" "}
            <Text style={{ color: "orange", fontSize: 15, fontWeight: "bold" }}>
              +
            </Text>
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: "auto",
    width: cardWidth,
    borderRadius: borderRadius,
    overflow: "hidden",
    marginVertical: space,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "red",
  },
  imageContainer: (imageWidth, imageHeight) => ({
    width: imageWidth,
    height: imageHeight,
    overflow: "hidden",
    alignItems: "center",
    padding: 5,
  }),
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 4,
  },
  description: (descriptionWidth) => ({
    height: "auto",
    width: descriptionWidth,
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  }),
  textContainer: {
    height: "auto",
    width: "60%",
    // backgroundColor: "red",
  },
  title: {
    fontSize: textSize,
    color: "black",
  },

  descriptionText: {
    fontSize: descriptionSize,
    // fontWeight: "bold",
    // color: "grey",
    // color: "#D3D3D3",
  },
  button: {
    borderColor: "black",
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius,
    width: "20%",
  },
});
export default Card;
