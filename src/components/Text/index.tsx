import React from 'react';
import { Props } from './types';

import {Container} from './styles'
import { useTheme } from 'styled-components';

const  Text  = ({type = 'regular', size=14, color, ...rest}: Props) => {
  
  const {colors} = useTheme()

  return <Container type={type} size={size} color={color || colors.background.onMain} {...rest} />;

};

export default  Text;