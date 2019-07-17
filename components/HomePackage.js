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
  TouchableOpacity
} from 'react-native'
import {COLOR_DARK_BLUE, COLOR_LIGHT_BLUE} from '../Colors/Colors'
import PasswordInputText from 'react-native-hide-show-password-input';

import FloatingLabel from 'react-native-floating-labels'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

var {height, width} = Dimensions.get('screen')

var radio_props = [
    {label: 'Customer', value: 0 },
    {label: 'Vehivle Owner', value: 1 }
  ];

export default class HomePackage extends Component {
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
                                        Enter receiver and package details
                                    </Text>
                                </View>
                                    <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor: 'white'}}>

                            
                                    <View style={styles.bottomSheet}>
                                <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>

                                    <View style = {styles.lineStyle} />
                                      
                                </View>

                                    
                                <View style={styles.dropOffContainer}>
                                 
                                    <View style={styles.dropOffInside}>
                                    <TextInput
                                        style={styles.recNameEd}
                                        placeholder='Receiver Name'
                                        placeholderTextColor='black'>

                                    </TextInput>
                                   
                                    </View>

                                </View>

                                     <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                    
                                    <View style = {styles.lineStyle} />
                                      
                                </View>

                                    
                                <View style={styles.dropOffContainer}>
                                 
                                    <View style={styles.dropOffInside}>
                                    <TextInput
                                        placeholderTextColor='black'
                                        style={styles.recNameEd}
                                        placeholder='Receiver Mobile Number'>

                                    </TextInput>
                                   
                                    </View>

                                </View>

                                     <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                    
                                    <View style = {styles.lineStyle} />
                                      
                                </View>

                                    
                                <View style={styles.dropOffContainer}>
                                 
                                    <View style={styles.dropOffInside}>
                                    <TextInput
                                        placeholderTextColor='black'
                                        style={styles.recNameEd}
                                        placeholder='Receiver Address'>

                                    </TextInput>
                                   
                                    </View>

                                </View>

                                     <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                    
                                    <View style = {styles.lineStyle} />
                                      
                                </View>

                                    
                                <View style={styles.dropOffContainer}>
                                 
                                    <View style={styles.dropOffInside}>
                                    <TextInput
                                        placeholderTextColor='black'
                                        style={styles.recNameEd}
                                        placeholder='Types of Goods'>

                                    </TextInput>
                                   
                                    </View>

                                </View>

                                     <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                    
                                    <View style = {styles.lineStyle} />
                                      
                                </View>

                                    
                                <View style={styles.dropOffContainer}>
                                 
                                    <View style={styles.dropOffInside}>
                                    <TextInput
                                        placeholderTextColor='black'
                                        style={styles.recNameEd}
                                        placeholder='Weight'>

                                    </TextInput>
                                   
                                    </View>

                                </View>

                                     <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                    
                                    <View style = {styles.lineStyle} />
                                      
                                </View>

                                    
                                <View style={styles.dropOffContainer}>
                                 
                                    
                                    <View 
                                        style={{
                                        flex:1,
                                        width: '100%',
                                        flexDirection:'row',
                                        alignSelf:'stretch',
                                        justifyContent:'space-between',
                                        marginTop: 10
                                        }}>
                                    <View style={{...styles.dropOffInside, width:'30%'}}>
                                        <TextInput
                                            placeholderTextColor='black'    
                                            style={styles.recNameEd}
                                            placeholder='Length'>

                                        </TextInput>
                                    
                                    </View>
                                    <View style={{...styles.dropOffInside, width:'30%'}}>
                                        <TextInput
                                            placeholderTextColor='black'    
                                            style={styles.recNameEd}
                                            placeholder='Width'>

                                        </TextInput>
                                    
                                    </View>
                                    <View style={{...styles.dropOffInside, width:'30%'}}>
                                        <TextInput
                                            placeholderTextColor='black'    
                                            style={styles.recNameEd}
                                            placeholder='Height'>

                                        </TextInput>
                                    
                                    </View>


                                    </View>

                                </View>

                                     <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                    
                                    <View style = {styles.lineStyle} />
                                      
                                </View>

                                    
                                <View style={styles.dropOffContainer}>
                                 
                                    <View style={styles.dropOffInside}>
                                    <TextInput
                                        placeholderTextColor='black'
                                        style={styles.recNameEd}
                                        placeholder='Packed In'>

                                    </TextInput>
                                   
                                    </View>

                                </View>

                                <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                    
                                    <View style = {styles.lineStyle} />
                                      
                                </View>

                                <View style={styles.dropOffContainer}>
                                 
                                    <View style={styles.dropOffInside}>
                                    <TextInput
                                        placeholderTextColor='black'
                                        style={styles.recNameEd}
                                        placeholder='Quantity of Goods'>

                                    </TextInput>
                                   
                                    </View>

                                </View>

                                <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                    
                                    <View style = {styles.lineStyle} />
                                      
                                </View>

                                <View 
                                    style={styles.continueCon}>
                                        
                                        <Text 
                                            onPress={ () => {

                                                this.props.navigation.navigate("HomeVehicle")

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
      fontSize: 18,
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
      padding: 2
  },
  recNameEd: {
      flex: 1,
      fontSize : 14,
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
