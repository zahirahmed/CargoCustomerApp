import React, {Component} from 'react'
import {TouchableOpacity,Alert,FlatList,Platform,View, Text,StyleSheet,Image,ImageBackground,ScrollView,SafeAreaView,ToolbarAndroid,Dimensions} from 'react-native'
import { List, ListItem, Card } from 'react-native-elements'
var { height,width}=Dimensions.get('screen')

const list = [
    {
      name: '935 Ridgewood St. Picataway St. Picataway, NJ 08854',
      receiver:'185 Fermont St. Picataway St. Picataway, MN 08854',
      phone: '9090909090',
      receiverphone: '9090909191',
      driver:'Steven Myers',
      status:'Pickup'
    },
    {
      name: '54 Fermont St. Picataway St. Picataway, MN 08854',
      receiver:'12 Fermont St. Picataway St. Picataway, MN 08854',

      phone: '9090909091',
      receiverphone: '9098909191',
      driver:'Steven Myers',
      status:'On Way'
    },
  ]
export default class History extends Component {

    static navigationOptions = {
        drawerLabel: 'History',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/history.png')}
            style={[styles.icon, {tintColor: 'white'}]}
          />
        ),
    };

    renderRow ({ item }) {
        return (
            <TouchableOpacity 
            >
            <Card containerStyle={{padding: 0}}
            >
                     
            <View style={{backgroundColor:'white',padding:5}}
            >
 <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%"}}>
            <Text style = {{fontSize: 16, color:"gray", fontWeight:"normal"}}>
            PICKUP
            </Text>
            <Text style = {{fontSize: 16, color:"gray", fontWeight:"normal", position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
            DROP OFF
            </Text>
    </View>
    <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%"}}>
    <Text style = {{fontSize: 16, color:"black" }}>
    Sender Name
    </Text>
    <Text style = {{fontSize: 16, color:"black",  position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
    Receiver Name
    </Text>
</View>
            <View style = {{flex: 1,flexDirection:"row",backgroundColor:"clear"}}>
            <Text style = {{ fontSize: 16, color:"black" ,width:'50%',marginRight:5}}>
            {item.name}
            </Text>
            <Text style = {{ fontSize: 16, color:"black",width:'50%',alignSelf:'flex-end',justifyContent:'flex-end',alignContent:'flex-end',textAlign:'right'}}>
            {item.receiver}
            </Text>
    </View>
    <View style = {{flex: 1,flexDirection:"row",backgroundColor:"clear"}}>
            <Text style = {{ fontSize: 16, color:"black" ,width:'50%',marginRight:5}}>
            {item.phone}
            </Text>
            <Text style = {{ fontSize: 16, color:"black",width:'50%',alignSelf:'flex-end',justifyContent:'flex-end',alignContent:'flex-end',textAlign:'right'}}>
            {item.receiverphone}
            </Text>
    </View>

    <View style={{margin:5,flex:1,flexDirection:"row" ,justifyContent:'center'}}>
    <Image
            source={require('../images/steering-wheel-gray.png')}
            style={[styles.icon, {margin:5, width: 20,
                height: 20}]}
          />
        <Text style={{ margin:5,fontSize: 16, color:"black" ,fontWeight:'bold'}}>{item.driver}</Text>
        <Text style={{  margin:5,fontSize: 16, color:"gray"}}>Status</Text>
        <Text style={{   margin:5,fontSize: 16, color:"black" , color:'#117EB6'}}>{item.status}</Text>

    </View>

    <View style = {styles.lineStyle} ></View>

    <View style={{margin:5,flex:1,flexDirection:"row" ,justifyContent:'center',alignContent:'center',alignSelf:'center',alignItems:'center'}}>
<View style={{ width:'20%', flex:1,flexDirection:'column',alignContent:'center'}}>
    <Text style={{ color:"gray"}}>Date</Text>
    <Text>12/02/2019</Text>   
</View>

<View style={{ width:'20%',flex:1,flexDirection:'column',alignContent:'center'}}>
    <Text  style={{ color:"gray"}}>Time</Text>
    <Text>10:45 AM</Text>   
</View>
<View style={{ width:'20%',flex:1,flexDirection:'column',alignContent:'center' ,justifyContent:'center'}}>
    <Text style={{ color:"gray"}}>Saved Emissions</Text>
    <Text>113g/km</Text>   
</View>
<View style={{ width:'20%',flex:1,flexDirection:'column',alignContent:'center'}} >
<Image
            source={require('../images/qrcode.png')}
            style={[styles.icon, {margin:5, width: '80%',
                height: '80%'}]}
          />
</View>
</View>
            </View>
            </Card>
        
            </TouchableOpacity>
)
      }  
      handleClick = () => {
        // this.props.navigation.navigate('ForgotPassword');
         alert("pressed!");
       }
   
    render(){
        return(
              <View style = {{flex: 1,flexDirection: "column",backgroundColor: "white"}}>
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
                                  width:'100%',
                                  backgroundColor: "#117EB6",
                                  elevation: 4,
                                }}
                                navIcon={require('../images/menu-icon.png')}
                                onIconClicked={() => this.props.navigation.openDrawer()}
                                titleColor="white"
                                title="History"
                            />  
                            <FlatList
          data={list}
          renderItem={this.renderRow}
          keyExtractor={item => item.name}
          
        />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
    lineStyle:{
        flex:1,
       
        alignItems: 'stretch',
        borderWidth: 0.5,
        borderColor:'#D3D3D3',
        alignSelf: 'stretch',
        marginTop:10,
        marginBottom: 20
   }
  });