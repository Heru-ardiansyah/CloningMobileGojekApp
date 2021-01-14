import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import gojekLogo from '../../../assets/logo/white.png';
import newsImage from '../../../assets/dummy/sepak-bola.jpg';

const GoNews = ({ onPress }) => {
    return (
        <View style={{paddingTop: 16, paddingHorizontal: 16}}>
          <View style={{position: 'relative'}}>
            <Image source={newsImage} style={{height: 200, width: '100%', borderRadius: 6}} />
            <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}/>
            <Image source={gojekLogo} style={{resizeMode: 'contain', height: 15, width: 60, position: 'absolute', top: 16, left: 16}} />
          </View>
          <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
            <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Timnas U-19 Berhasil kalahkan tim Brunei di babak 8 besar piala AFF</Text>
            <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}} onPress={onPress}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default GoNews;