import React, {Component} from 'react';
import {View, Text,Platform,ToolbarAndroid,ImageBackground,Image,Dimensions} from 'react-native';
import EditProfileInside from './EditProfileInside';
import PaymentDetails from './PaymentDetails';
import Password from './Password';
var { height,width}=Dimensions.get('screen')

import {
    createMaterialTopTabNavigator,
    createStackNavigator
  } from 'react-navigation';
  
class ProfileMenu extends Component{
    render() {
     return(
      //whatever you wanted at the top 

      <View> 
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
              elevation: 0,
              flexDirection: "row"
            }}
            navIcon={require("../images/left-arrow.png")}
            onIconClicked={() => this.props.navigation.navigate('MyProfile')}
            titleColor="white"
            title="Edit Profile"
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

            <View style = {{marginTop: 0,width: "100%", height: height/3.5,backgroundColor: "clear",justifyContent: "center", alignItems: "center"}}>
                            <ImageBackground source = {require("../images/profile-bg.jpg")} style = {{height: "100%",width: "100%",justifyContent: "center", alignItems: "center"}}>
                                <Image source = {require("../images/profile.png")} style = {{
                                width: 70,
                                height:70,
                                borderRadius: 70,
                                resizeMode: "contain",
                                }}/>
                                <Text style = {{fontSize: 14,color: "white", fontWeight: "bold",marginTop: 16}}>Lorem Ipsum</Text>
                            </ImageBackground>
                        </View>
            </View>
      )
     }
}

const EditProfile = createStackNavigator (
    {
        EditProfileTabs:{
            screen: createMaterialTopTabNavigator(
                {
                  //Tabs
                  EditProfileInside: {
                    screen: EditProfileInside,
                    navigationOptions: ({ navigation }) => ({
                        title: 'Edit Profile',
                      }),
                  },
                  PaymentDetails: {
                    screen: PaymentDetails,
                    navigationOptions: ({ navigation }) => ({
                        title: 'Payment Details',
                      }),
                  },
                  Password: {
                    screen: Password,
                    navigationOptions: ({ navigation }) => ({
                        title: 'Password',
                      }),
                  }
                },
                {
                  //Settings
                  order: ["EditProfileInside", "PaymentDetails", "Password"],
                  tabBarPosition: 'top',
                  swipeEnabled: true,
                  animationEnabled: true,
                  tabBarOptions: {
                    activeTintColor: '#FFFFFF',
                    inactiveTintColor: '#F8F8F8',
                    style: {
                        backgroundColor: '#19a0d4',
                      },
                    labelStyle: {
                      textAlign: 'center',
                      fontSize: 12
                    },
                    indicatorStyle: {
                      borderBottomColor: '#ffffff',
                      borderBottomWidth: 2,
                    },
                  },
                }
              ),

            navigationOptions: ({navigation}) => ({
                header: <ProfileMenu navigation={navigation}/>,
            })
    }
})

const EditProfileTabs = createMaterialTopTabNavigator(
    {
      //Tabs
      EditProfileInside: {
        screen: EditProfileInside
      },
      PaymentDetails: {
        screen: PaymentDetails
      },
      Password: {
        screen: Password
      }
    },
    {
      //Settings
      order: ["EditProfileInside", "PaymentDetails", "Password"],
      tabBarPosition: 'top',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: 'clear',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#ffffff',
          borderBottomWidth: 2,
        },
      },
    }
  );
  export default EditProfile;
