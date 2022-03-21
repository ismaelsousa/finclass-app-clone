import React from "react";
import Button from "../../components/Button";
import Separator from "../../components/Separator";
import banner from "../../../assets/images/banner/image.png";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import emailIcon from "./../../../assets/icons/email.png";
import { Banner, Container, Content, EmailIcon, ImpactPhrase } from "./styles";

const Access: React.FC = () => {
  const navigation = useNavigation();

  const { colors } = useTheme();

  const handleButtonLogin = () => navigation.navigate("login");

  return (
    <Container>
      <Banner resizeMode="contain" source={banner} />
      <Content>
        <ImpactPhrase type="bold">
          {`Aprenda a investir e\nconquiste sua liberdade\nfinanceira`}
        </ImpactPhrase>
        <Separator height={30} />
        <Button title="Assine agora" textType="bold" />
        <Separator height={20} />
        <Button
          outlined
          textType="semiBold"
          icon={
            <EmailIcon
              style={{
                tintColor: colors.background.onMain,
              }}
              source={emailIcon}
            />
          }
          title="Entrar com e-mail"
          onPress={handleButtonLogin}
        />
        <Separator height={45} />
      </Content>
    </Container>
  );
};

export default Access;
