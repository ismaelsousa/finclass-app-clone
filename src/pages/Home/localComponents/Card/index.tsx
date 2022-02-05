import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';

import Separator from '../../../../components/Separator';
import Text from '../../../../components/Text';

import {Container, Cover} from './styles'
import { Props } from './types';

const  Card = ({title, description, source}:Props) => {
  const {width, height} = useWindowDimensions()
  const {colors} = useTheme()

  return (
    <Container windowWidth={width} >
      <Cover 
        source={source} 
        windowWidth={width}
        windowHeight={height}
      />
      <Separator height={15}/>
      <Text type='bold' numberOfLines={2}>{title}</Text>
      {!!description && (
        <>
          <Separator height={5}/>
          <Text 
            size={10}
            type='bold' 
            numberOfLines={2} 
            color={colors.placeholder.main}
          >
            {description}
          </Text>
        </>
      )}
    </Container>
  )
};

export default  Card;