import React , {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
  Switch
} from 'react-native'
import {COLOR_DARK_BLUE, COLOR_LIGHT_BLUE} from '../Colors/Colors'
import PasswordInputText from 'react-native-hide-show-password-input';

import FloatingLabel from 'react-native-floating-labels'

var {height, width} = Dimensions.get('screen')

var radio_props = [
    {label: 'Customer', value: 0 },
    {label: 'Vehivle Owner', value: 1 }
  ];

export default class EditProfileInside extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        password: '',
    };

    constructor(){
        super();
        this.state = {
          switchValue: false
        }
    }

    onSwitchChange(value){
        this.setState({
            switchValue: value
        });
    }

    render(){
        const { password } = this.state;
        return(
            <ScrollView>
            <View 
                style={styles.backgroundImage}>

                <View style={{
                    flex:1,
                    flexDirection:'row',
                    alignSelf:'stretch',
                    justifyContent:'space-between',
                    }}>
                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={{
                            borderBottomWidth: 1,
                            width:'48%' ,
                            borderColor: 'gray', 
                            alignSelf:'stretch', 
                            
                        }}
                        disableFullscreenUI={true}
                        
                    >First Name</FloatingLabel>
                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={{
                            borderBottomWidth: 1, 
                            borderColor: 'gray', 
                            width:'48%' ,
                            alignSelf:'stretch', 
                            
                        }}
                        disableFullscreenUI={true}
                        
                    >Last Name</FloatingLabel>
                </View>

                <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    disableFullscreenUI={true}
                >Email Address</FloatingLabel>

                <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    disableFullscreenUI={true}
                >Mobile Number</FloatingLabel>


                <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    disableFullscreenUI={true}
                >Address</FloatingLabel>

                <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    disableFullscreenUI={true}
                >Address Proof</FloatingLabel>

                <Text style={{color:'gray',fontSize:12,alignSelf:'flex-start'}}>hint: Upload Aadhar Card or Passport. bmp,jpg,jpeg or png.</Text>

                <View style={{
                    flexDirection:'row',
                    alignSelf:'stretch',
                    marginTop:30,
                    justifyContent:'space-between',
                    }}>

                    <Text 
                        style={{
                            color:'gray',
                            fontSize: 14,
                            alignSelf:'flex-start'
                        }}>Have any Criminal Record</Text>

                    <Switch
                        style={{
                            color:'green',
                            
                        }}
                        value={this.state.switchValue}
                        onValueChange={(value) => this.onSwitchChange(value)}>

                    </Switch>
                    
                </View>

                <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={{
                        borderBottomWidth: 1, 
                        borderColor: 'gray', 
                        alignSelf:'stretch',
                        marginTop:10
                    }}
                    disableFullscreenUI={true}
                >Details About Their Criminal Record</FloatingLabel>

                <View 
                    style={styles.continueCon}>       
                    <Text 
                        onPress={() => this.setState({dialogVisible: false})}
                        style={styles.continueStyle}>
                        SUBMIT
                    </Text>
                </View>

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
        marginTop: height/12
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
        backgroundColor: 'white'
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
        fontSize: 14,
    },
    formInput: {    
        borderBottomWidth: 1, 
        borderColor: 'gray', 
        alignSelf:'stretch',
        marginTop:20
    },
    hformInput: {    
        
    },
    input: {
        borderWidth: 0
    }
});