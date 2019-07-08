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
} from 'react-native'

var {height, width} = Dimensions.get('screen')

export default class Splash extends Component {

    async componentDidMount() {

        Animated.sequence([
            Animated.timing(this.state.logoOpacity,{
                toValue : 1,
                duration: 1500,
            })
        ]).start()

    }

    state = {
        logoOpacity : new Animated.Value(0),
    }

    render(){
        return(
            
            <ImageBackground 
                source={require('../images/splashbg.jpg')} 
                style={styles.backgroundImage}>
                
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