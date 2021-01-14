import React, { Component } from 'react';
import { View } from 'react-native';
import BottomNavigation from '../../../components/molecules/BottomNavigations';

import homeActive from '../../../assets/icon/home-active.png';
import ordersIcon from '../../../assets/icon/order.png';
import helpIcon from '../../../assets/icon/help.png';
import inboxIcon from '../../../assets/icon/inbox.png';
import accountIcon from '../../../assets/icon/account.png';
import { withNavigation } from 'react-navigation';

class NavBar extends Component {
    render () {
        return (
            <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
                <BottomNavigation onPress={() => this.props.navigation.navigate('Home')} title='Home' icon={homeActive} active />
                <BottomNavigation onPress={() => this.props.navigation.navigate('Orders')} title='Orders' icon={ordersIcon} />
                <BottomNavigation onPress={() => this.props.navigation.navigate('Help')} title='Help' icon={helpIcon} />
                <BottomNavigation onPress={() => this.props.navigation.navigate('Inbox')} title='Inbox' icon={inboxIcon} />
                <BottomNavigation onPress={() => this.props.navigation.navigate('Account')} title='Account' icon={accountIcon} />
            </View>
        )
    }
}

export default withNavigation (NavBar);