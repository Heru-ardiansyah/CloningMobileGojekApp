import React from 'react';
import { Button, Text, View } from "react-native";
import NavBar from '../../organisms/NavBar';

const Orders = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Orders</Text>
                <Button title='Go to order detail' onPress={() => props.navigation.navigate('OrdersDetail')} />
            </View>
            <NavBar />
        </View>
    )
}

export default Orders;