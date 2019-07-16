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
  TouchableOpacity
} from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

var { height, width } = Dimensions.get("screen");

export default class QRCode extends Component {
  static navigationOptions = {
    drawerLabel: "QR Code",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../images/house.png")}
        style={[styles.icon, { tintColor: "white" }]}
      />
    )
  };
 
  onActionSelected = position => {
    if (position === 0) {
      // index of 'Settings'
      this.props.navigation.navigate("Notifications");
    }
  };

  render() {
    return (
      
        <View style={styles.container}>
          {Platform.OS === "android" && Platform.Version >= 20 ? (
            <View
              style={{
                height: 24,
                backgroundColor: "#19a0d4"
              }}
            />
          ) : null}

<View>
          <ToolbarAndroid
            style={{
              height: 56,
              backgroundColor: "#19a0d4",
              elevation: 0,
              flexDirection: "row"
            }}
            navIcon={require("../images/menu-icon.png")}
            onIconClicked={() => this.props.navigation.openDrawer()}
            titleColor="white"
            title="QR Code"
            actions={[
                {
                  title: "Settings",
                  icon: require("../images/notification-bell-black.png"),
                  show: "always"
                }
              ]}
              onActionSelected={this.onActionSelected}
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
          </View>
<ScrollView >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin:30,
              backgroundColor: 'white',
              borderRadius: 15,
              alignItems:'center'
            }}
          >
            
            <View style={styles.bottomSheet}>
            <Image
                  source={require("../images/qrcode.png")}
                  resizeMode={"contain"}
                  style={{ height: width/2.3, marginVertical: 40 }}
                />

              <View style={styles.topContainer}>
                <View style={styles.addressesContainer}>
                  <View style={styles.addressContainer}>
                    <Text style={styles.addressHeaderText}>{`PICK UP`}</Text>
                    <Text style={styles.addressText}>{`Sender Name`}</Text>
                    <Text
                      style={styles.addressText}
                    >{`935 Ridgewood St. Picataway St. Picataway, NJ 08854`}</Text>
                    <Text style={styles.addressText}>{`9090909090`}</Text>
                  </View>
                  <View style={styles.addressContainer}>
                    <Text style={styles.addressHeaderTextRight}>{`DROP OFF`}</Text>
                    <Text style={styles.addressTextRight}>{`Reciever Name`}</Text>
                    <Text
                      style={styles.addressTextRight}
                    >{`54 Fermont St. Picataway St. Picataway, MN 08854`}</Text>
                    <Text style={styles.addressTextRight}>{`9090909091`}</Text>
                  </View>
                </View>
                
              </View>
              
              <View style={styles.detailContainer}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{`Trip Fare`}</Text>
                  <Text style={styles.detailValue}>{`Rs.143.50`}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{`Sub Total`}</Text>
                  <Text style={styles.detailValue}>{`Rs.143.50`}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{`Wait Time`}</Text>
                  <Text style={styles.detailValue}>{`Rs.6.00`}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{`Before Taxes`}</Text>
                  <Text style={styles.detailValue}>{`Rs.143.18`}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{`CGST(2.5%)`}</Text>
                  <Text style={styles.detailValue}>{`Rs.3.58`}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{`SGST/UTGST(2.5%)`}</Text>
                  <Text style={styles.detailValue}>{`Rs.3.58`}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{`Insurance`}</Text>
                  <Text style={styles.detailValue}>{`Rs.3.58`}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{`Collected`}</Text>
                  <Text style={styles.totalText}>{`Rs.150.34`}</Text>
                </View>
              </View>
            </View>
          </View>
          </ScrollView>
        </View>
      
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
    width: "100%",
    backgroundColor: '#19a0d4'
  },
  bottomSheet: {
    flexDirection: "column",
    alignItems: "center",
    shadowRadius: 8,
    shadowOpacity: 1,
    
    width: "100%", 
  },
  topContainer: {
    flexDirection: "column",
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderTopColor: 'gray',
    borderStyle: 'dotted',
    borderTopWidth: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ECECEC'
  },
  addressesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    
  },
  addressContainer: {
    flexDirection: "column",
    width: "48%"
  },
  addressHeaderText: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "gray",
  },
  addressText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "black"
  },
  addressHeaderTextRight: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "gray",
    textAlign: 'right'
  },
  addressTextRight: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "black",
    textAlign: 'right'
  },
  
  detailContainer: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: '#ECECEC',
    paddingVertical: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    width: "100%"
  },
  detailLabel: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "gray"
  },
  detailValue: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "black",
    textAlign: "right"
  },
  totalText: {
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    color: "#1c7db1",
    textAlign: "right"
  }
});
