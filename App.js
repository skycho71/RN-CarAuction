import React, {Component} from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer }  from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import AuctionListScreen from './screens/AuctionListScreen';
import ListingEditorScreen from './screens/ListingEditorScreen';
import MyVehicleScreen from './screens/MyVehicleScreen';
import SettingsScreen from './screens/SettingsScreen';
import VehicleDetailScreen from './screens/VehicleDetailScreen';
import VehicleEditorScreen from './screens/VehicleEditorScreen';

const defaultNavigationOptions ={
  headerTintColor : 'white',
  headerStyle: {
    backgroundColor : 'tomato'
  }
}

class DetailScreen extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>개인 정보 디테일 화면</Text>
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  Home: MyVehicleScreen,
  VehicleDetail: VehicleDetailScreen
}, { defaultNavigationOptions });

const AuctionStack = createStackNavigator({
  AuctionList : AuctionListScreen,
  VehicleDetail: VehicleDetailScreen
}, { defaultNavigationOptions });

const SettingsStack = createStackNavigator({
  Settings : SettingsScreen,
  Detail: DetailScreen
}, { defaultNavigationOptions });

const MainTab = createBottomTabNavigator({
  Mycars : HomeStack,
  Auction : AuctionStack,
  Settings : SettingsStack
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'MyCars') {
        iconName = 'md-car';
      } else if (routeName === 'Auction') {
        iconName = 'ios-trending-up';
      } else if (routeName === 'Settings') {
        iconName = 'ios-settings';
      }
      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return (
        <Ionicons
          name={iconName}
          size={horizontal ? 20 : 25}
          color={tintColor}
        />
      );
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

const VehicleEditorStack = createStackNavigator({
  VehicleEditor: VehicleEditorScreen
});

const ListingEditorStack = createStackNavigator({
  ListingEditor: ListingEditorScreen
});

const RootStack = createStackNavigator({
  Main: {
    screen: MainTab
  }, 
  VehicleEditorStack,
  ListingEditorStack,
  login : LoginScreen
});

export default createAppContainer(RootStack);
