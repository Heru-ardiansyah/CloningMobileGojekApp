import React from 'react';
import { Text, View } from "react-native";
import NavBar from '../../organisms/NavBar';

const OrdersDetail = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Orders Detail</Text>
            </View>
            <NavBar />
        </View>
    )
}

export default OrdersDetail;