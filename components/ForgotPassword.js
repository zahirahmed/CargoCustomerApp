import React , {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  Dimensions,
  Animated,
  TextInput,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
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

    state = {
        password: '',
    };
    
    render(){
        const { password } = this.state;
        return(
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View 
                style={styles.backgroundImage}>
                
                <StatusBar  
                    backgroundColor = "#117eb6"  
                    barStyle = "light-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  

                <Image 
                    style={styles.logo}
                    source={require('../images/logo.png')}>

                </Image>

                <Text style={styles.txtContinue}>
                    Please enter your Mobile Number, We will send a 4 digit verification code to change your password.
                </Text>

                <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    disableFullscreenUI={true}
                    keyboardType="phone-pad"
                >Mobile Number</FloatingLabel>

                <View 
                    style={styles.continueCon}>       
                    <Text 
                        style={styles.continueStyle}
                        onPress={() => this.props.navigation.navigate('OTPScreen')}>
                        CONTINUE
                    </Text>
                </View>

                    <Text
                        style={{
                            marginTop: 50, 
                            color: 'black', 
                            fontFamily: 'Poppins-Regular',
                            }}
                            onPress={() => this.props.navigation.goBack()}>
                        Back to <Text style={{textDecorationLine:'underline',fontWeight: 'bold',color:'#009fd6'}}>SIGNIN</Text>
                    </Text>
            </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        padding: 40,
         // or 'stretch'
    },
    logo: {
        tintColor: 'black',
        resizeMode: 'contain',
        height:width/6,
        marginTop: height/10
    },
    subText: {
        fontWeight : 'bold',
        marginTop: 60,
        fontSize: 30,
        color: 'white',
        fontFamily: 'Poppins-Regular',
    },
    txtContinue: {
        marginTop: 60,
        fontSize: 16,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        textAlign:'center'
    },
    edbtnContainer: {
        backgroundColor: 'white',
        borderRadius: 40,
        alignContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    edContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-end',
        alignItems: 'center',
        padding: 8
    },
    edMobile: {
        flex: 1,
        fontSize : 18,
        paddingLeft: 10,
        fontWeight : 'bold',
        fontFamily: 'Poppins-Regular',
    },
    nextStyle: {
        backgroundColor: '#009fd6',
        borderRadius: 30,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        fontFamily: 'Poppins-Regular',
    },
    registerDialog: {
        alignItems: 'center',
    },
    registerNew: {
        fontWeight : 'bold',
        fontSize: 20,
        color: 'black',
        fontFamily: 'Poppins-Medium',
    },
    registerSubText: {
        fontSize: 15,
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
    continueCon: {
        marginTop: 60,
        justifyContent: 'center', 
        padding: 15, 
        borderRadius : 30, 
        flexDirection: 'row', 
        backgroundColor: '#009fd6'
    },
    contentContainer: {
        paddingVertical: 10
    },
    continueStyle: {
        flex:1,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
    con: {
        flex: 1,
        fontSize : 18,
        paddingLeft: 10,
        fontWeight : 'bold',
        fontFamily: 'Poppins-Regular',
    },
    labelInput: {
        color: 'gray',
    },
    formInput: {    
        borderBottomWidth: 1, 
        borderColor: 'gray', 
        alignSelf:'stretch',
        marginTop:20
    },
    input: {
        borderWidth: 0
    }
});