import React, { useEffect, useState } from 'react';
import { Props } from './types';

import {Container} from './styles'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const  Step = ({isActive}:Props) => {

  const [config] = useState({
    duration: 250,
  })

  const width = useSharedValue(12)

  const animatedStyles = useAnimatedStyle(()=>{
    return {width: width.value}
  })

  useEffect(()=>{
    if(isActive){
      width.value = withTiming(12,config)
      return
    }
    width.value = withTiming(6,config)
  },[isActive, width])

  return <Container style={[animatedStyles]}  isActive={isActive}/>;

};

export default  Step;