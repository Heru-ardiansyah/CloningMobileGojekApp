import React from 'react';
import { Image, Text, View } from 'react-native';

const ScrollableItems = (props) => {
    return (
        <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150, borderRadius: 4}}>
                <Image source={props.image} style={{width: undefined, height: undefined, resizeMode: 'cover' ,flex: 1, borderRadius: 4}} />
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>{props.title}</Text>
        </View>
    )
}

export default ScrollableItems;