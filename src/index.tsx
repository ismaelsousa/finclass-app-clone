import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SignInStack from './navigation/SignInStack';

const  App: React.FC = () => {

return (
  <NavigationContainer>
    <SignInStack/>
  </NavigationContainer>
)

};

export default  App;