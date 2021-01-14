import React from 'react';
import { Image, Text, View } from 'react-native';

const GopayFeatures = (props) => {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Image source={props.icon} />
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{props.title}</Text>
        </View>
    )
}

export default GopayFeatures;