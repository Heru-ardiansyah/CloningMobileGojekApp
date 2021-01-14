import React from 'react';

import searchIcon from '../../../assets/icon/search.png';
import promoIcon from '../../../assets/icon/promo.png';
import { Image, TextInput, View } from 'react-native';

const SearchFeatures = () => {
    return (
        <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
          {/* Search Bar */}
          <View style={{ position: 'relative', flex: 1 }}>
            <TextInput placeholder='What do you want to eat?' style={{ borderWidth: 1, borderRadius: 25, borderColor: '#E8E8E8', height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} />
            <Image source={searchIcon} style={{ position: 'absolute', top: 5, left: 12 }} />
          </View>
          <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={promoIcon} />
          </View>
        </View>
    )
}

export default SearchFeatures;