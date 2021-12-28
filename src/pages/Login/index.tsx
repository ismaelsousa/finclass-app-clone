import { useNavigation } from '@react-navigation/native';
import React from 'react';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Separator from '../../components/Separator';
import Text from '../../components/Text';
import lock from './../../../assets/icons/lock/icon.png'
import { Container, Content, Header, LockIcon, OptionRightHeader } from './styles';

const  Login: React.FC = () => {

  const navigation = useNavigation()

  const handleGoBack = () => navigation.goBack()
  
  return (
    <Container>
      <Content>
        <Separator height={20} />
        <Header>
          <BackButton onPress={handleGoBack}/>
          <OptionRightHeader>
            <Text size={13}>Recuperar senha</Text>
            <Separator width={10}/>
            <LockIcon source={lock}/>
          </OptionRightHeader>
        </Header>
        <Separator height={30}/>
        <Text size={22} type='bold'>{`Acessar\nminha conta`}</Text>
        <Separator height={35}/>
        <Input   
          placeholder='Insira seu e-mail'
          // error='E-mail é obrigatório'
          name='E-mail'
        />
        <Separator height={25}/>
        <Input   
          placeholder='Insira sua senha'
          name='Senha'
          securityTextEntry
        />
        <Separator height={55}/>
        <Button 
          title='Entrar' 
          // disabled
          textType='bold'
        />
      </Content>
    </Container>
  )

};

export default  Login;