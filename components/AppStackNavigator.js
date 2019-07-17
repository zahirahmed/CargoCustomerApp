import Splash from "./Splash";
import Login from "./Login";
import SignInScreen from "./SignInScreen";
import ForgotPassword from "./ForgotPassword";
import OTPScreen from "./OTPScreen";
import ChangePassword from "./ChangePassword";
import SignUp from "./SignUp";
import HomeScreen from "./HomeScreen";
import HomeDestination from "./HomeDestination";
import HomePackage from "./HomePackage";
import HomeVehicle from "./HomeVehicle";
import EditProfile from './EditProfile';
import MyProfile from "./MyProfile";
import History from "./History";
import HistoryDetail from "./HistoryDetail";
import Notifications from "./Notifications";
import NotificationDetails from "./NotificationDetails";
import Tracking from "./Tracking";
import QRCode from './QRCode';
import ReviewDriver from './ReviewDriver';
import ProfileMenu from './EditProfile';
import React, { Component } from "react";
import {Alert} from 'react-native';

import {
  SafeAreaView,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";

import {
  createStackNavigator,
  createDrawerNavigator,
  TabNavigator,
  createMaterialTopTabNavigator,
  DrawerItems,
  NavigationActions,
  StackActions
} from "react-navigation";

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'SignInScreen' })],
});

// Main Screens for Drawer Navigator
export const MainStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },

    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        title: "MyProfile"
      }
    },

    History: {
      screen: History,
      navigationOptions: {
        title: "History"
      }
    }
  },
  {
    //Settings
    initialRouteName: "HomeScreen",
    headerMode: "none",
    navigationOptions: {
      headerVisible: true
    }
  }
);

const NavigationDrawer = createDrawerNavigator(
  {
    //Screens

    HomeScreen: {
      screen: HomeScreen
    },

    MyProfile: {
      screen: MyProfile
    },

    History: {
      screen: History
    },
    QRCode: {
        screen: QRCode
    },
    ReviewDriver: {
        screen: ReviewDriver
    }
  },
  {
    drawerWidth: 270,
    drawerBackgroundColor: "#117eb6",

    contentOptions: {
      labelStyle: {
        fontFamily: "Poppins-Regular",
        color: "white",
        fontSize: 16
      }
    },

    contentComponent: props => (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            height: 180,
            alignItems: "center",
            marginLeft: 20
          }}
        >
          <Image
            source={require("../images/profile-pic.png")}
            style={{ height: 70, width: 70, cornerRadius: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontFamily: "Poppins-Medium"
              }}
            >
              Username
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "white",
                fontFamily: "Poppins-Regular"
              }}
            >
              id: CUST001
            </Text>
          </View>
        </View>
        <ScrollView>
          <DrawerItems {...props} />
          <TouchableOpacity
            style={{flex:1}}
            onPress={() => {
              //alert("Logout");
              Alert.alert(
                'Logout',
                'Are you sure you want to logout?',
                [
                  {text: 'No', onPress: () => console.log('Cancel Pressed!')},
                  {text: 'Yes', onPress:() => {
                    console.log('yes Pressed!')                           
                    //this.props.navigation.navigate('SignInScreen');

                }},
                ],
                { cancelable: false }
              )
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 12 }}>
              <Image
                source={require("../images/exit.png")}
                style={{
                  tintColor: "lightgray",
                  height: 22,
                  width: 22,
                  marginLeft: 18,
                  marginRight: 28
                }}
              />

              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
  }
);

const AppNavigator = createStackNavigator(
  {
    //Screens
    Splash: {
      screen: Splash
    },
    SignInScreen: {
      screen: SignInScreen
    },
    Login: {
      screen: Login
    },
    ForgotPassword: {
      screen: ForgotPassword
    },
    OTPScreen: {
      screen: OTPScreen
    },
    ChangePassword: {
      screen: ChangePassword
    },
    SignUp: {
      screen: SignUp
    },
    NavigationDrawer: {
      screen: NavigationDrawer,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    HomeDestination: {
      screen: HomeDestination
    },
    HomePackage: {
      screen: HomePackage
    },
    HomeVehicle: {
      screen: HomeVehicle
    },
    HistoryDetail: {
      screen: HistoryDetail
    },
    Notifications: {
      screen: Notifications
    },
    NotificationDetails: {
      screen: NotificationDetails
    },
    Tracking: {
      screen: Tracking
    },
    EditProfile: {
        screen: EditProfile
    },
    ProfileMenu: {
        screen: ProfileMenu
    }
    
  },
  {
    //Settings
    initialRouteName: "Splash",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);


export default AppNavigator;
