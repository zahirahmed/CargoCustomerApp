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
  TouchableWithoutFeedback
} from 'react-native'
import {COLOR_DARK_BLUE, COLOR_LIGHT_BLUE} from '../Colors/Colors'
import { Dialog } from 'react-native-simple-dialogs'
import MyDialog from './MyDialog'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import NavigationDrawer from './AppStackNavigator'

var {height, width} = Dimensions.get('screen')

var radio_props = [
    {label: 'Customer', value: 0 },
    {label: 'Vehicle Owner', value: 1 }
  ];

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        dialogVisible: false,
        ldialogVisible: false,
    };
    
    setDialogVisible(visible) {
        this.setState({dialogVisible: visible});
    }


    setLDialogVisible(visible) {
        this.setState({ldialogVisible: visible});
    }

    render(){
        return(
            
            <ImageBackground 
                source={require('../images/splashbg.jpg')} 
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

                        <Text
                            // onPress={ () => {
                            //     this.props.navigation.navigate("HomeScreen")
                            // }} 
                            onPress={() => {

                                this.setLDialogVisible(true);

                            }} 
                            style={styles.nextStyle}>
                            NEXT
                        </Text>

                    </View>
                    
                </View>

                <Dialog
                    
                    visible={this.state.dialogVisible}
                    title=""
                    animationType='fade'
                    backgroundColor='black'
                    onTouchOutside={() => this.setState({dialogVisible: false})} >

                        <View style={styles.registerDialog}>
                        
                            <Text style={styles.registerNew}>
                                Register as new user
                            </Text>
                            <Text style={styles.registerSubText}>
                                Please select your choice {"\n"}for registration. 
                            </Text>

                            <View style={{marginTop: 30}}>
                                <RadioForm
                                    radio_props={radio_props}
                                    initial={0}
                                    formHorizontal={true}
                                    labelHorizontal={true}
                                    buttonColor={'#009fd6'}
                                    borderWidth={0}
                                    buttonInnerColor={'#009fd6'}
                                    buttonOuterColor={'#009fd6'}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    buttonStyle={{borderWidth: 0.5, marginLeft: 20}}
                                    buttonWrapStyle={{marginLeft: 20}}
                                    animation={false}
                                    onPress={(value) => {this.setState({value:value})}}
                                    />
                                    
                            </View>

                        </View>
                    

                        <View 
                            style={styles.continueCon}>
                                 
                                 <Text 
                                    onPress={ () => {

                                        this.setState({dialogVisible: false})

                                        this.props.navigation.navigate("SignUp")
                                    }}
                                    style={styles.continueStyle}>
                                     CONTINUE
                                 </Text>

                        </View>

                </Dialog>

                <Dialog
                    
                    visible={this.state.ldialogVisible}
                    title=""
                    animationType='fade'
                    backgroundColor='black'
                    onTouchOutside={() => this.setState({ldialogVisible: false})} >

                        <View style={styles.registerDialog}>
                        
                            <Text style={styles.registerNew}>
                                Login
                            </Text>
                            <Text style={styles.registerSubText}>
                                Please select your choice {"\n"}for login. 
                            </Text>

                            <View style={{marginTop: 30}}>
                                <RadioForm
                                    radio_props={radio_props}
                                    initial={0}
                                    formHorizontal={true}
                                    labelHorizontal={true}
                                    buttonColor={'#009fd6'}
                                    borderWidth={0}
                                    buttonInnerColor={'#009fd6'}
                                    buttonOuterColor={'#009fd6'}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    buttonStyle={{borderWidth: 0.5, marginLeft: 20}}
                                    buttonWrapStyle={{marginLeft: 20}}
                                    animation={false}
                                    onPress={(value) => {this.setState({value:value})}}
                                    />
                                    
                            </View>

                        </View>
                    

                        <View 
                            style={styles.continueCon}>
                                 
                                 <Text 
                                    onPress={ () => {

                                        this.setState({ldialogVisible: false})

                                        this.props.navigation.navigate("SignInScreen")
        
                                    }}
                                    style={styles.continueStyle}>
                                     CONTINUE
                                 </Text>

                        </View>

                </Dialog>


                    <Text
                        onPress={() => {
                            this.setDialogVisible(true);
                        }} 
                        style={
                            {
                                marginTop: 20, 
                                color: 'white', 
                                fontWeight: 'bold',
                                fontFamily: 'Poppins-Regular',}}>
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
        marginTop: 40,
        justifyContent: 'center', 
        padding: 15, 
        borderRadius : 30, 
        flexDirection: 'row', 
        backgroundColor: '#009fd6'
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
});