import React, { Component } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';
import SearchFeatures from '../../../components/molecules/SearchFeatures';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/GoInfo';
import GoBanner from '../../../components/molecules/GoBanner';
import NavBar from '../../../containers/organisms/NavBar';
import HomeMainFeatures from '../../../containers/organisms/HomeMainFeatures';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                    {/* Search Bar */}
                    <SearchFeatures />
                    {/* Go Pay */}
                    <HomeGoPay />
                    {/* Main Features */}
                    <HomeMainFeatures />
                    <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}/>
                    {/* Section News */}
                    <GoNews onPress={() => this.props.navigation.navigate('NewsDetails')} />
                    {/* Internal Information section */}
                    <GoInfo />
                    {/* GO-FOOD BANNER SECTION */}
                    <GoBanner />
                    {/* Nearby GO-FOOD */}
                    <ScrollableProducts />
                </ScrollView>
                {/* <<----------------------------Bottom Navigation------------------------------>> */}
                <NavBar />
            </View>
        )
    }
}