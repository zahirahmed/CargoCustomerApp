import React , {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,ColorMatrix,
  StatusBar,Image,Dimensions,TouchableOpacity,TextInput
} from 'react-native';
import FloatingLabel from 'react-native-floating-labels'

var { height,width}=Dimensions.get('screen')
import ForgotPassword from './ForgotPassword';

export default class SignInScreen extends Component {

    render() {
        return (
          <ScrollView>
          <View style={styles.container}>
              <StatusBar backgroundColor="#0D92CA" barStyle="light-content" />
            <View
              style={{
                flex: 1,
                
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal:10,
                paddingTop: 10,
                paddingBottom: 18
                }}
            >
              <Image
                resizeMode="cover"
                style={styles.imageview}
                source={require('../images/logo.png')}
              />
              
              <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    disableFullscreenUI={true}
                    keyboardType="number-pad"
                >Mobile Number</FloatingLabel>
            <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    disableFullscreenUI={true}
                    
                >Password</FloatingLabel>
    
            <TouchableOpacity
              onPress={ () => {
                this.props.navigation.navigate('HomeScreen')
            }}
              style={[styles.button]}
            >
              <Text 
                 
                style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch',marginTop:20}}>
            <View style = {styles.lineStyle} >
              </View>
              <Text>OR</Text>
              <View style = {styles.lineStyle} >
              </View>
              </View>
            <TouchableOpacity
              
              style={[styles.fbutton]}
            >
              <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>
                CONTINUE WITH FACEBOOK
              </Text>
            </TouchableOpacity>
           
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                height: 34,
                marginTop:50,
                justifyContent: 'center'
              }}

                    onPress={()=>{
                        this.props.navigation.navigate('ForgotPassword');
                    }}
            >
              <Text style={{ color: 'red', fontSize: 14 }} >
                         
                Forgot Password?
              </Text>
            </TouchableOpacity>
            </View>
           
          </View>
          </ScrollView>
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: 26,
        paddingTop: 26,
        paddingBottom: 18
      },
      containers: {
        flex: 1,
        
      },
      labelInput: {
        color: 'gray',
    },
    input: {
      borderWidth: 0
  },
      lineStyle:{
        flex:1,
        marginRight:30,
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'stretch',
        borderWidth: 0.5,
        borderColor:'gray',
        alignSelf: 'stretch',
        marginTop:10,
        marginBottom: 20
   },
      logo: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'grey'
      },
      textInput: {
        height: 60,
        borderRadius: 3,
        borderWidth: 1,
        
        borderColor: '#ECF0F3',
        paddingHorizontal: 19
      },
      imageview :{
          marginTop:60,
          height:width/6,

        alignSelf: 'center',
        resizeMode: 'contain',
        overflow: 'visible',
        tintColor: 'black'
            },
            fbutton: {
              padding:15,
              alignSelf:'stretch',
              marginTop:10,
              borderRadius: 30,
              backgroundColor: '#3b5998',
              justifyContent: 'center',
              alignItems: 'center'
            },
            formInput: {    
              borderBottomWidth: 1, 
              borderColor: 'gray', 
              alignSelf:'stretch',
              marginTop:30
          },
      button: {
        marginTop:40,
        padding:15,
        borderRadius: 30,
        alignSelf:'stretch',
        backgroundColor: '#11B8FF',
        justifyContent: 'center',
        alignItems: 'center'
      }
    });