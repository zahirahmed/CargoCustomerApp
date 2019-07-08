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
  TextInput
} from 'react-native'
import {COLOR_DARK_BLUE, COLOR_LIGHT_BLUE} from '../Colors/Colors'

var {height, width} = Dimensions.get('screen')

export default class Login extends Component {


    render(){
        return(
            
            <ImageBackground 
                source={require('../images/splashbg.jpg')} 
                style={styles.backgroundImage}>
                
                <Image 
                    style={styles.logo}
                    source={require('../images/logo.png')}>

                </Image>

                <Text style={styles.subText}>
                    Welcome Back,
                </Text>
                <Text style={styles.txtContinue}>
                    Sign-in to continue
                </Text>

                <View style={styles.edbtnContainer}>
                    <View style={styles.edContainer}>
                        <TextInput 
                            keyboardType = 'phone-pad'
                            style={styles.edMobile}
                            placeholder='Mobile Number'>

                        </TextInput>

                        <Text style={styles.nextStyle}>
                            NEXT
                        </Text>

                    </View>
                    
                </View>

                <Text style={{marginTop: 20, color: 'white', fontWeight: 'bold'}}>
                    Don't have an Account?  SIGNUP
                </Text>

            </ImageBackground>
            
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
         // or 'stretch'
    },
    logo: {
        resizeMode: 'contain',
        height:width/6,
        marginTop: height/5
    },
    subText: {
        fontWeight : 'bold',
        marginTop: 60,
        fontSize: 30,
        color: 'white',
        fontFamily: 'Poppins-Regular',
    },
    txtContinue: {
        marginTop: 5,
        fontSize: 22,
        color: 'white',
        fontFamily: 'Poppins-Medium',
    },
    edbtnContainer: {
        backgroundColor: 'white',
        borderRadius: 40,
        margin: 20,
        marginTop: 40,
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
        fontWeight : 'bold'
    },
    nextStyle: {
        backgroundColor: '#009fd6',
        borderRadius: 30,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15
    }
});