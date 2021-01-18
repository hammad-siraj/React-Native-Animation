// import React, { useRef, useState } from "react";

// import {
//   StyleSheet,
//   View,
//   FlatList,
//   Animated,
//   Text,
//   Pressable,
//   Dimensions,
//   Modal,
//   SafeAreaView,
// } from "react-native";
// import { data, wholeData } from "./DATA.js";
// import Card from "./components/card";

// const { height, width } = Dimensions.get("window");
// export default function App() {
//   const DATA = [
//     { key: "Best in Thali" },
//     { key: "Recommended" },
//     { key: "Match Day Combos" },
//     { key: "Thali" },
//     { key: "Main Course" },
//     { key: "Breads" },
//     { key: "Rice and Biryani" },
//     { key: "Starters" },
//   ];
//   const toHeight = 320;
//   const toWidth = 200;
//   const height = useRef(new Animated.Value(0)).current;
//   const width = useRef(new Animated.Value(0)).current;
//   const opacity = useRef(new Animated.Value(0)).current;
//   const borderTopLeftRadius = useRef(new Animated.Value(toHeight)).current;
//   const [toggle, setToggle] = useState(false);
//   const genTime = 500;
//   const animate = () => {
//     if (!toggle) {
//       setToggle(true);
//       Animated.parallel([
//         Animated.timing(height, {
//           toValue: toHeight,
//           duration: genTime,
//           useNativeDriver: false,
//         }),
//         Animated.timing(width, {
//           toValue: toWidth,
//           duration: genTime,
//           useNativeDriver: false,
//         }),
//         Animated.timing(borderTopLeftRadius, {
//           toValue: 15,
//           duration: genTime,
//           useNativeDriver: false,
//         }),
//         Animated.timing(opacity, {
//           toValue: 1,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     } else {
//       Animated.parallel([
//         Animated.timing(opacity, {
//           toValue: 0,
//           duration: genTime,
//           useNativeDriver: true,
//         }),
//         Animated.timing(height, {
//           toValue: 0,
//           duration: genTime,
//           useNativeDriver: false,
//         }),
//         Animated.timing(width, {
//           toValue: 0,
//           duration: genTime,
//           useNativeDriver: false,
//         }),
//         Animated.timing(borderTopLeftRadius, {
//           toValue: toHeight,
//           duration: genTime,
//           useNativeDriver: false,
//         }),
//       ]).start(() => {
//         setToggle(false);
//       });
//     }
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={wholeData}
//         keyExtractor={(item) => item.key}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           alignItems: "center",
//         }}
//         renderItem={(dt) => {
//           return (
//             <View>
//               <Text>{dt.item.name}</Text>
//               <FlatList
//                 data={data}
//                 contentContainerStyle={{
//                   alignItems: "center",
//                 }}
//                 keyExtractor={(item) => item.key}
//                 showsVerticalScrollIndicator={false}
//                 renderItem={({ item, index }) => {
//                   return (
//                     // <View style={{ backgroundColor: "red" }}>
//                     <Card
//                       image={item.image}
//                       title={item.title}
//                       description={item.description}
//                     ></Card>
//                     // </View>
//                   );
//                 }}
//               />
//             </View>
//           );
//         }}
//       />

//       {toggle && <Pressable style={styles.bgDrop(toggle)} onPress={animate} />}
//       <Pressable style={styles.bottomButton} onPress={animate}>
//         <Text style={styles.text}>{toggle ? "Close" : "Menu"}</Text>
//       </Pressable>
//       <Animated.View
//         style={styles.bottomFlip(height, width, borderTopLeftRadius)}
//       >
//         {DATA.map((item, index) => {
//           return (
//             <Animated.Text style={styles.menuText(opacity)} key={index}>
//               {item.key}
//             </Animated.Text>
//           );
//         })}
//       </Animated.View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: (toggle) => ({
//     flex: 1,
//     backgroundColor: toggle ? "rgba(0, 0, 0, 0.6)" : "white",
//     alignItems: "center",
//     justifyContent: "center",
//   }),
//   bgDrop: (toggle) => ({
//     height: height,
//     width: width,
//     backgroundColor: toggle ? "rgba(0, 0, 0, 0.6)" : "white",
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     top: 0,
//     opacity: toggle ? 1 : 0,
//     alignItems: "center",
//     justifyContent: "center",
//   }),
//   bottomButton: {
//     position: "absolute",
//     bottom: 20,
//     right: 20,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "black",
//   },
//   text: {
//     color: "white",
//     fontSize: 24,
//   },
//   menuText: (opacity) => ({
//     color: "black",
//     fontSize: 24,
//     letterSpacing: 1,
//     marginHorizontal: 10,
//     opacity: opacity,
//   }),
//   bottomFlip: (height, width, borderTopLeftRadius) => ({
//     position: "absolute",
//     bottom: 80,
//     right: 20,
//     borderTopLeftRadius: borderTopLeftRadius,
//     height: height,
//     width: width,
//     borderRadius: 10,
//     alignItems: "flex-start",
//     backgroundColor: "white",
//     overflow: "hidden",
//   }),
// });
// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, { useEffect, useState, Component } from "react";
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  FlatList,
  Animated,
  StatusBar,
  RefreshControl,
} from "react-native";
import { images } from "./DATA";
import Card from "./components/card";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { Rating, AirbnbRating } from "react-native-ratings";
import CustomRating from "./components/customStar";
import BottomSheet from "reanimated-bottom-sheet";
const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header_1}
      >
        {!item.isExpanded ? (
          <AntDesign
            name="caretright"
            size={24}
            color="orange"
            style={{ padding: 5 }}
          />
        ) : (
          <AntDesign
            name="caretdown"
            size={24}
            color="orange"
            style={{ padding: 5 }}
          />
        )}
        <Text style={styles.headerText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        <FlatList
          data={item.subcategory}
          contentContainerStyle={{
            alignItems: "center",
          }}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
              ></Card>
            );
          }}
        />
      </View>
    </View>
  );
};

const List = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]["isExpanded"] = !array[index]["isExpanded"];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
          : (array[placeindex]["isExpanded"] = false)
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", padding: 10 }}>
          {/* <Text style={styles.titleText}>Expandable List View</Text> */}
          {/* <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {multiSelect
                ? "Enable Single \n Expand"
                : "Enalble Multiple \n Expand"}
            </Text>
          </TouchableOpacity> */}
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   titleText: {
//     flex: 1,
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   header: {
//     // backgroundColor: "#F5FCFF",
//     padding: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: "500",
//   },
//   separator: {
//     height: 0.5,
//     backgroundColor: "#808080",
//     width: "95%",
//     marginLeft: 16,
//     marginRight: 16,
//   },
//   text: {
//     fontSize: 16,
//     color: "#606070",
//     padding: 10,
//   },
//   content: {
//     paddingLeft: 10,
//     paddingRight: 10,
//     backgroundColor: "#fff",
//   },
// });

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: "Recommended",
    subcategory: [
      {
        key: 0,
        image: images[0].uri,
        title: images[0].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
      {
        key: 0,
        image: images[0].uri,
        title: images[0].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
    ],
  },
  {
    isExpanded: false,
    category_name: "Pasta Pizza Party",
    subcategory: [
      {
        key: 0,
        image: images[1].uri,
        title: images[1].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
      {
        key: 0,
        image: images[1].uri,
        title: images[1].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
    ],
  },
  {
    isExpanded: false,
    category_name: "Veg Pizza",
    subcategory: [
      {
        key: 0,
        image: images[2].uri,
        title: images[2].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
      {
        key: 0,
        image: images[3].uri,
        title: images[3].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
    ],
  },
  {
    isExpanded: false,
    category_name: "Meals & Combos",
    subcategory: [
      {
        key: 0,
        image: images[2].uri,
        title: images[2].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
      {
        key: 0,
        image: images[1].uri,
        title: images[1].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
    ],
  },
];

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.bottomSheet = React.createRef();

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
      ),
      refreshing: false,
    };
  }

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp",
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp",
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp",
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: "clamp",
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: "clamp",
    });
    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          // barStyle="light-content"
          // backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          <View style={{ height: RFValue(150), padding: RFValue(10) }}>
            <View style={{ flexDirection: "row" }}>
              <CustomRating />
            </View>
            <Text style={{ fontSize: RFValue(25), marginBottom: RFValue(8) }}>
              Domino's Pizza
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                color: "gray",
                margin: RFValue(4),
              }}
            >
              Quick Bites - Pizza, Fast Food , Pasta
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                color: "gray",
                margin: RFValue(4),
              }}
            >
              Kasmir Gate, New Delhi{" "}
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                color: "orange",
                margin: RFValue(4),
              }}
            >
              Closed <Text style={{ color: "gray" }}>-opens at 11 am</Text>
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: "gray",
                  margin: RFValue(4),
                }}
              >
                Cost for one-$200(approx.)
              </Text>
              <Feather name="phone-call" size={24} color="orange" />
            </View>
          </View>
          {/* {this._renderScrollViewContent()} */}
          <List />
          {/* <List />
          <List /> */}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={{ uri: images[0].uri }}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              // transform: [
              //   { scale: titleScale },
              //   { translateY: titleTranslate },
              // ],
            },
          ]}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>
            Domino's Pizza
          </Text>
        </Animated.View>
        <View
          style={{
            backgroundColor: "white",
            height: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            // onPress={() => this.bottomSheet.current.snapTo(0)}
            style={{
              backgroundColor: "orange",
              height: 50,
              width: RFValue(310),
              borderRadius: 5,
              marginBottom: RFValue(10),
              justifyContent: "space-between",
              alignItems: "center",
              padding: RFValue(5),
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 15 }}>6 items</Text>
              <Text style={{ color: "white", fontSize: 15 }}>
                $1064 plux taxes
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>View Cart</Text>
              <AntDesign name="caretright" size={15} color="white" />
            </View>
          </TouchableOpacity>
          {/* <BottomSheet
            ref={this.bottomSheet}
            snapPoints={[450, 300, 0]}
            borderRadius={10}
            // renderContent={renderContent}
            renderContent={() => <Text>test</Text>}
          /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
  },
  header_1: {
    // backgroundColor: "#F5FCFF",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: "#606070",
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },

  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover",
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
});
