import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import gofoodLogo from '../../../assets/logo/gofood.png';
import bannerImage from '../../../assets/dummy/food-banner.jpg';

const GoBanner = () => {
    return (
        <View style={{padding: 16}}>
          <View style={{position: 'relative'}}>
            <Image source={bannerImage} style={{height: 200, width: '100%', borderRadius: 6}} />
            <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6}}/>
            <Image source={gofoodLogo} style={{resizeMode: 'contain', height: 25, width: 60, position: 'absolute', top: 16, left: 16}} />
            <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}>Free GO-FOOD voucher</Text>
                <Text style={{fontSize: 12, fontWeight: '500', color: 'white'}}>Get now before they out!</Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4}}>
                  <Text style={{fontSize: 9.2, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20, marginTop: 16}} />
        </View>
    )
}

export default GoBanner;