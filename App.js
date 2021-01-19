import React, { useEffect, useState, Component } from "react";
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
  LogBox,
  Modal,
  TouchableHighlight,
  Button,
} from "react-native";
import { images } from "./DATA";
import Card from "./components/card";
import { AntDesign, Feather, Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import CustomRating from "./components/customStar";
import Line from "./components/lineComponent";
import RBSheet from "react-native-raw-bottom-sheet";
LogBox.ignoreAllLogs();
const ExpandableComponent = ({ item, onClickFunction }) => {
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

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];

    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
        : (array[placeindex]["isExpanded"] = false)
    );

    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", padding: 10 }}></View>
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

    this.state = {
      openSnapArr: [350, 0],
      closSnapArr: [0],
      isBottomOpen: false,
      scrollY: new Animated.Value(
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
      ),
      refreshing: false,
      isOpenModal: false,
    };
  }

  TimingModal(animation, answer) {
    return (
      <Modal
        // animationType="slide"

        transparent={true}
        visible={true}
        supportedOrientations={["portrait", "landscape"]}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
        }}
      >
        <TouchableOpacity
          onPress={() =>
            this.setState({ isOpenModal: !this.state.isOpenModal })
          }
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "80%",
              height: 80,
              padding: RFValue(5),
            }}
          >
            <Text style={{ fontSize: RFValue(15) }}>Opening Hours</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: RFValue(10),
              }}
            >
              <Text style={{ color: "blue" }}>Mon-Sun</Text>
              <Text>11am - 3am</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  RenderContent() {
    return (
      <View
        style={{
          backgroundColor: "white",
          // padding: 16,
          // height: 450,
          width: "100%",
          height: "100%",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: RFValue(10),
          }}
        >
          <Text style={{ fontSize: RFValue(20) }}>BFF Non Veg Sub Combo</Text>
          <TouchableOpacity onPress={() => this.RBSheet.close()}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ color: "gray", paddingBottom: 10 }}>
            Buy any 2 non veg and get any 2 cookies free
          </Text>
          <View
            style={{ borderColor: "gray", width: "100%", borderWidth: 0.6 }}
          />
        </View>

        <View style={{ marginBottom: RFValue(10) }}>
          <Text style={{ fontSize: 20, paddingBottom: RFValue(10) }}>
            Choose your First Sub
          </Text>
          <Text style={{ color: "gray" }}>Please select any one option</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: RFValue(12), color: "orange" }}>
              Chicken Kofta Sub
            </Text>
            <View
              style={{
                width: RFValue(15),
                height: RFValue(15),
                borderRadius: RFValue(7),
                borderColor: "orange",
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: RFValue(10),
                  height: RFValue(10),
                  backgroundColor: "orange",
                  borderRadius: RFValue(5),
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: RFValue(8),
            }}
          >
            <Text style={{ fontSize: RFValue(12) }}>Chicken Sub</Text>
            <View
              style={{
                width: RFValue(15),
                height: RFValue(15),
                borderRadius: RFValue(7),
                borderColor: "orange",
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <View
                style={{
                  width: RFValue(10),
                  height: RFValue(10),
                  backgroundColor: "orange",
                  borderRadius: RFValue(5),
                }}
              /> */}
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
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
            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CustomRating />
                  <Text style={{ padding: 5, fontWeight: "bold" }}>2.8</Text>
                </View>
                <Text style={{ fontWeight: "500", fontSize: 12 }}>
                  206 DINNING{"   "}
                  <Text style={{ fontWeight: "100", fontSize: 12 }}>
                    REVIEWS
                  </Text>
                </Text>
                <Line />
              </View>
              <View style={{ paddingLeft: "8%" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CustomRating />
                  <Text style={{ padding: 5, fontWeight: "bold" }}>4.3</Text>
                </View>
                <Text style={{ fontWeight: "500", fontSize: 12 }}>
                  3,056 DELIVERY{" "}
                  <Text style={{ fontWeight: "100", fontSize: 12 }}>
                    REVIEWS
                  </Text>
                </Text>
                <Line />
              </View>
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: "orange",
                  margin: RFValue(4),
                }}
              >
                Closed <Text style={{ color: "gray" }}>-opens at 11 am</Text>
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({ isOpenModal: true })}
              >
                <AntDesign name="caretdown" size={12} color="gray" />
              </TouchableOpacity>
            </View>
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
          <List />
          <List />
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
            onPress={() => this.RBSheet.open()}
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
        </View>
        {this.state.isOpenModal && this.TimingModal()}
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={600}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {this.RenderContent()}
        </RBSheet>
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
