import React from "react";
import { View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
export default function Line() {
  return (
    <View style={{ flexDirection: "row" }}>
      {[...Array(25)].map(() => (
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "black",
            width: RFValue(3),
            height: RFValue(1),
            margin: 1,
          }}
        ></View>
      ))}
    </View>
  );
}
