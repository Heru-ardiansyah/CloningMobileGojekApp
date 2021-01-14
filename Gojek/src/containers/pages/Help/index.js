import React from 'react';
import { Text, View } from 'react-native';
import NavBar from '../../organisms/NavBar';

const Help = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Help Page</Text>
            </View>
            <NavBar />
        </View>
    )
}

export default Help;