
import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../screen/consts/colors';
import {View} from 'react-native';
import HomeScreen from '../../views/screen/HomeScreen';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
       inactiveTintColor: '#fff',
       activeBackgroundColor: '#bc342a',
       inactiveBackgroundColor: '#E1340D',
           style: {
                 backgroundColor: '#fff2cc',
                 paddingBottom: 2
           }
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Destinos"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="location-pin" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Paquetes"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="local-mall" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="¿Que hacer?"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Otros"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="add-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;