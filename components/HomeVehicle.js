import React , {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
  ToolbarAndroid,
  TouchableOpacity,
  CheckBox,
  
} from 'react-native';
import { Dialog } from 'react-native-simple-dialogs'

import {COLOR_DARK_BLUE, COLOR_LIGHT_BLUE} from '../Colors/Colors'
import PasswordInputText from 'react-native-hide-show-password-input';

import FloatingLabel from 'react-native-floating-labels'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

var {height, width} = Dimensions.get('screen')

var radio_props = [
    {label: 'Customer', value: 0 },
    {label: 'Vehivle Owner', value: 1 }
  ];

export default class HomeVehicle extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/house.png')}
            style={[styles.icon, {tintColor: 'white'}]}
          />
        ),
    };
    
    state = {
        checked: false,
        tchecked: false,
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
                    <View style={styles.container}>
                        
                            { Platform.OS === 'android' && Platform.Version >= 20 ?
                            <View
                                style={{
                                  height: 24,
                                  backgroundColor: "#117EB6",
                                }}
                            />
                            : null }

                            <View>
                            <ToolbarAndroid
                                style={{
                                  height: 56,
                                  backgroundColor: "#117EB6",
                                  elevation: 4,
                                  flexDirection: 'row'
                                }}
                                navIcon={require('../images/left-arrow.png')}
                                onIconClicked={() => this.props.navigation.goBack()}
                                titleColor="white"
                                title="Home"
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
                              </View>
                        <View style={{flex:1, flexDirection: 'column'}}>
                        <View>
                              <MapView
                                      provider={PROVIDER_GOOGLE}
                                      style={{height: height/4}}        
                                      region={{
                                                  latitude: 23.0231,          
                                                  longitude: 72.5068,          
                                                  latitudeDelta: 0.0922,          
                                                  longitudeDelta: 0.0421        
                                              }}        
                                      showsUserLocation={true}      />
                        </View>
                            
                                <View style={{backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center'}}>
                                    <Text style={styles.custName}>
                                          Type of Vehicle
                                    </Text>
                                </View>
                            <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor: 'white'}}>

                            
                                    <View style={styles.bottomSheet}>
                                    <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:30,marginTop:5,justifyContent: "space-between"}}>
                                <Text style = {{width: '50%',flex: 1,fontSize: 16, color:"gray", fontWeight:"normal", margin: 5, marginTop: 5}}>
                                    Trip Fare
                                </Text>
                                <Text style = {{textAlign:'right',width: '50%',fontSize: 16, color:"black", fontWeight:"normal", margin: 5, marginTop: 5, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                    Rs.143.50
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:30,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{width: '50%',flex: 1,fontSize: 16, color:"gray", fontWeight:"normal", marginTop: 5, margin: 5}}>
                                    SubTotal
                                </Text>
                                <Text style = {{textAlign:'right',width: '50%',fontSize: 16, color:"black", fontWeight:"normal", marginTop: 5, margin: 5, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                Rs.143.50
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:30,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{width: '50%',flex: 1,fontSize: 16, color:"gray", fontWeight:"normal", marginTop: 5, margin: 5}}>
                                    Wait Time
                                </Text>
                                <Text style = {{textAlign:'right',width: '50%',fontSize: 16, color:"black", fontWeight:"normal", marginTop: 5, margin: 5, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                    Rs.6.00
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:30,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{width: '50%',flex: 1,fontSize: 16, color:"gray", fontWeight:"normal", marginTop: 5, margin: 5}}>
                                    Before Taxes
                                </Text>
                                <Text style = {{textAlign:'right',width: '50%',fontSize: 16, color:"black", fontWeight:"normal", marginTop: 5, margin: 5, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                Rs.143.18
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:30,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{width: '50%',flex: 1,fontSize: 16, color:"gray", fontWeight:"normal", marginTop: 5, margin: 5}}>
                                    CGST (2.5%)
                                </Text>
                                <Text style = {{textAlign:'right',width: '50%',fontSize: 16, color:"black", fontWeight:"normal", marginTop: 5, margin: 5, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                    Rs.3.58
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:30,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{width: '50%',flex: 1,fontSize: 16, color:"gray", fontWeight:"normal", marginTop: 5, margin: 5}}>
                                    SGST/UTGST (2.5%)
                                </Text>
                                <Text style = {{textAlign:'right',width: '50%',fontSize: 16, color:"black", fontWeight:"normal", marginTop: 5, margin: 5, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                Rs.3.58
                                </Text>
                        </View>

                        <Dialog
                    
                    visible={this.state.dialogVisible}
                    title=""
                    animationType='fade'
                    backgroundColor='black'
                    onTouchOutside={() => this.setState({dialogVisible: false})} >

                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        
                            <Text style={{color:'black', fontWeight: 'bold', fontSize: 20}}>
                                Insurance Details
                            </Text>
                            <Text style={styles.registerSubText}>
                                
                            </Text>

                        </View>
                    

                        <View 
                            style={styles.continueCon}>
                                 
                                 <Text 
                                    onPress={ () => {

                                        this.setState({dialogVisible: false})

                                    }}
                                    style={styles.continueStyle}>
                                     CONTINUE
                                 </Text>

                        </View>

                </Dialog>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:30,marginTop:0,justifyContent: "space-between"}}>
                                <View style={{ flexDirection: 'column',width: '50%'}}>
                                
                                <View style={{ flexDirection: 'row' }}>
                                    <CheckBox
                                    value={this.state.checked}
                                    onValueChange={() => {this.setState({ 
                                        checked: !this.state.checked 
                                        
                                    })
                                    
                                }}
                                    />
                                    <Text style={{marginTop: 5,textDecorationLine:'underline',color:'gray'}} onPress={() => {
                                        this.setDialogVisible(true);
                                    }}>View Insurance</Text>
                                </View>
                                </View>
                                <Text style = {{textAlign:'right',width: '50%',fontSize: 16, color:"black", fontWeight:"normal", marginTop: 5, margin: 10, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                Rs.3.58
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:40,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{width: '50%',flex: 1,fontSize: 16, color:"gray", fontWeight:"normal", marginTop: 5, margin: 10}}>
                                    Collected
                                </Text>
                                <Text style = {{textAlign:'right',width: '50%',fontSize: 20, color:"#009fd6", fontWeight:"bold", marginTop: 5, margin: 10, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                Rs.150.34
                                </Text>
                        </View> 
                        <Dialog
                    
                    visible={this.state.ldialogVisible}
                    title=""
                    animationType='fade'
                    backgroundColor='black'
                    onTouchOutside={() => this.setState({ldialogVisible: false})} >

                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        
                            <Text style={{color:'black', fontWeight: 'bold', fontSize: 20}}>
                                Terms & Conditions
                            </Text>
                            <Text style={styles.registerSubText}>
                                
                            </Text>

                        </View>
                    

                        <View 
                            style={styles.continueCon}>
                                 
                                 <Text 
                                    onPress={ () => {

                                        this.setState({ldialogVisible: false})

                                    }}
                                    style={styles.continueStyle}>
                                     CONTINUE
                                 </Text>

                        </View>

                </Dialog>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:50,marginTop:0,justifyContent: "space-between"}}>
                                <View style={{ flexDirection: 'column',width: '50%'}}>
                                
                                <View style={{ flexDirection: 'row' }}>
                                    <CheckBox
                                    value={this.state.tchecked}
                                    onValueChange={() => this.setState({ 
                                        tchecked: !this.state.tchecked ,
                                        
                                    })}
                                    />
                                    <Text style={{marginTop: 5,textDecorationLine:'underline',color:'black'}} onPress={() => {
                                        this.setLDialogVisible(true);
                                    }}>Terms&Conditions</Text>
                                </View>
                                </View>
                                {/* <Text style = {{textAlign:'right',width: '50%',fontSize: 16, color:"black", fontWeight:"normal", marginTop: 5, margin: 10, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                Rs.3.58
                                </Text> */}
                        </View> 
                                <View 
                                    style={styles.continueCon}>
                                        
                                        <Text 
                                            onPress={ () => {

                                                //this.props.navigation.navigate("SignUp")

                                            }}
                                            style={styles.continueStyle}>
                                            CONTINUE
                                        </Text>

                                </View>

                              </View>
                            </ScrollView>
                            
                        </View>

                    </View>
              
        );
    }

}

const styles = StyleSheet.create({
  icon: {
      width: 20,
      height: 20,
  },
  container: {
      flex: 1,
      
      flexDirection: 'column',
  },
  bottomSheet: {
      flexDirection: 'column',
      alignItems: 'center',
      
      backgroundColor: 'white',
      shadowRadius: 8,
      shadowOpacity: 1
  },
  custName:{
      fontFamily: 'Poppins-Medium',
      fontSize: 15,
      margin: 20,
      marginBottom:10,

  },
  lineStyle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 0.5,
    borderColor:'lightgray',
    alignSelf: 'stretch',
   },
  dropOffContainer: {
      backgroundColor: '#ECECEC',
      borderRadius: 40,
      margin: 15,
      alignContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'flex-end'
  },
  dropOffInside: {
      flex: 1,
      flexDirection: 'row',
      alignContent: 'flex-end',
      alignItems: 'center',
      padding: 5
  },
  recNameEd: {
      flex: 1,
      fontSize : 16,
      paddingLeft: 10,
      fontFamily: 'Poppins-Regular',
  },
  mapImg: {
      width: 22,
      height: 22,
      marginRight: 10,
  },
  hlineStyle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 0.5,
    borderColor:'gray',
    alignSelf: 'stretch',
   },
   headerContainer: {
    backgroundColor: '#117EB6',
    alignContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  headerContainerInside: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'center',
  },
  headerTitle: {
      flex: 1,
      fontSize : 18,
      fontFamily: 'Poppins-Regular',
      color: 'white'
  },
  notiImg: {
      width: 22,
      height: 22,
      
  },  
  continueCon: {
    margin: 15,
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
});
