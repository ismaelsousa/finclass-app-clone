import React from 'react';
import { useTheme } from 'styled-components';
import Separator from '../../../../components/Separator';
import Text from '../../../../components/Text';

import playIcon from '../../../../../assets/icons/play.png'
import plusIcon from '../../../../../assets/icons/plus.png'


import { 
  BannerImageBackground, 
  ButtonContainer, 
  ButtonHeaderContained, 
  ButtonHeaderOutlined, 
  ButtonIcon, 
  Gradient, 
  TextContainer 
} from './styles';
import { Props } from './types';
import { useWindowDimensions } from 'react-native';


const  Banner = ({description, presenter, source}:Props) => {

  const {colors} = useTheme()
  const {width} = useWindowDimensions()

  return (
    <BannerImageBackground resizeMode='cover' width={width} source={source}>
        <TextContainer>
          <Text type='bold' size={12}>{presenter}</Text>
          <Text type='bold' size={26}>{description}</Text>
        </TextContainer>
        <Gradient colors={['transparent', colors.background.main]} >
        <Separator height={20}/>
          <ButtonContainer>
            <ButtonHeaderContained >
              <ButtonIcon source={playIcon}/>
              <Separator width={10}/>
              <Text type='bold' size={12} color={colors.background.main}>Assistir</Text>
            </ButtonHeaderContained>
            <Separator width={15}/>
            <ButtonHeaderOutlined >
              <ButtonIcon source={plusIcon} style={{tintColor: colors.background.onMain}}/>
              <Separator width={10}/>
              <Text type='bold' size={12}>Detalhes</Text>
            </ButtonHeaderOutlined>
          </ButtonContainer>
          <Separator height={45}/>
        </Gradient>
    </BannerImageBackground>   
  )

};

export default  Banner;