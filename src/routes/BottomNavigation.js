import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//
import HomeScreen from '../screen/HomeScreen/HomeScreen';

export default function BottomNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {backgroundColor: '#030841'},
        showLabel: false,
        style: {borderTopWidth: 0},
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //   tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={HomeScreen}
        options={{
          //   tabBarLabel: 'Upload',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="upload" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
