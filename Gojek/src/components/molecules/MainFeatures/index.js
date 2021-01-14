import React from 'react';
import { Image, Text, View } from 'react-native';

const MainFeatures = (props) => {
    return (
        <View style={{width: '25%', alignItems: 'center', marginBottom: 18}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={props.icon} />
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>{props.title}</Text>
        </View>
    )
}

export default MainFeatures;