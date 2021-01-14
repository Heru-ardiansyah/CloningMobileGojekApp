import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import ScrollableItems from '../../../components/molecules/ScrollableItems';

import gofoodLogo from '../../../assets/logo/go-food.png';
import gofoodKfc from '../../../assets/dummy/go-food-kfc.jpg';
import gofoodGm from '../../../assets/dummy/go-food-gm.jpg';
import gofoodBanka from '../../../assets/dummy/go-food-banka.jpg';
import gofoodOrins from '../../../assets/dummy/go-food-orins.jpg';
import gofoodPakbos from '../../../assets/dummy/go-food-pak-boss.jpg';

export default class ScrollableProducts extends Component {
    render() {
        return (
            <View>
                <View style={{height: 15, width: 60, marginLeft: 16}}>
                    <Image source={gofoodLogo} style={{width: undefined, height: undefined, resizeMode: 'contain' ,flex: 1}} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>Nearby Restaurant</Text>
                    <Text style={{color: '#61A756', fontSize: 17, fontWeight: 'bold'}}>See All</Text>
                </View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingHorizontal: 16}}>
                    <ScrollableItems title='KFC Aeon Mall' image={gofoodKfc} /> 
                    <ScrollableItems title='Bakmi Aeon Mall' image={gofoodGm} />
                    <ScrollableItems title='Martabak Orins' image={gofoodOrins} />
                    <ScrollableItems title='Martabak Bangka' image={gofoodBanka} />
                    <ScrollableItems title='Ayam Bakar Pak Boss' image={gofoodPakbos} />
                </ScrollView>
                <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20, marginTop: 16, marginHorizontal: 16}} />
            </View>
        )
    }
}

