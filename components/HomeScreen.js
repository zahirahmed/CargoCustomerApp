import React , {Component} from 'react'
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
  ToolbarAndroid
} from 'react-native'
import {COLOR_DARK_BLUE, COLOR_LIGHT_BLUE} from '../Colors/Colors'
import PasswordInputText from 'react-native-hide-show-password-input';

import FloatingLabel from 'react-native-floating-labels'

var {height, width} = Dimensions.get('screen')

var radio_props = [
    {label: 'Customer', value: 0 },
    {label: 'Vehivle Owner', value: 1 }
  ];

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/house.png')}
            style={[styles.icon, {tintColor: 'white'}]}
          />
        ),
    };
      
    render(){
        return(
            <SafeAreaView>
                <ScrollView >
                    <View>
                        
                            { Platform.OS === 'android' && Platform.Version >= 20 ?
                            <View
                                style={{
                                  height: 24,
                                  backgroundColor: "#117EB6",
                                }}
                            />
                            : null }

                            <ToolbarAndroid
                                style={{
                                  height: 56,
                                  backgroundColor: "#117EB6",
                                  elevation: 4,
                                }}
                                navIcon={require('../images/menu-icon.png')}
                                onIconClicked={() => this.props.navigation.openDrawer()}
                                titleColor="white"
                                title="Home"
                            />
                            
{/* 
                    <View style = {{flexDirection: "row",height: 50,width: "100%",backgroundColor: "#009fd6", alignItems: "center"}}>
                       <Image 
                          source = {require("../images/menu-icon.png")}
                          onPress={() => {this.props.navigation.openDrawer()}}
                          style = {{height: 25, width: 25,margin: 16}}/>

                       <Text style = {{fontSize: 17,color: "white", fontWeight: "700"}}>My Profile</Text>

                       <Image source = {require("../images/menu-icon.png")}
                       style = {{height: 20, width: 20,margin: 16,position: "absolute", right: 0}}/>

                       <Image source = {require("../images/menu-icon.png")}
                       style = {{height: 20, width: 20,margin: 16,position: "absolute",right: 40}}/>
                   </View> */}
                            <Text
                                style={{
                                    marginTop: 10, 
                                    color: 'black', 
                                    fontFamily: 'Poppins-Regular',
                                    }}>
                                Home 
                            </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
  icon: {
      width: 20,
      height: 20,
  }
});
