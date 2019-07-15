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

export default class HomeDestination extends Component {
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
                <ScrollView contentContainerStyle={{flex:1}}>
                    <View style={styles.container}>
                        
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
           
                        <View style={{flex:1, flexDirection: 'column', }}>
                            
                        <View style={{flexDirection: 'row', }}>
  
                            <View style={{margin: 20, marginTop:40,backgroundColor: 'white',flexDirection: 'column', alignItems: 'center'}}>
                                          <Image 
                                            style={styles.dotImg}
                                            source={require('../images/dot.png')}>

                                         </Image>

                                  {/* <View 
                                    style={{flexDirection:'column', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>

                                          <View style = {styles.hlineStyle} />
                                          
                                  </View> */}
                                         <Image 
                                            style={{...styles.dotImg, marginTop:45}}
                                            source={require('../images/square.png')}>

                                         </Image>

                            </View>

                              <View 
                              style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                flex:1,
                                backgroundColor: 'white',
                                shadowRadius: 8,
                                shadowOpacity: 1,
                                marginRight:50}}>

                              <View style={
                                  {backgroundColor: '#ECECEC',
                                  borderRadius: 4,
                                  marginTop: 20,
                                  marginBottom:5,
                                  alignContent: 'flex-end',
                                  flexDirection: 'row',
                                  alignItems: 'flex-end'}
                                  }>
                                    <View style={styles.dropOffInside}>
                                        <TextInput 
                                            style={styles.dropOfftxt}
                                            placeholder='Location of Pickup'
                                            value='935 Ridgewood St'>
                                            
                                        </TextInput>
                                        {/* <View 
                                          style={{marginRight:15,flexDirection:'column', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                          <View style = {styles.hlineStyle} />
                                          
                                        </View> */}
                                         <Image 
                                            style={styles.mapImg}
                                            source={require('../images/place-gray.png')}>

                                         </Image>

                                    </View>
                                    
                                </View>
{/*                                     
                                    <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                    <View style = {styles.lineStyle} />
                                      
                                    </View> */}

                                    
                                <View style={
                                  {backgroundColor: '#ECECEC',
                                  borderRadius: 4,
                                  marginTop: 5,
                                  marginBottom: 15,
                                  alignContent: 'flex-end',
                                  flexDirection: 'row',
                                  alignItems: 'flex-end'}
                                  }>
                                    <View style={styles.dropOffInside}>
                                        
                                            <TextInput onSubmitEditing={() => {
                                            this.props.navigation.navigate('HomePackage');}}
                                                style={styles.dropOfftxt}
                                                placeholder='Location of Drop off?'>
                                                
                                            </TextInput>
                                        
                                        {/* <View 
                                          style={{marginRight:15,flexDirection:'column', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                          <View style = {styles.hlineStyle} />
                                          
                                        </View> */}
                                         {/* <Image 
                                            style={styles.mapImg}
                                            source={require('../images/map.png')}>

                                         </Image> */}

                                    </View>
                                    
                                </View>
                                      
                              </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            
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
      backgroundColor:'white',
      flexDirection: 'column',
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
      borderRadius: 4,
      margin: 10,
      alignContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'flex-end'
  },
  dropOffInside: {
      flex: 1,
      flexDirection: 'row',
      alignContent: 'flex-end',
      alignItems: 'center',
      padding: 3
  },
  dropOfftxt: {
      flex: 1,
      fontSize : 15,
      paddingLeft: 10,
      paddingBottom:-2,
      fontFamily: 'Poppins-Regular',
  },
  mapImg: {
      width: 20,
      height: 20,
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
   dotImg: {
    width: 6,
    height: 6,
},
     
});
