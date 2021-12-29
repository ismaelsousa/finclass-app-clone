import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';

const Tab = createBottomTabNavigator();

const  SignedInBottomTab: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{header:()=>null}} />
    </Tab.Navigator>
  );
};

export default  SignedInBottomTab;