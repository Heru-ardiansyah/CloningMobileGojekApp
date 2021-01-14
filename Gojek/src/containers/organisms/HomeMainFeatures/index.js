import React, { Component } from 'react';
import { View } from 'react-native';
import MainFeatures from '../../../components/molecules/MainFeatures';

import gorideIcon from '../../../assets/icon/go-ride.png';
import gofoodIcon from '../../../assets/icon/go-food.png';
import gomoreIcon from '../../../assets/icon/go-more.png';
import gosendIcon from '../../../assets/icon/go-send.png';
import godealsIcon from '../../../assets/icon/go-deals.png';
import gopulsaIcon from '../../../assets/icon/go-pulsa.png';
import gocarIcon from '../../../assets/icon/go-car.png';
import gobluebirdIcon from '../../../assets/icon/go-bluebird.png';

export default class HomeMainFeatures extends Component {
    render () {
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
                    <MainFeatures title='GO-RIDE' icon={gorideIcon} />
                    <MainFeatures title='GO-CAR' icon={gocarIcon} />
                    <MainFeatures title='GO-BLUEBIRD' icon={gobluebirdIcon} />
                    <MainFeatures title='GO-SEND' icon={gosendIcon} />
                    <MainFeatures title='GO-DEALS' icon={godealsIcon} />
                    <MainFeatures title='GO-PULSA' icon={gopulsaIcon} />
                    <MainFeatures title='GO-FOOD' icon={gofoodIcon} />
                    <MainFeatures title='MORE' icon={gomoreIcon} />
                </View>
            </View>
        )
    }
}