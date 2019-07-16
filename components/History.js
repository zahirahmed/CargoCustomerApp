import React, { Component } from "react";
import {
  TouchableOpacity,
  Alert,
  FlatList,
  Platform,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  ToolbarAndroid,
  Dimensions
} from "react-native";
import { List, ListItem, Card } from "react-native-elements";
var { height, width } = Dimensions.get("screen");

const list = [
  {
    senderName: 'John',
    receiverName: 'Steven',
    address: "935 Ridgewood St. Picataway St. Picataway, NJ 08854",
    receiver: "185 Fermont St. Picataway St. Picataway, MN 08854",
    phone: "9090909090",
    receiverphone: "9090909191",
    driver: "Steven Myers",
    status: "Pickup"
  },
  {
    senderName: 'Steven',
    receiverName: 'John',
    address: "54 Fermont St. Picataway St. Picataway, MN 08854",
    receiver: "12 Fermont St. Picataway St. Picataway, MN 08854",
    phone: "9090909091",
    receiverphone: "9098909191",
    driver: "Steven Myers",
    status: "On Way"
  }
];
export default class History extends Component {
  static navigationOptions = {
    drawerLabel: "History",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../images/history.png")}
        style={[styles.icon, { tintColor: "white" }]}
      />
    )
  };

  renderRow = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("HistoryDetail");
        }}>
        <Card containerStyle={{ padding: 2 , marginBottom: 10}}>
          <View style={{ backgroundColor: "white", padding: 5 }}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "clear",
                width: "100%"
              }}
            >
              <Text
                style={{ fontSize: 12, color: "gray", fontWeight: "normal" }}
              >
                PICKUP
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                  fontWeight: "normal",
                  position: "absolute",
                  right: 0,
                  maxWidth: width / 2,
                  maxHeight: 50
                }}
              >
                DROP OFF
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "clear",
                width: "100%"
              }}
            >
              <Text style={{ fontSize: 12, color: "black" }}>{item.senderName}</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "black",
                  position: "absolute",
                  right: 0,
                  maxWidth: width / 2,
                  maxHeight: 50
                }}
              >
                {item.receiverName}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "clear"
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "black",
                  width: "50%",
                  marginRight: 5
                }}
              >
                {item.address}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "black",
                  width: "50%",
                  alignSelf: "flex-end",
                  justifyContent: "flex-end",
                  alignContent: "flex-end",
                  textAlign: "right"
                }}
              >
                {item.receiver}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "clear"
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "black",
                  width: "50%",
                  marginRight: 5
                }}
              >
                {item.phone}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "black",
                  width: "50%",
                  alignSelf: "flex-end",
                  justifyContent: "flex-end",
                  alignContent: "flex-end",
                  textAlign: "right"
                }}
              >
                {item.receiverphone}
              </Text>
            </View>

            <View
              style={{
                margin: 5,
                flex: 1,
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../images/steering-wheel-gray.png")}
                style={[styles.icon, { margin: 5, width: 20, height: 20 }]}
              />
              <Text
                style={{
                  margin: 5,
                  fontSize: 12,
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                {item.driver}
              </Text>
              <Text style={{ margin: 5, fontSize: 12, color: "gray" }}>
                Status
              </Text>
              <Text
                style={{
                  margin: 5,
                  fontSize: 12,
                  color: "black",
                  color: "#117EB6"
                }}
              >
                {item.status}
              </Text>
            </View>

            <View style={styles.lineStyle} />

            <View style={styles.basicDetailContainer}>
                <View style={styles.basicDetail}>
                  <Text style={styles.basicDetailLabel}>{`Date`}</Text>
                  <Text style={styles.basicDetailValue}>{`12/02/2019`}</Text>
                </View>
                <View style={styles.basicDetail}>
                  <Text style={styles.basicDetailLabel}>{`Time`}</Text>
                  <Text style={styles.basicDetailValue}>{`10:45 AM`}</Text>
                </View>
                <View style={styles.basicDetail}>
                  <Text
                    style={styles.basicDetailLabel}
                  >{`Saved Emission`}</Text>
                  <Text style={styles.basicDetailValue}>{`113g/km`}</Text>
                </View>
                <Image
                  source={require("../images/qrcode.png")}
                  resizeMode={"contain"}
                  style={[styles.basicDetail, { width: 64, height: 64 }]}
                />
              </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };
  handleClick = () => {
    // this.props.navigation.navigate('ForgotPassword');
    alert("pressed!");
  };

  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
      >
        {Platform.OS === "android" && Platform.Version >= 20 ? (
          <View
            style={{
              height: 24,
              backgroundColor: "#19a0d4"
            }}
          />
        ) : null}

        <ToolbarAndroid
          style={{
            height: 56,
            width: "100%",
            backgroundColor: "#19a0d4",
            elevation: 4
          }}
          navIcon={require("../images/menu-icon.png")}
          onIconClicked={() => this.props.navigation.openDrawer()}
          titleColor="white"
          title="History"
        />
        <FlatList
          data={list}
          renderItem={this.renderRow}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  },
  lineStyle: {
    flex: 1,

    alignItems: "stretch",
    borderWidth: 0.5,
    borderColor: "#D3D3D3",
    alignSelf: "stretch",
    marginTop: 10,
    marginBottom: 20
  },
  basicDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 24
  },
  basicDetail: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1
  },
  basicDetailLabel: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "gray"
  },
  basicDetailValue: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "black"
  },
});
