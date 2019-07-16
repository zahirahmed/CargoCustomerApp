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

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/house.png')}
            style={[styles.icon, {tintColor: 'white'}]}
          />
        ),
    };
      
  onActionSelected = position => {
    if (position === 0) {
      // index of 'Settings'
      this.props.navigation.navigate("Notifications");
    }
  };

    render(){
        return(
                <ScrollView contentContainerStyle={{flex:1}}>
                    <View style={styles.container}>
                        
                            { Platform.OS === 'android' && Platform.Version >= 20 ?
                            <View
                                style={{
                                  height: 24,
                                  backgroundColor: "#19a0d4",
                                }}
                            />
                            : null }

<ToolbarAndroid
            style={{
              height: 56,
              backgroundColor: "#19a0d4",
              elevation: 4,
              flexDirection: "row"
            }}
            navIcon={require("../images/menu-icon.png")}
            onIconClicked={() => this.props.navigation.openDrawer()}
            titleColor="white"
            title="Home"
            actions={[
              {
                title: "Settings",
                icon: require("../images/notification-bell-black.png"),
                show: "always"
              }
            ]}
            onActionSelected={this.onActionSelected}
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

                        <View style={{flex:1, flexDirection: 'column', justifyContent: 'flex-end',}}>
                              
                              <MapView
                                      provider={PROVIDER_GOOGLE}
                                      style={{flex: 1}}        
                                      region={{
                                                  latitude: 23.0231,          
                                                  longitude: 72.5068,          
                                                  latitudeDelta: 0.0922,          
                                                  longitudeDelta: 0.0421        
                                              }}        
                                      showsUserLocation={true}      />

                              <View style={styles.bottomSheet}>
                                    <Text style={styles.custName}>
                                          CUST11089001
                                    </Text>
                                  
                                    <View style={{flexDirection:'row', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                    <View style = {styles.lineStyle} />
                                      
                                    </View>

                                    
                                <View style={styles.dropOffContainer}>
                                 
                                    <View style={styles.dropOffInside}>
                                        <Text 
                                        onPress={ () => {
                                          this.props.navigation.navigate('HomeDestination')
                                      }}
                                            style={styles.dropOfftxt}>
                                            Location of Drop off?
                                        </Text>
                                        <View 
                                          style={{marginRight:15,flexDirection:'column', alignSelf:'stretch',justifyContent: 'center',alignContent:'stretch'}}>
                                          <View style = {styles.hlineStyle} />
                                          
                                        </View>
                                         <Image 
                                            style={styles.mapImg}
                                            source={require('../images/map.png')}>

                                         </Image>

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
      
      flexDirection: 'column',
  },
  bottomSheet: {
      flexDirection: 'column',
      alignItems: 'center',
      height: height/5,
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
      margin: 20,
      alignContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'flex-end'
  },
  dropOffInside: {
      flex: 1,
      flexDirection: 'row',
      alignContent: 'flex-end',
      alignItems: 'center',
      padding: 12
  },
  dropOfftxt: {
      flex: 1,
      fontSize : 18,
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
});
