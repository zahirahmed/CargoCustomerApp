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
  Alert
} from 'react-native'

import {NavigationActions,StackActions} from 'react-navigation';

var {height, width} = Dimensions.get('screen')

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Login' })],
  });

export default class Splash extends Component {
    static navigationOptions = {
        header: null
    }
    async componentDidMount() {

        Animated.sequence([
            Animated.timing(this.state.logoOpacity,{
                toValue : 1,
                duration: 1500,
            })
        ]).start()

        setTimeout(() => {
            this.props.navigation.dispatch(resetAction);
        }, 3000);
    }

    state = {
        logoOpacity : new Animated.Value(0),
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

                <Animated.Image 
                    style={{...styles.logo, opacity : this.state.logoOpacity}}
                    source={require('../images/logo.png')}>

                </Animated.Image>

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
        justifyContent: 'center'
         // or 'stretch'
    },
    logo: {
        resizeMode: 'contain',
        height:width/6,
    },
});