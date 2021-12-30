import React from 'react';

import {Container, Step} from './styles'
import { Props } from './types';

const  Steps = ({index}:Props) => {

  return (
    <Container>
      <Step index={index===0}/>
      <Step index={index===1}/>
      <Step index={index===2}/>
    </Container>
  )
};

export default  Steps;