import React from 'react';
import {Image, Pressable} from 'react-native';
import { useTheme } from 'react-native-paper';
import { Props } from './types';

const  BackButton = ({onPress}:Props) => {
const {colors} = useTheme()
return (
  <Pressable onPress={onPress} style={{
    backgroundColor: colors.background,
    height: 30,
    width: 30,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'
  }} >
    <Image 
      width={10} 
      height={10} 
      style={{
        position: 'absolute',
        width:10, 
        height:10, 
        tintColor:colors.text }}
      source={require('../../../assets/icons/chevron-left.png')}
    />
  </Pressable>
 )
};

export default  BackButton;