import React, { useCallback, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import finclassIcon from "../../../assets/icons/logo/Vector.png";
import finclassesIcon from "../../../assets/icons/finclasses/finclasses.png";
import finseriesIcon from "../../../assets/icons/finseries/finseries.png";
import finbooksIcon from "../../../assets/icons/finbooks/finbooks.png";
import thiagoNigro from "../../../assets/images/thiago-nigro.png";
import perini from "../../../assets/images/perini.png";
import perrucho from "../../../assets/images/perrucho.png";
import Steps from "./localComponents/Steps";

import {
  BannerContainer,
  Container,
  Content,
  FinclassIcon,
  IconFin,
} from "./styles";
import { FlatList, ScrollView, useWindowDimensions } from "react-native";
import Banner from "./localComponents/Banner";
import Text from "../../components/Text";
import Separator from "../../components/Separator";
import { useTheme } from "styled-components";
import LastWatched from "./localComponents/LastWatched";
import Section from "./localComponents/Section";
import Card from "./localComponents/Card";
import { data, data2 } from "./mock";

const Home: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  /**
   * State
   */
  const [sliderPage, setSliderPage] = useState(0);

  /**
   * Callbacks
   */
  const setSliderPageEvent = useCallback(
    (event: any) => {
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.ceil(x / width);
      if (indexOfNextScreen !== sliderPage) {
        setSliderPage(indexOfNextScreen);
      }
    },
    [sliderPage, width]
  );

  return (
    <Container>
      <ScrollView>
        <BannerContainer>
          <FinclassIcon top={top} source={finclassIcon} />
          <ScrollView
            decelerationRate="fast"
            snapToInterval={width}
            snapToAlignment="center"
            bounces={false}
            onScroll={(event: any) => {
              setSliderPageEvent(event);
            }}
            alwaysBounceHorizontal={false}
            scrollEventThrottle={8}
            pagingEnabled
            horizontal
          >
            <Banner
              source={thiagoNigro}
              description="Diversificação"
              presenter="Thiago Nigro"
            />
            <Banner
              source={perini}
              description="Reserva de valor"
              presenter="Bruno Perini"
            />
            <Banner
              source={perrucho}
              description="Primeiros Passos"
              presenter="Breno Perrucho"
            />
          </ScrollView>
          <Steps index={sliderPage} />
        </BannerContainer>
        <Separator height={45} />
        <Content>
          <Section
            leftNode={
              <Text size={16} type="bold" color={colors.placeholder.main}>
                Continue de onde parou
              </Text>
            }
          />
          <Separator height={15} />
          <LastWatched />
        </Content>
        <Separator height={30} />

        <Content>
          <Section
            leftNode={<IconFin source={finclassesIcon} resizeMode="contain" />}
          />
        </Content>

        <Separator height={30} />

        <FlatList
          style={{
            marginLeft: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          ItemSeparatorComponent={() => <Separator width={15} />}
          keyExtractor={(item) => `${item.desc}+${item.title}-finclass`}
          renderItem={({ item }) => (
            <Card
              source={item.image}
              title={item.title}
              description={item.desc}
            />
          )}
        />

        <Separator height={30} />

        <Content>
          <Section
            leftNode={<IconFin source={finseriesIcon} resizeMode="contain" />}
          />
        </Content>

        <Separator height={30} />

        <FlatList
          style={{
            marginLeft: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data2}
          ItemSeparatorComponent={() => <Separator width={15} />}
          keyExtractor={(item) => `${item.desc}+${item.title}-finseries`}
          renderItem={({ item }) => (
            <Card
              source={item.image}
              title={item.title}
              description={item.desc}
            />
          )}
        />

        <Separator height={30} />

        <Content>
          <Section
            leftNode={<IconFin source={finbooksIcon} resizeMode="contain" />}
          />
        </Content>

        <Separator height={30} />

        <FlatList
          style={{
            marginLeft: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.map((item) => item).reverse()}
          ItemSeparatorComponent={() => <Separator width={15} />}
          keyExtractor={(item) => `${item.desc}+${item.title}-finbooks`}
          renderItem={({ item }) => (
            <Card
              source={item.image}
              title={item.title}
              description={item.desc}
            />
          )}
        />

        <Separator height={30} />
      </ScrollView>
    </Container>
  );
};

export default Home;
