import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

import perrucho from '../../../../../assets/images/perrucho.png'
import Separator from '../../../../components/Separator';
import Text from '../../../../components/Text';
import {Container, Content, Image} from './styles'

const  LastWatched: React.FC = () => {
  const {colors} = useTheme()
  return (
    <Container >
      <Content>
        <Image source={perrucho} resizeMode='cover' />
        <Separator width={15}/>
        <View>
          <Text type='bold'>Na Prática</Text>
          <Separator height={5}/>
          <Text type='semiBold' size={10} color={colors.placeholder.main}>Originais</Text>
        </View>
      </Content>
    </Container>
  )
};

export default  LastWatched;