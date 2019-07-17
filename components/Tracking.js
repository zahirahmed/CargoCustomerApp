import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
  ToolbarAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

var { height, width } = Dimensions.get("screen");

export default class HistoryDetail extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../images/house.png")}
        style={[styles.icon, { tintColor: "white" }]}
      />
    )
  };
  constructor(props) {
    super(props);
    this.state = { showDetail: true };
  }

  toggleDetail = () => {
    console.log("HERE");
    this.setState({ showDetail: !this.state.showDetail });
  };

  render() {
    const { showDetail } = this.state;
    console.log(showDetail);
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
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
              backgroundColor: "#19a0d4",
              elevation: 4,
              flexDirection: "row"
            }}
            navIcon={require("../images/left-arrow.png")}
            onIconClicked={() => this.props.navigation.goBack()}
            titleColor="white"
            title="Tracking"
          >
            {/* <View style={styles.headerContainer}>
                                    <View style={styles.headerContainerInside}>
                                        <Text 
                                            style={styles.headerTitle}>
                                            Home
                                        </Text>
                                        
                                         <Image 
                                            style={styles.notiImg}
                                            source={require('../images/house.png')}>

                                         </Image>

                                    </View>
                                    
                                </View>
                                  */}
          </ToolbarAndroid>

          <View
            style={{
              flex: 1,
              flexDirection: "column"
            }}
          >
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ flex: 1 }}
              region={{
                latitude: 23.0231,
                longitude: 72.5068,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
              showsUserLocation={true}
            />

            <View style={styles.bottomSheet}>
              <View style={styles.driverDetailContainer}>
                <View style={styles.arrowIconContainer}>
                  <TouchableWithoutFeedback onPress={this.toggleDetail}>
                    <Image
                      style={styles.arrowIcon}
                      source={require("../images/circle-arrow.png")}
                    />
                  </TouchableWithoutFeedback>
                </View>
                <View style={styles.driverDetailLeftContainer}>
                  <Image
                    style={styles.driverProfilePic}
                    source={require("../images/profile-pic.png")}
                  />
                  <View style={styles.driverDetail}>
                    <Text style={styles.driverName}>{`Steven Myers`}</Text>
                    <Text style={styles.phoneNumber}>{`909090132923`}</Text>
                  </View>
                </View>
                <View style={styles.contactDetails}>
                  <Text style={styles.orderId}>{`Order Id :#2323232`}</Text>
                  <Image
                    style={styles.phoneImage}
                    source={require("../images/call-answer.png")}
                  />
                </View>
              </View>
              {!!showDetail && (
                <View style={styles.topDetailContainer}>
                  <View style={styles.topContainer}>
                    <View style={styles.addressesContainer}>
                      <View style={styles.addressContainer}>
                        <Text
                          style={styles.addressHeaderText}
                        >{`PICK UP`}</Text>
                        <Text style={styles.addressText}>{`Sender Name`}</Text>
                        <Text
                          style={styles.addressText}
                        >{`935 Ridgewood St. Picataway St. Picataway, NJ 08854`}</Text>
                        <Text style={styles.addressText}>{`9090909090`}</Text>
                      </View>
                      <View style={styles.addressContainer}>
                        <Text
                          style={styles.addressHeaderText}
                        >{`DROP OFF`}</Text>
                        <Text
                          style={styles.addressText}
                        >{`Reciever Name`}</Text>
                        <Text
                          style={styles.addressText}
                        >{`54 Fermont St. Picataway St. Picataway, MN 08854`}</Text>
                        <Text style={styles.addressText}>{`9090909091`}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.basicDetailContainer}>
                    <View style={styles.basicDetail}>
                      <Text style={styles.basicDetailLabel}>{`Date`}</Text>
                      <Text
                        style={styles.basicDetailValue}
                      >{`12/02/2019`}</Text>
                    </View>
                    <View style={styles.basicDetail}>
                      <Text style={styles.basicDetailLabel}>{`Time`}</Text>
                      <Text style={styles.basicDetailValue}>{`10:45 AM`}</Text>
                    </View>
                    <View style={styles.basicDetail}>
                      <Text style={styles.basicDetailLabel}>{`Status`}</Text>
                      <Text style={styles.statusText}>{`On Way`}</Text>
                    </View>
                    <Image
                      source={require("../images/qrcode.png")}
                      resizeMode={"contain"}
                      style={[styles.basicDetail, { width: 64, height: 64 }]}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  },
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
    width: "100%"
  },
  bottomSheet: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    shadowRadius: 8,
    shadowOpacity: 1,
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  driverDetailContainer: {
    padding: 16,
    backgroundColor: "#19a0d4",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    position: "relative",
    alignItems: "center"
  },
  arrowIconContainer: {
    position: "absolute",
    top: -25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  arrowIcon: {
    width: 25,
    height: 25,
    left: width / 2.25
  },
  driverDetailLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%"
  },
  driverProfilePic: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  driverDetail: {
    flexDirection: "column",
    marginLeft: 16
  },
  driverName: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    color: "white"
  },
  phoneNumber: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "white"
  },
  contactDetails: {
    flexDirection: "column",
    width: "40%"
  },
  orderId: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "white",
    marginBottom: 8
  },
  phoneImage: {
    width: 24,
    height: 24
  },
  topDetailContainer: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 16
  },
  topContainer: {
    flexDirection: "column",
    width: "100%",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f6f6f6",
    marginBottom: 16,
    paddingVertical: 8
  },
  addressesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16
  },
  addressContainer: {
    flexDirection: "column",
    width: "48%"
  },
  addressHeaderText: {
    fontSize: 10,
    fontFamily: "Poppins-Medium",
    color: "gray"
  },
  addressText: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "black"
  },

  statusText: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#59c083"
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
  }
});
