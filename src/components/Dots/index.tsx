import React from 'react';

import {ContainerDots, Dot} from './styles'
import { Props } from './types';

const  Dots  = ({amount}:Props) => {
  return (
    <ContainerDots amount={amount}>
      {Array(amount).fill(0,0,amount).map((_,index)=><Dot key={index}/>)}
    </ContainerDots>
  )

};

export default  Dots;