import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Input from '../../components/Input';
import appColors from '../../styles/colors';
import { appFonts } from '../../styles/fonts';
import lock from './../../../assets/icons/lock/icon.png'

const  Login: React.FC = () => {
  const navigation = useNavigation()

  const handleGoBack = () => navigation.goBack()
  
  return (
    <SafeAreaView 
      style={{
        backgroundColor:appColors.backgroundScreen, 
        flex:1,
      }}
    >
      <View style={{backgroundColor:appColors.backgroundScreen, flex:1, marginHorizontal: 20,}}>
      <View style={{height:20}}/>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <BackButton onPress={handleGoBack}/>
        <View style={{flexDirection:'row',}}>
          <Text style={[appFonts.Regular,{fontSize:13}]}>Recuperar senha</Text>
          <View style={{width:10}}/>
          <Image style={{width:16,height:16, }} resizeMode='contain' source={lock}/>
        </View>
      </View>
      <View style={{height:30}}/>
      <Text style={[appFonts.Bold, {fontSize:22}]}>{`Acessar\nminha conta`}</Text>
      <View style={{height:35}}/>
      <Input   
        placeholder='Insira seu e-mail'
        // error='E-mail é obrigatório'
        name='E-mail'
      />
      <View style={{height:25}}/>
      <Input   
        placeholder='Insira sua senha'
        name='Senha'
        securityTextEntry
      />
      
      <View style={{height:55}}/>
      <Button 
        title='Entrar' 
        disabled
      />

      </View>
    </SafeAreaView>
  )

};

export default  Login;