import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import gojek2Logo from '../../../assets/logo/gojek.png';
import facebookconnectLogo from '../../../assets/dummy/facebook-connect.png';

const GoInfo = () => {
    return (
        <View style={{padding: 16, paddingBottom: 0}}>
          <View style={{height: 15, width: 60, marginLeft: -5}}>
            <Image source={gojek2Logo} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
          </View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginTop: 15, marginBottom: 20}}>Complete youre profile</Text>
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <View>
              <Image source={facebookconnectLogo} />
            </View>
            <View style={{flex: 1, marginLeft: 16}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>Connect with facebook</Text>
              <Text style={{fontSize: 15, fontWeight: 'normal', width: '70%'}}>Log in faster without verification code</Text>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
          </TouchableOpacity>
          <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16}} />
        </View>
    )
}

export default GoInfo;