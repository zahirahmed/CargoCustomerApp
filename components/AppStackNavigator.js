import Splash from './Splash';
import Login from './Login';
import SignInScreen from './SignInScreen';
import ForgotPassword from './ForgotPassword';
import OTPScreen from './OTPScreen';
import ChangePassword from './ChangePassword';
import SignUp from './SignUp';
import HomeScreen from './HomeScreen';
import EditProfile from './EditProfile';
import PaymentDetails from './PaymentDetails';
import Password from './Password';
import MyProfile from './MyProfile';
import History from './History';
import React, {Component} from 'react';
import {SafeAreaView,View,Image,Text,ScrollView,TouchableOpacity} from 'react-native';

import {StackNavigator, createDrawerNavigator, TabNavigator, DrawerItems} from 'react-navigation';

// Main Screens for Drawer Navigator
export const MainStack = StackNavigator({
    
    HomeScreen: {
      screen: HomeScreen,
      
    },
  
    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        title: 'MyProfile'
      }
    },
  
    History: {
      screen: History,
      navigationOptions: {
        title: 'History'
      }
    }
    
  }, {
    //Settings
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: true,
    }
});

  
const NavigationDrawer = createDrawerNavigator({
    //Screens
    
    HomeScreen: {
        screen: HomeScreen,
        
    },
    
    MyProfile: {
        screen: MyProfile,
        
    },
    
    History: {
        screen: History,
        
    }
    
}, {
    drawerWidth: 270,
    drawerBackgroundColor: '#117eb6',
    
    contentOptions: {
        
        labelStyle: {
            fontFamily: 'Poppins-Regular',
            color: 'white',
            fontSize: 16
          },
        
    },
    
    contentComponent: (props) => (
        <SafeAreaView style={{flex:1}}>
            <View style={{flexDirection:'row',height: 180,alignItems: 'center',marginLeft:20}}>
    
                <Image
                    source={require('../images/profile-pic.png')}
                    style={{height: 70, width: 70, cornerRadius: 50}}>
                    
                </Image>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize: 20,color: 'white', fontFamily:'Poppins-Medium'}}>Username</Text>
                    <Text style={{fontSize: 15,color: 'white', fontFamily:'Poppins-Regular'}}>id: CUST001</Text>
                </View>

            </View>
          <ScrollView>
            <DrawerItems {...props} />
            <TouchableOpacity 
                onPress={() =>  {
                    
                    alert('Logout');
                }}>
                <View style={{flexDirection: 'row', marginTop:12}}>

                    <Image
                        source={require('../images/exit.png')}
                        style={{tintColor:'lightgray',height: 22, width: 22,marginLeft:18,marginRight:28}}>
                        
                    </Image>

                    <Text 
                        
                        style={{color: 'white',fontSize: 16, fontWeight: 'bold'}}                >
                                        Logout
                    </Text>
                </View>
                
            </TouchableOpacity>
            
          </ScrollView>
        </SafeAreaView>
       )
})

const AppNavigator = StackNavigator({
    //Screens
    Splash: {
        screen : Splash,
    },
    SignInScreen: {
        screen: SignInScreen,
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

}, {
    //Settings
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
})

const TabsNavigator = TabNavigator({
    //Tabs
    EditProfile: {
        screen : EditProfile
    },
    PaymentDetails: {
        screen: PaymentDetails
    },  
    Password: {
        screen: Password
    },
    
}, {
    //Settings
    order: ['EditProfile','PaymentDetails','Password'],
    animationEnabled: true
})

export default AppNavigator;