import React , {Component} from 'react'
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView
} from 'react-native'
import {COLOR_DARK_BLUE, COLOR_LIGHT_BLUE} from '../Colors/Colors'
import PasswordInputText from 'react-native-hide-show-password-input';

import FloatingLabel from 'react-native-floating-labels'

var {height, width} = Dimensions.get('screen')

var radio_props = [
    {label: 'Customer', value: 0 },
    {label: 'Vehivle Owner', value: 1 }
  ];

export default class ForgotPassword extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/line-menu-white.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
    
    render(){
        return(
            <SafeAreaView>
                <ScrollView >
                    <View>
                        <StatusBar  
                                backgroundColor = "#117eb6"  
                                barStyle = "light-content"   
                                hidden = {false}    
                                translucent = {true}  />  

                            <Text
                                style={{
                                    marginTop: 50, 
                                    color: 'black', 
                                    fontFamily: 'Poppins-Regular',
                                    }}>
                                Back to <Text style={{textDecorationLine:'underline',fontWeight: 'bold',color:'#009fd6'}}>SIGNIN</Text>
                            </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

}
