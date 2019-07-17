import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class PaymentDetails extends Component {
    render(){
        return(
            <View style={{backgroundColor: 'white',flex:1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
                <Text>Payment Details</Text>
            </View>
        );
    }
}