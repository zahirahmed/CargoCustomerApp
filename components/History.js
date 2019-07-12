import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default class Password extends Component {
    static navigationOptions = {
        drawerLabel: 'History',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/history.png')}
            style={[styles.icon, {tintColor: 'white'}]}
          />
        ),
    };
      
    render(){
        return(
            <View>
                <Text>History</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    }
  });
  