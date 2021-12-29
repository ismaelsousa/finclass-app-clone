import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthProvider from './context/Auth';
import Navigation from './navigation';

const  App: React.FC = () => {

return (
  <AuthProvider>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  </AuthProvider>
)

};

export default  App;