import React, {Component} from 'react'
import {StatusBar,Platform,View, Text,StyleSheet,Image,ImageBackground,ScrollView,SafeAreaView,ToolbarAndroid,Dimensions} from 'react-native'
var { height,width}=Dimensions.get('screen')

export default class Password extends Component {
    static navigationOptions = {
        drawerLabel: 'My Profile',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/profiles.png')}
            style={[styles.icon, {tintColor: 'white'}]}
          />
        ),
    };
      
    render(){
        return(
            <SafeAreaView style = {{flex: 1,backgroundColor: "#117eb6"}}>
              <View style = {{flex: 1,flexDirection: "column",alignItems: "center",backgroundColor: "white"}}>
                    
                    
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
                                title="My Profile"
                            />
                            
                    <ScrollView style = {{flex: 1,flexDirection: "column",width: "100%"}}>
                        <View style = {{marginTop: 0,width: "100%", height: height/2.5,backgroundColor: "clear",justifyContent: "center", alignItems: "center"}}>
                            <ImageBackground source = {require("../images/profile-bg.jpg")} style = {{height: "100%",width: "100%",justifyContent: "center", alignItems: "center"}}>
                                <Image source = {require("../images/profile.png")} style = {{
                                width: width/4,
                                height:width/4,
                                borderRadius: width/8,
                                resizeMode: "contain",
                                }}/>
                                <Text style = {{fontSize: 18,color: "white", fontWeight: "bold",marginTop: 16}}>Lorem Ipsum</Text>
                            </ImageBackground>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:50,marginTop:10,justifyContent: "space-between"}}>
                                <Text style = {{flex: 1,fontSize: 16, color:"black", fontWeight:"normal", margin: 16}}>
                                    FullName
                                </Text>
                                <Text style = {{fontSize: 16, color:"gray", fontWeight:"normal", margin: 16, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:50,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{flex: 1,fontSize: 16, color:"black", fontWeight:"normal", margin: 16}}>
                                    Email Address
                                </Text>
                                <Text style = {{fontSize: 16, color:"gray", fontWeight:"normal", margin: 16, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                    LoremIpsum@gmail.com
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:50,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{flex: 1,fontSize: 16, color:"black", fontWeight:"normal", margin: 16}}>
                                    Mobile Number
                                </Text>
                                <Text style = {{fontSize: 16, color:"gray", fontWeight:"normal", margin: 16, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                    9090909090
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:50,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{flex: 1,fontSize: 16, color:"black", fontWeight:"normal", margin: 16}}>
                                    Address
                                </Text>
                                <Text style = {{fontSize: 16, color:"gray", fontWeight:"normal", margin: 16, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                    LoremIpsum City
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:50,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{flex: 1,fontSize: 16, color:"black", fontWeight:"normal", margin: 16}}>
                                    Address Proof
                                </Text>
                                <Text style = {{fontSize: 16, color:"gray", fontWeight:"normal", margin: 16, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                    lorem@gmail.com
                                </Text>
                        </View>
                        <View style = {{flexDirection:"row",backgroundColor:"clear",width:"100%",height:50,marginTop:0,justifyContent: "space-between"}}>
                                <Text style = {{flex: 1,fontSize: 16, color:"black", fontWeight:"normal", margin: 16}}>
                                    Have any Criminal Record
                                </Text>
                                <Text style = {{fontSize: 16, color:"gray", fontWeight:"normal", margin: 16, position:"absolute",right:0,maxWidth: width/2, maxHeight: 50}}>
                                    NO
                                </Text>
                        </View>
                    </ScrollView>

              </View>
          </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
  icon: {
      width: 20,
      height: 20,
  }
});
