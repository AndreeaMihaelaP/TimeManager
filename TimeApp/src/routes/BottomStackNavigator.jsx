import 'react-native-gesture-handler';
import * as React from 'react';
import PropTypes from 'prop-types'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Profile from '../screens/Profile';

import colors from '../config/colors'


const Tab = createMaterialBottomTabNavigator();

const BottomStackNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colors.ACTIVE_COLOR}
        inactiveColor={colors.INACTIVE_COLOR}
        barStyle={styles.tabNavigator}
      >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} />
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chart-bubble" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = {
  tabNavigator: {
    backgroundColor: colors.PRIMARY_COLOR
  }
}

BottomStackNavigator.propTypes = {
  color: PropTypes.string,
}
export default BottomStackNavigator;