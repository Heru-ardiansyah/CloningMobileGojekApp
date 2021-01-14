import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import GopayFeatures from '../../../components/molecules/GopayFeatures';

import gopayIcon from '../../../assets/icon/gopay.png';
import payIcon from '../../../assets/icon/pay.png';
import nearbyIcon from '../../../assets/icon/nearby.png';
import topupIcon from '../../../assets/icon/topup.png';
import moreIcon from '../../../assets/icon/more.png';

export default class HomeGoPay extends Component {
    render () {
        return (
            <View style={{ marginHorizontal: 17, marginTop: 8 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
                    <Image source={gopayIcon} />
                    <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Rp52.000</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
                    <GopayFeatures title='Pay' icon={payIcon} />
                    <GopayFeatures title='Nearby' icon={nearbyIcon} />
                    <GopayFeatures title='Top Up' icon={topupIcon} />
                    <GopayFeatures title='More' icon={moreIcon} />
                </View>
            </View>
        )
    }
}