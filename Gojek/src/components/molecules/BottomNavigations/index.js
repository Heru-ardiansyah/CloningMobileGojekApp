import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const BottomNavigation = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={props.onPress}>
            <Image source={props.icon} style={{ width: 26, height: 26 }} />
            <Text style={{ fontSize: 10, color: props.active ? '#43AB4A' : '#545454', marginTop: 4 }}>{props.title}</Text>
          </TouchableOpacity>
        </View>
    )
}

export default BottomNavigation;