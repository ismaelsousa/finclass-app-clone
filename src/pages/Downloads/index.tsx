import React from 'react';
import Separator from '../../components/Separator';
import download from '../../../assets/icons/download-rounded.png'
import {Ball, Container, ContainerBalls, Icon, Title} from './styles'
import { useTheme } from 'styled-components';

const  Downloads: React.FC = () => {
  const {colors} = useTheme()
  return (
    <Container>
      <Icon source={download} style={{tintColor:colors.primary.main}}/>
      <Separator height={40} />
      <Title size={20} type='bold'>Você não tem downloads</Title>
      <Separator height={20} />
      <Title>{`Os vídeos e aulas que baixar \nvão aparecer aqui`}</Title>
      <Separator height={40} />
      <ContainerBalls>
        {Array(6).fill(0,0,6).map(item=><Ball/>)}
      </ContainerBalls>
    </Container>
)

};

export default  Downloads;