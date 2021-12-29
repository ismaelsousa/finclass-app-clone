import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import { useTheme } from 'styled-components';
import { Container, Icon } from './styles';
import home from '../../../assets/icons/home.png';
import download from '../../../assets/icons/download.png';
import boxsearch from '../../../assets/icons/boxsearch.png';
import boxmenu from '../../../assets/icons/boxmenu.png';
import Text from '../../components/Text';
import Downloads from '../../pages/Downloads';

const Tab = createBottomTabNavigator();

const  SignedInBottomTab: React.FC = () => {
  const {colors} = useTheme()

  const handleSizeTo80Percentage = (size:number)=>size*0.8

  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarBackground: ()=><Container />,
        tabBarActiveTintColor:colors.background.onMain,
        tabBarInactiveTintColor:colors.placeholder.main,
      }}
      >
      <Tab.Screen 
        name="home"  
        component={Home} 
        options={{
          header:()=>null, 
          title:'Início', 
          tabBarIcon:({color, size})=><Icon  source={home} size={handleSizeTo80Percentage(size)} style={{tintColor:color}} />,
          tabBarLabel:({color})=><Text type='bold' size={8} color={color}>Início</Text>
        }} />

      <Tab.Screen 
        name="downloads"  
        component={Downloads} 
        options={{
          header:()=>null, 
          title:'Downloads',
          tabBarIcon:({color, size})=><Icon source={download} size={handleSizeTo80Percentage(size)} style={{tintColor:color}} />,
          tabBarLabel:({color})=><Text type='bold' size={8} color={color}>Downloads</Text>
        }} 
      
      />
      <Tab.Screen 
      name="search"  
      component={Home} 
      options={{
        header:()=>null, 
        title:'Buscar',
        tabBarIcon:({color, size})=><Icon source={boxsearch} size={handleSizeTo80Percentage(size)} style={{tintColor:color}} />,
        tabBarLabel:({color})=><Text type='bold' size={8} color={color}>Buscar</Text>
      }} />
      <Tab.Screen 
      name="menu"  
      component={Home} 
      options={{
        header:()=>null, 
        title:'Menu',
        tabBarIcon:({color, size})=><Icon source={boxmenu} size={handleSizeTo80Percentage(size)} style={{tintColor:color}} />,
        tabBarLabel:({color})=><Text type='bold' size={8} color={color}>Menu</Text>
      }} />
    </Tab.Navigator>
  );
};

export default  SignedInBottomTab;