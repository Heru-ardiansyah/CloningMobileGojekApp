import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, NewsDetails, Orders, OrdersDetail, Help, Inbox, Account } from '../../containers/pages';

const HomeStack = createStackNavigator (
    {
        Home,
        NewsDetails,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }
)

const OrdersStack = createStackNavigator (
    {
        Orders,
        OrdersDetail,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Orders'
    }
)

const HelpStack = createStackNavigator (
    {
        Help,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Help',
    }
)

const InboxStack = createStackNavigator (
    {
        Inbox,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Inbox',
    }
)

const AccountStack = createStackNavigator (
    {
        Account,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Account',
    }
)

const Router = createSwitchNavigator (
    {
        HomeStack,
        OrdersStack,
        HelpStack,
        InboxStack,
        AccountStack,
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeStack'
    }
  );
  
  
export default createAppContainer(Router);