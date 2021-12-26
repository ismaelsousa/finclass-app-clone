import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Access from '../../pages/Access';
import Login from '../../pages/Login';

const Stack = createNativeStackNavigator();

const  SignInStack: React.FC = () => {
  return (
    <Stack.Navigator defaultScreenOptions={{
      header:()=>null
    }}>
      <Stack.Screen 
        name='access' 
        component={Access} 
        options={{
          header: ()=>null
        }} 
      />
      <Stack.Screen 
        name='login' 
        component={Login} 
        options={{
          header: ()=>null
        }} 
      />
    </Stack.Navigator>
  )
};

export default  SignInStack;