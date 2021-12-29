import React from 'react';
import Separator from '../../components/Separator';
import download from '../../../assets/icons/download-rounded.png'
import { Container, Icon, Title} from './styles'
import { useTheme } from 'styled-components';
import Dots from '../../components/Dots';

const  Downloads = () => {

  const {colors} = useTheme()

  return (
    <Container>
      <Icon source={download} style={{tintColor:colors.primary.main}}/>
      <Separator height={40} />
      <Title size={22} type='bold'>Você não tem downloads</Title>
      <Separator height={20} />
      <Title>{`Os vídeos e aulas que baixar \nvão aparecer aqui`}</Title>
      <Separator height={40} />
     <Dots amount={6}/>
    </Container>
)

};

export default  Downloads;