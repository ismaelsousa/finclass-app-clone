import React, { useCallback, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import finclassIcon from '../../../assets/icons/logo/Vector.png'
import thiagoNigro from '../../../assets/images/thiago-nigro.png'
import perini from '../../../assets/images/perini.png'
import perrucho from '../../../assets/images/perrucho.png'
import Steps from './components/Steps';

import {BannerContainer, Container, FinclassIcon } from './styles'
import { ScrollView, useWindowDimensions } from 'react-native';
import Banner from './components/Banner';

const  Home: React.FC = () => {

  const {top} = useSafeAreaInsets()
  const {width} = useWindowDimensions()

  /**
   * State
   */
     const [sliderPage, setSliderPage] = useState(0);

  /**
   * Callbacks
   */
   const setSliderPageEvent = useCallback(
    (event: any) => {
      const {x} = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.ceil(x / width);
      if (indexOfNextScreen !== sliderPage) {
        setSliderPage(indexOfNextScreen);
      }
    },
    [sliderPage, width],
  );

  return (
    <Container>
      <ScrollView>
        <BannerContainer>
          <FinclassIcon top={top} source={finclassIcon} />
          <ScrollView  
            decelerationRate='fast'
            snapToInterval={width}
            snapToAlignment='center'
            bounces={false}
            onScroll={(event: any) => {
              setSliderPageEvent(event);
            }}
            alwaysBounceHorizontal={false}
            scrollEventThrottle={8}
            pagingEnabled
            horizontal>
            <Banner source={thiagoNigro} description='Diversificação' presenter='Thiago Nigro'/>
            <Banner source={perini} description='Reserva de valor' presenter='Bruno Perini'/>
            <Banner source={perrucho} description='Primeiros Passos' presenter='Breno Perrucho'/>
          </ScrollView>
          <Steps index={sliderPage}/>
        </BannerContainer>
      </ScrollView>
    </Container>
  )
};

export default  Home;