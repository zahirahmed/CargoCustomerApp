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
  FlatList
} from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import _ from "lodash";
var { height, width } = Dimensions.get("screen");

const notifications = [
  {
    id: 1,
    notificationText: "Lorem Ipsum is simply dummy text of printing",
    date: "12/04/2018 12:30 PM"
  },
  {
    id: 2,
    notificationText: "Lorem Ipsum is simply dummy text of printing",
    date: "12/04/2018 12:30 PM"
  },
  {
    id: 3,
    notificationText: "Lorem Ipsum is simply dummy text of printing",
    date: "12/04/2018 12:30 PM"
  }
];
const NotificationItem = ({ item, onItemClick }) => {
  return (
    <TouchableOpacity style={styles.notificationItem} onPress={onItemClick}>
      <Image
        style={styles.leftContainer}
        source={require("../images/notifications.png")}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.notificationText} numberOfLines={2}>
          {item.notificationText}
        </Text>
        <Text style={styles.notificationDate} numberOfLines={1}>
          {item.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

class Notifications extends Component {
  onItemClick = () => {
    this.props.navigation.navigate("NotificationDetails");
  };
  render() {
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
            title="Notifications"
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

          <View style={styles.listContainer} />
          <View style={styles.header}>
            <Text style={styles.headerText}>{`TODAY`}</Text>
          </View>
          {_.map(notifications, item => {
            return (
              <NotificationItem
                item={item}
                key={item.id}
                onItemClick={this.onItemClick}
              />
            );
          })}
          <View style={styles.header}>
            <Text style={styles.headerText}>{`YESTERDAY`}</Text>
          </View>
          {_.map(notifications, item => {
            return (
              <NotificationItem
                item={item}
                key={item.id}
                onItemClick={this.onItemClick}
              />
            );
          })}
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

    width: "100%"
  },
  header: {
    padding: 8,
    backgroundColor: "#f6f6f6"
  },
  headerText: {
    fontFamily: "Poppins-Medium",
    color: "gray",
    fontSize: 12
  },
  listContainer: {
    width: "100%",

    flexDirection: "column"
  },
  notificationItem: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 8
  },
  leftContainer: {
    width: 48,
    height: 48,
    marginRight: 8
  },
  rightContainer: {
    flexDirection: "column",
    flex: 1,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f6f6f6"
  },
  notificationText: {
    fontFamily: "Poppins-Regular",
    color: "black",
    fontSize: 12,
    marginBottom: 4,
    width: "100%"
  },
  notificationDate: {
    fontFamily: "Poppins-Regular",
    color: "gray",
    fontSize: 12,
    marginBottom: 4,
    width: "100%"
  }
});

export default Notifications;
