import React, { useMemo } from 'react';
import { Props } from './types';
import {Container,Title} from './styles'
import { useTheme } from 'styled-components';
import Separator from '../Separator';

const  Button = ({title, onPress, disabled, icon, outlined, color, textType = 'regular', textColor }:Props) => {

  const {colors} = useTheme()

  const titleColor = useMemo(()=>{
    if(textColor) return textColor
    if(disabled) return colors.backdrop.main
    return outlined? colors.background.onMain : colors.background.main 
  },[textColor,disabled, outlined,colors])

  return (
    <Container onPress={onPress} disabled={disabled} outlined={outlined||disabled} color={color}  >
        {!!icon && (
          <>
            {icon}
            <Separator width={15}/>
          </>
        )}

        <Title  color={titleColor} type={textType} >{title}</Title>
    </Container>
  )
};

export default  Button;