import React, { Component } from 'react';
import { StyleSheet, View , TextInput, SafeAreaView, StatusBar, Image, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
var { height,width}=Dimensions.get('screen')

export default class HelloWorldApp extends Component {

  state = {
    placename: '',
    Name: '',
    Time: '',
    Date: ''
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placename: value
    })
  }

  NameHandler = (value) => {
    this.setState({
      Name: value
    })
  }

  TimeHandler = (value) => {
    this.setState({
      Time: value
    })
  }

  DateHandler = (value) => {
    this.setState({
      Date: value
    })
  }

  render() {
    return (

      <SafeAreaView style = {{flex: 1}}
        backgroundColor= "#117eb6">
          <StatusBar backgroundColor = "#117eb6"
                     barStyle = "light-content"
                     hidden = {false}
                     translucent = {true}
                     />
          <ScrollView 
            contentContainerStyle={{flex:1}}
            style = {{flex: 1,flexDirection: "column",width: "100%"}}>

            <View style = {{flex: 1, flexDirection: "column",alignItems: "center"}} 
            backgroundColor = "white">
              <Image source = {require("../images/logo.png")}
              style = {{width: "50%",height: width/2,marginTop: width/10, tintColor: "black", resizeMode: "contain"}}></Image>
              <Text style = {{fontSize: 16,fontWeight: "normal",textAlign: "center", marginRight: width/10, marginLeft: width/10}}>Please enter 4 digit verification code that you received via Mobile SMS.</Text>
              <View style = {{flexDirection: "row", width: "60%", height: width/5, marginTop: width/10,justifyContent: "center", alignItems: "center"}} backgroundColor= "clear">
              <KeyboardAvoidingView style= {{flex:1,flexDirection:"row",height: "100%"}} behavior="padding" enabled>
                <TextInput 
                value = {this.state.placename} 
                onChangeText = {this.placeNameChangeHandler}
                placeholder = ""
                textContentType = "oneTimeCode"
                style = {{height: "70%", width: "20%", borderColor: "gray", borderWidth: 1, padding: 10, borderRadius: 10, margin: 5}}/>

                <TextInput 
                value = {this.state.Name} 
                placeholder = ""
                textContentType = "oneTimeCode"
                onChangeText = {this.NameHandler}
                style = {{height: "70%", width: "20%", borderColor: "gray", borderWidth: 1, padding: 10, borderRadius: 10, margin: 5}}/>

                <TextInput 
                value = {this.state.Time} 
                placeholder = ""
                textContentType = "oneTimeCode"
                onChangeText = {this.TimeHandler}
                style = {{height: "70%", width: "20%", borderColor: "gray", borderWidth: 1, padding: 10, borderRadius: 10, margin: 5}}/>

                <TextInput 
                value = {this.state.Date} 
                placeholder = ""
                textContentType = "oneTimeCode"
                onChangeText = {this.DateHandler}
                style = {{height: "70%", width: "20%", borderColor: "gray", borderWidth: 1, padding: 10, borderRadius: 10, margin: 5}}/>
              </KeyboardAvoidingView>
            </View>
            <TouchableOpacity 
              onPress={() => {
                this.props.navigation.navigate('ChangePassword');
              }}
              style= {{marginTop: 20,height: 50, width: "80%", borderRadius: 25, backgroundColor: "#009fd6", justifyContent: "center", alignItems: "center"}}>
              
            <View >
                <Text style = {{fontSize: 16, color: "white", fontWeight: "800"}}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
              <Text style = {{marginTop: 20, fontSize: 16, color: "black", fontWeight: "900"}}>01:59</Text>
              <Text style = {{marginTop: 30, fontSize: 16, color: "black", fontWeight: "500", textDecorationLine : "underline"}}>Resend OTP</Text>

            <View style= {{marginTop: 40,height: 40, width: "100%", backgroundColor: "clear", flexDirection: "row",justifyContent:"center", alignItems:"center"}}>
              <Text style = {{fontSize: 15, color: "black", fontWeight: "normal"}}>Back to</Text>
              <Text 
                onPress={() => this.props.navigation.goBack()}
                style = {{fontSize: 15, color: "#009fd6", fontWeight: "bold", textDecorationLine: "underline",paddingLeft: 5}}>SIGN IN</Text>
                

            </View>

          </View>

        </ScrollView>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: "center",
  },

  button: {
    marginTop: "5%",
    height: 40,
    borderRadius: 20,
    width: "80%",
    backgroundColor: '#11B8FF',
    justifyContent: 'center',
    alignItems: 'center'
  }
}); 